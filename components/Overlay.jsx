const Overlay = ({ extraStyles, visible, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={extraStyles}
      className={`fixed top-0 left-0 z-50 h-[100vh] w-full ${visible || 'opacity-0 invisible'}`}
    />
  );
};

export default Overlay;
