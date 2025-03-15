import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage
    router.push('/');
  }, [router]);

  return null;
};

export default NotFoundPage;
