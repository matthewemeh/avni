import { ExtraStyle } from '@/public/interfaces';

interface Props {
  extraStyles?: ExtraStyle;
  extraClassNames?: string;
}

const FormFooter: React.FC<Props> = ({ extraStyles, extraClassNames }) => {
  const date = new Date();

  return (
    <footer
      style={extraStyles}
      className={`mt-[41px] font-semibold text-[10px] leading-3 text-[rgba(0,0,0,0.5)] text-center ${extraClassNames}`}
    >
      &copy; {date.getFullYear()}. Rhobuy from Avniverse, Inc.
    </footer>
  );
};

export default FormFooter;
