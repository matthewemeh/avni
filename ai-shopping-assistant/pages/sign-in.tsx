import Link from 'next/link';
import { useRef } from 'react';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { togglePassword } from '@/public/utils';

const SignIn = () => {
  const passwordref = useRef<HTMLInputElement>(null);

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // these are the user's input
    const { email, password } = Object.fromEntries(formData.entries());
    console.log(email, password);

    // API and backend call to sign in
  };

  return (
    <MainLayout>
      <FormAside />

      <aside className='overflow-y-auto w-[690px] bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw]'>
        <header className='grid grid-cols-[minmax(0,1fr)_57px] grid-rows-2 gap-y-5'>
          <p className='font-semibold text-[26px] leading-8 text-black'>Welcome Back!</p>
          <button className='w-[57px] h-[57px] rounded-[30px] border-[1px] border-[rgba(102,102,102,0.35)] row-start-1 row-end-3 col-start-2 self-center ml-auto' />
          <p className='font-normal text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>
            Let's sign you in to get back to where you stopped
          </p>
        </header>

        <form onSubmit={signIn} className='mt-[59px] text-black font-normal'>
          <label htmlFor='email' className='block w-full'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>Email</span>
            <input
              required
              id='email'
              name='email'
              type='email'
              spellCheck='false'
              autoComplete='off'
              placeholder='Enter the required email address'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
            />
          </label>

          <label htmlFor='password' className='block mt-6 relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>Password</span>
            <input
              required
              id='password'
              name='password'
              type='password'
              ref={passwordref}
              spellCheck='false'
              autoComplete='off'
              placeholder='Enter the required password'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
            />
            <div
              onClick={() => togglePassword(passwordref)}
              className='cursor-pointer w-[15px] h-[13px] bg-no-repeat bg-center bg-red-600 absolute right-[22px] top-[60%]'
            />
          </label>

          <div className='mt-3 flex items-center px-5 justify-between text-[rgba(0,0,0,0.5)] text-[12px] leading-[15px]'>
            <label htmlFor='remember' className='flex items-center gap-x-[10px] cursor-pointer'>
              <input type='radio' id='remember' className='accent-gray' />
              Remember me
            </label>

            <Link href='/forgot-password' className=''>
              Forgot password?
            </Link>
          </div>

          <input
            type='submit'
            value='Sign In'
            className='cursor-pointer py-5 w-full mt-[42px] bg-dove-gray rounded-[30px] text-white font-semibold text-[14px] leading-[17px]'
          />
        </form>

        <p className='mt-5 text-center text-[rgba(0,0,0,0.5)] text-[12px] leading-7'>
          Don't have an account yet?{' '}
          <Link href='/sign-up' className='font-semibold'>
            Create an account now!
          </Link>
        </p>

        <FormFooter />
      </aside>
    </MainLayout>
  );
};

export default SignIn;
