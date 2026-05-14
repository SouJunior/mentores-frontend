import { api } from '@/lib/axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ConfirmationPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { code, email } = router.query;

    if (!code || !email) {
      router.push('/login');
      return;
    }

    const handleConfirmation = async () => {
      try {
        const encodedEmail = encodeURIComponent(email as string);
        await api.patch(`/mentor/active?code=${code}&email=${encodedEmail}`);
        router.push('/login');
      } catch (error) {
        console.log(error);
        router.push('/login');
      }
    };

    handleConfirmation();
  }, [router.isReady, router.query]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Confirmando sua conta...</p>
    </div>
  );
};

export default ConfirmationPage;
