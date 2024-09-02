interface IProps {
  text?: string;
  src?: any;
  flex?: number;
  bg?: boolean;
}

const Buttons = ({ text, src, flex = 1, bg }: IProps) => {
  return (
    <button
      type="button"
      className={`flex items-center text-white w-full hover:text-yellow  justify-center py-[15.5px] text-[14px] tracking-[0.25px] rounded-lg ${
        bg ? "bg-blue" : "bg-gray-dark"
      }`}
      style={{ flex }}
    >
      {src ? <img src={src} alt="icon" /> : text}
    </button>
  );
};

export default Buttons;
