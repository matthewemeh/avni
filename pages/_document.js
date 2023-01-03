import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth m-0 outline-0 p-0 list-none no-underline box-border'>
      <Head />
      <body className='text-outer-space bg-white dark:text-romance dark:bg-shark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
