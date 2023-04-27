import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { showAlert } from '@/public/utils';

const Verify = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const [timer, setTimer] = useState(2 * 60); // 2 minutes

  useEffect(() => {
    if (timer > 0) {
      const timeout = setTimeout(() => setTimer(value => value - 1), 1000);
      return () => clearTimeout(timeout);
    }
  }, [timer]);

  // componentDidMount
  useEffect(() => {
    // check if user has signed up previously...
    const email = Cookies.get('rhobuy-email');

    if (email) setUserEmail(email);
    else router.push('/sign-up');
  }, []);

  const resend = () => {
    // logic for resending goes here

    // after resending...
    showAlert({ msg: 'Email sent' });
    setTimer(2 * 60);
  };

  return (
    <MainLayout>
      <FormAside />

      <aside className='relative font-medium text-[14px] leading-[17px] overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[70px] pb-[30px] px-[92px] laptops:px-[210px] laptops:w-full laptops:max-w-[90vw]'>
        <p className='text-right'>
          {Math.floor(timer / 60)} min : {(timer % 60).toString().padStart(2, '0')} sec
        </p>

        <h1 className='text-[16px] leading-8 mt-[63px]'>Email verification</h1>

        <p className='mt-5 leading-7 text-[rgba(0,0,0,0.5)]'>
          Please take a moment to verify your email address. We sent an email with a verification
          link to <span className='font-semibold text-black'>{userEmail}</span>. If you didn't
          receive the email, check your spam folder or tap the resend button.
        </p>

        <button
          onClick={resend}
          disabled={timer > 0}
          className='mt-10 bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500'
        >
          Resend
        </button>

        <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0' />
      </aside>
    </MainLayout>
  );
};

export default Verify;
