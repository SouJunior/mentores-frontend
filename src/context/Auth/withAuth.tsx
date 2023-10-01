import { useRouter } from "next/router";
import useUser from "./useUser";
import { useEffect } from "react";

export const withAuth = (WrappedComponent: React.FC) => {
  return function AuthenticationProps() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!user || user === null) {
        router.push("/login");
      }
    }, [user]);

    return user ? <WrappedComponent /> : null;
  };
};
