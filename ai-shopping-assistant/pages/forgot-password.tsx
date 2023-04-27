import Link from 'next/link';
import { useEffect, useState } from 'react';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { showAlert } from '@/public/utils';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [timer, setTimer] = useState(2 * 60); // 2 minutes

  useEffect(() => {
    if (timer > 0 && emailSent) {
      const timeout = setTimeout(() => setTimer(value => value - 1), 1000);
      return () => clearTimeout(timeout);
    }
  }, [timer, emailSent]);

  const resend = () => {
    // logic for resending goes here

    // after resending...
    showAlert({ msg: 'Email sent' });
    setTimer(2 * 60);
  };

  const proceed = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // API and backend call to proceed to send reset password link
    setEmailSent(true);
  };

  return (
    <MainLayout>
      <FormAside />

      {emailSent ? (
        <aside className='relative font-medium text-[14px] leading-[17px] overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[70px] pb-[30px] px-[92px] laptops:px-[210px] laptops:w-full laptops:max-w-[90vw]'>
          <p className='text-right'>
            {Math.floor(timer / 60)} min : {(timer % 60).toString().padStart(2, '0')} sec
          </p>

          <h1 className='text-[16px] leading-8 mt-[63px]'>Email sent!</h1>

          <p className='mt-5 leading-7 text-[rgba(0,0,0,0.5)]'>
            We sent an email with a reset link to{' '}
            <span className='font-semibold text-black'>{email}</span>. If you didn't receive the
            email, check your spam folder or tap the resend button.
          </p>

          <button
            onClick={resend}
            disabled={timer > 0}
            className='mt-10 bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500'
          >
            Resend
          </button>

          <Link
            href='/sign-in'
            className='font-normal text-[12px] block leading-7 mt-5 text-center text-[rgba(0,0,0,0.5)] w-max mx-auto'
          >
            Return to login
          </Link>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0' />
        </aside>
      ) : (
        <aside className='relative overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw]'>
          <header className='max-w-[496px]'>
            <p className='font-semibold text-[26px] leading-8 text-black'>Forgot Password?</p>
            <p className='font-normal text-[14px] leading-[26px] text-[rgba(0,0,0,0.5)] mt-5'>
              Enter the email address associated with your account and we'll send you a link to
              reset your password.
            </p>
          </header>

          <form onSubmit={proceed} className='mt-[50px] font-normal'>
            <label htmlFor='email' className='block w-full'>
              <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>Email</span>
              <input
                required
                id='email'
                name='email'
                type='email'
                spellCheck='false'
                autoComplete='off'
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter the required email address'
                className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
              />
            </label>

            <input
              type='submit'
              value='Proceed'
              className='cursor-pointer mt-[30px] bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold text-[14px] leading-[17px] disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500'
            />
          </form>

          <Link
            href='/sign-in'
            className='font-normal text-[12px] block leading-7 mt-5 text-center text-[rgba(0,0,0,0.5)] w-max mx-auto'
          >
            Return to sign in
          </Link>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0' />
        </aside>
      )}
    </MainLayout>
  );
};

export default ForgotPassword;
