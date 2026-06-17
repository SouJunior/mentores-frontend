import { api } from '@/lib/axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const activationEndpoints = {
  mentor: '/mentor/active',
  user: '/user/active',
  mentee: '/user/active',
} as const;

const ConfirmationPage = () => {
  const router = useRouter();
  const { isReady, query, push } = router;

  useEffect(() => {
    if (!isReady) return;

    const { code, email, type } = query;

    if (!code || !email) {
      push('/login');
      return;
    }

    const handleConfirmation = async () => {
      try {
        const resolvedCode = Array.isArray(code) ? code[0] : code;
        const resolvedEmail = Array.isArray(email) ? email[0] : email;
        const encodedEmail = encodeURIComponent(resolvedEmail);
        const normalizedType = Array.isArray(type) ? type[0] : type;
        const requestedEndpoint =
          normalizedType && normalizedType in activationEndpoints
            ? activationEndpoints[
                normalizedType as keyof typeof activationEndpoints
              ]
            : null;

        const endpointsToTry = requestedEndpoint
          ? [requestedEndpoint]
          : ['/mentor/active', '/user/active'];

        let activated = false;

        for (const endpoint of endpointsToTry) {
          try {
            await api.patch(
              `${endpoint}?code=${resolvedCode}&email=${encodedEmail}`,
            );
            activated = true;
            break;
          } catch {
            continue;
          }
        }

        if (!activated) {
          throw new Error('Unable to confirm account');
        }

        push('/login');
      } catch (error) {
        console.log(error);
        push('/login');
      }
    };

    handleConfirmation();
  }, [isReady, push, query]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Confirmando sua conta...</p>
    </div>
  );
};

export default ConfirmationPage;
