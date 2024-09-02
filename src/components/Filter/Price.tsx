import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Price = ({ value, setValue }: IProps) => {
  const [params, setParams] = useSearchParams();
  const [open, setIsOpen] = useState<boolean>(true);
  const debounceValue = useDebounce(value, 500);
  useEffect(() => {
    if (+debounceValue) {
      params.set("price", debounceValue);
    } else {
      params.delete("price");
    }
    setParams(params);
  }, [debounceValue, setParams]);

  const handleToggleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <div>
      <div
        onClick={(e) => {
          e.preventDefault();
          handleToggleOpen();
        }}
        className={`flex justify-between items-center cursor-pointer ${
          open ? "mb-4" : "mb-0"
        }`}
      >
        <h2 className="font-semibold text-[16px]">PRICE</h2>

        <img
          src={open ? "up.svg" : "down.svg"}
          alt="Toggle Button"
        />
      </div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="range"
          className="w-full appearance-none bg-gray-dark rounded-lg h-2"
          min={0}
          max={1000}
        />
        <div className="flex justify-between items-center text-[14px] text-gray-dark font-open font-semibold">
          <h2>${value}</h2>
          <h2>$1000</h2>
        </div>
      </div>
    </div>
  );
};

export default Price;
