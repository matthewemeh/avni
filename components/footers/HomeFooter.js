import Link from 'next/link';

import Logo from '../icons/Logo';
import Globe from '../icons/Globe';

import FooterDropdown from '../FooterDropdown';

const HomeFooter = () => {
  const currentDate = new Date();

  return (
    <footer className='bg-wild-sand pt-[100px] pb-[50px] px-[22%] -mx-[21.4%] overflow-hidden dark:bg-woodsmoke'>
      <Logo />

      <FooterDropdown
        extraStyles={{ marginTop: '67px' }}
        title='Customer Services'
        options={[
          { option: 'Customer Service', href: '/' },
          { option: 'My orders', href: '/' },
          { option: 'Returns & Claims', href: '/' },
          { option: 'Delivery / Pickup system', href: '/' },
          { option: 'Request stock availability', href: '/' },
          { option: 'Request stock availability', href: '/' },
          { option: 'Contact us', href: '/' },
        ]}
      />
      <FooterDropdown title='About Avni Furniture' options={[]} />
    </footer>
  );
};

export default HomeFooter;
