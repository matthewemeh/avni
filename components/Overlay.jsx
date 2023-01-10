import { useContext } from 'react';
import { AppContext } from '../pages/_app';

const Overlay = ({ extraStyles }) => {
  const { menuOpened, setMenuOpened } = useContext(AppContext);

  return (
    <div
      style={extraStyles}
      onClick={() => setMenuOpened(false)}
      className={`fixed top-0 left-0 z-50 h-[100vh] w-[calc(100vw-400px)] ${
        menuOpened || 'opacity-0 invisible'
      }`}
    />
  );
};

export default Overlay;
