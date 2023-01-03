import Image from 'next/image';
import { useState, useEffect } from 'react';

import logoDarkMode from '../public/assets/pngs/avni-full-blue-white.png';
import logoLightMode from '../public/assets/pngs/avni-full-blue-black.png';

const Logo = () => {
  const [logo, setLogo] = useState(logoLightMode);

  // componentDidMount
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (e.matches) {
        setLogo(logoDarkMode);
        localStorage.isDarkMode = 'true';
      } else {
        setLogo(logoLightMode);
        localStorage.isDarkMode = 'false';
      }
    });

    setLogo(localStorage.isDarkMode == 'true' ? logoDarkMode : logoLightMode);
  }, []);

  return <Image src={logo} width={80} height={20} alt='avni logo' />;
};

export default Logo;
