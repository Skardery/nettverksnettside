import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/components/auth'; // Ensure this path is correct

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          Router.replace('/login'); // Redirect to login if not authenticated
        } else {
          setIsLoading(false); // Authenticated, stop showing loading message/spinner if you have one
        }
      });
    }, [Router]);

    if (isLoading) {
      return <div>Loading...</div>; // Or your loading indicator
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
