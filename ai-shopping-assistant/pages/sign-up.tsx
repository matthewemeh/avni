import Link from 'next/link';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import FormAside from '@/components/FormAside';
import FormFooter from '@/components/footers/FormFooter';
import MainLayout from '@/components/layouts/MainLayout';

import { showAlert, togglePassword } from '@/public/utils';

const SignUp = () => {
  const router = useRouter();

  const passwordref = useRef<HTMLInputElement>(null);
  const confirmPasswordref = useRef<HTMLInputElement>(null);

  const TERMS_OF_USE_URL = '/';
  const PRIVACY_POLICY_URL = '/';

  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // these are the user's input
    const { name, email, password, confirmPassword } = Object.fromEntries(formData.entries());

    if (password !== confirmPassword) return showAlert({ msg: 'Passwords do not match!' });
    Cookies.set('rhobuy-email', email as string);

    // API and backend call to sign up
    router.push('/verify');
  };

  return (
    <MainLayout>
      <FormAside />

      <aside className='overflow-y-auto w-[690px] bg-white border-[1px] border-[rgba(102,102,102,0.5)] rounded-3xl pt-[79px] pb-[30px] px-[70px] laptops:px-[187px] laptops:w-full laptops:max-w-[90vw]'>
        <header className='grid grid-cols-[minmax(0,1fr)_57px] grid-rows-2 gap-y-5'>
          <p className='font-semibold text-[26px] leading-8 text-black'>Create an account</p>
          <button className='w-[57px] h-[57px] rounded-[30px] border-[1px] border-[rgba(102,102,102,0.35)] row-start-1 row-end-3 col-start-2 self-center ml-auto' />
          <p className='font-normal text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>
            Let's sign you up to begin your journey in
            <span className='font-semibold'> Avniverse</span>
          </p>
        </header>

        <form
          onSubmit={signUp}
          className='mt-[59px] text-black font-normal grid grid-rows-2 grid-cols-2 gap-y-6 gap-x-[30px]'
        >
          <label htmlFor='name'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>Name</span>
            <input
              required
              id='name'
              name='name'
              type='text'
              spellCheck='false'
              autoComplete='off'
              placeholder='Enter your name'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
            />
          </label>

          <label htmlFor='email'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>Email</span>
            <input
              required
              id='email'
              name='email'
              type='email'
              spellCheck='false'
              autoComplete='off'
              placeholder='Enter your email address'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
            />
          </label>

          <label htmlFor='password' className='block relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>Password</span>
            <input
              required
              id='password'
              name='password'
              type='password'
              ref={passwordref}
              spellCheck='false'
              autoComplete='off'
              placeholder='Enter password'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
            />
            <div
              onClick={() => togglePassword(passwordref)}
              className='cursor-pointer w-[15px] h-[13px] bg-no-repeat bg-center bg-red-600 absolute right-[22px] top-[60%]'
            />
          </label>

          <label htmlFor='confirmPassword' className='block relative'>
            <span className='ml-5 text-[14px] leading-[17px] text-[rgba(0,0,0,0.5)]'>
              Confirm password
            </span>
            <input
              required
              type='password'
              spellCheck='false'
              autoComplete='off'
              id='confirmPassword'
              name='confirmPassword'
              ref={confirmPasswordref}
              placeholder='Re-enter password'
              className='mt-3 p-5 w-full bg-concrete rounded-[30px] text-[12px] leading-[15px] placeholder:text-[rgba(0,0,0,0.5)]'
            />
            <div
              onClick={() => togglePassword(confirmPasswordref)}
              className='cursor-pointer w-[15px] h-[13px] bg-no-repeat bg-center bg-red-600 absolute right-[22px] top-[60%]'
            />
          </label>

          <p className='text-[12px] leading-[15px] ml-5 text-[rgba(0,0,0,0.5)] col-start-1 col-end-3'>
            By creating an account, you agree to our{' '}
            <Link href={TERMS_OF_USE_URL} className='font-semibold'>
              Terms of use
            </Link>{' '}
            and{' '}
            <Link href={PRIVACY_POLICY_URL} className='font-semibold'>
              Privacy Policy
            </Link>
          </p>

          <input
            type='submit'
            value='Sign up'
            className='cursor-pointer col-start-1 col-end-3 py-5 w-full bg-dove-gray rounded-[30px] text-white font-semibold text-[14px] leading-[17px]'
          />
        </form>

        <p className='mt-5 text-center text-[rgba(0,0,0,0.5)] text-[12px] leading-7'>
          Already have an account?{' '}
          <Link href='/sign-in' className='font-semibold'>
            Sign in
          </Link>
        </p>

        <FormFooter />
      </aside>
    </MainLayout>
  );
};

export default SignUp;
