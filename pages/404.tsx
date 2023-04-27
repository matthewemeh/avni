import Error from '@/components/Error';

const Error404 = () => {
  return (
    <Error
      errorCode={404}
      redirectLink='/home'
      redirectText='Go Shopping'
      errorMessage='This page could not be found'
      alertMessage='Sorry, the page you are trying to access cannot be found. Please check the URL or try again
        later.'
    />
  );
};

export default Error404;
