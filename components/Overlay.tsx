import { ExtraStyle } from '@/public/interfaces';

interface Props {
  visible?: boolean;
  onClick: () => void;
  extraStyles?: ExtraStyle;
}

const Overlay: React.FC<Props> = ({ extraStyles, onClick, visible }) => {
  return (
    <div
      onClick={onClick}
      style={extraStyles}
      className={`fixed top-0 left-0 z-50 h-screen w-[calc(100vw-400px)] bg-[rgba(0,0,0,0.4)] transition-opacity duration-500 ${
        visible || 'opacity-0 invisible'
      }`}
    />
  );
};

export default Overlay;
