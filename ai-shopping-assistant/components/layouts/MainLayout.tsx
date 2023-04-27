interface Props {
  children: JSX.Element[];
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className='h-screen py-[30px] pl-[60px] pr-[50px] bg-[url(/assets/pngs/bg.png)] bg-no-repeat bg-center bg-cover flex justify-between laptops:justify-center laptops:px-[50px]'>
      {...children}
    </main>
  );
};

export default MainLayout;
