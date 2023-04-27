import Error from '@/components/Error';

const Error500 = () => {
  return (
    <Error
      errorCode={503}
      redirectLink='/'
      redirectText='Contact support team'
      errorMessage='A server error has occured'
      alertMessage='A server error has occurred. Please try again later or contact our support team for
      assistance.'
    />
  );
};

export default Error500;
