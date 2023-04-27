import Link from 'next/link';
import { useRef, useState } from 'react';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { showAlert, togglePassword } from '@/public/utils';

const ResetPassword = () => {
  const [emailReset, setEmailReset] = useState(false);

  const passwordref = useRef<HTMLInputElement>(null);
  const confirmPasswordref = useRef<HTMLInputElement>(null);

  const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // these are the user's input
    const { password, confirmPassword } = Object.fromEntries(formData.entries());
    if (password !== confirmPassword) return showAlert({ msg: 'Passwords do not match!' });

    // API and backend call to proceed to reset password
    showAlert({ msg: 'Password reset successfully' });
    setEmailReset(true);
  };

  return (
    <MainLayout>
      <FormAside />

      {emailReset ? (
        <aside className='relative overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[70px] pb-[30px] px-[92px]'>
          <h1 className='font-medium text-[16px] leading-8 mt-[70px]'>Reset Done</h1>

          <p className='mt-5 font-medium text-[14px] leading-7 text-[rgba(0,0,0,0.5)]'>
            Click “Return to login” to get back into your account. Let's get shopping again!
          </p>

          <Link
            href='/sign-in'
            className='mt-10 block text-center w-full bg-dove-gray py-[15px] text-white rounded-[30px] font-semibold text-[14px] leading-[17px] disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500'
          >
            Return to login
          </Link>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2' />
        </aside>
      ) : (
        <aside className='relative overflow-y-auto w-[690px] text-black bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw]'>
          <header className='max-w-[496px] font-semibold text-[26px] leading-8 text-black'>
            Forgot Password?
          </header>

          <form onSubmit={resetPassword} className='mt-[74px] font-normal flex flex-col gap-y-7'>
            <label htmlFor='password' className='block relative text-[12px] leading-[15px]'>
              <span className='ml-5 text-[rgba(0,0,0,0.5)]'>Password</span>
              <input
                required
                id='password'
                name='password'
                type='password'
                ref={passwordref}
                spellCheck='false'
                autoComplete='off'
                placeholder='Enter password'
                className='mt-[10px] p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
              />
              <div
                onClick={() => togglePassword(passwordref)}
                className='cursor-pointer w-[15px] h-[13px] bg-no-repeat bg-center bg-red-600 absolute right-[22px] top-[60%]'
              />
            </label>

            <label htmlFor='confirmPassword' className='block relative text-[12px] leading-[15px]'>
              <span className='ml-5 text-[rgba(0,0,0,0.5)]'>Confirm password</span>
              <input
                required
                type='password'
                spellCheck='false'
                autoComplete='off'
                id='confirmPassword'
                name='confirmPassword'
                ref={confirmPasswordref}
                placeholder='Re-enter password'
                className='mt-[10px] p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
              />
              <div
                onClick={() => togglePassword(confirmPasswordref)}
                className='cursor-pointer w-[15px] h-[13px] bg-no-repeat bg-center bg-red-600 absolute right-[22px] top-[60%]'
              />
            </label>

            <input
              type='submit'
              value='Reset'
              className='cursor-pointer mt-[2px] bg-dove-gray py-[15px] w-full text-white rounded-[30px] font-semibold text-[14px] leading-[17px] disabled:bg-[rgba(0,0,0,0.2)] transition-all duration-500'
            />
          </form>

          <FormFooter extraClassNames='absolute bottom-[30px] left-1/2 -translate-x-1/2 laptops:static laptops:translate-x-0' />
        </aside>
      )}
    </MainLayout>
  );
};

export default ResetPassword;
