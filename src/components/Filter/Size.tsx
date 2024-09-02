import { useEffect, useState } from "react";
import { sizes } from "./../../Utils/Constants";
import { useSearchParams } from "react-router-dom";

interface Iprops {
  selectedSize: string[];
  setSelectedSize: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const Size = ({ setSelectedSize, selectedSize }: Iprops) => {
  const [params, setParams] = useSearchParams();
  const [open, setIsOpen] = useState<boolean>(true);

  const toggle = (num: string) => {
    setSelectedSize((prev) =>
      prev.includes(num)
        ? prev.filter((i) => i !== num)
        : [...prev, num]
    );
  };

  useEffect(() => {
    if (selectedSize.length > 0) {
      params.set("size", selectedSize.join(","));
    } else {
      params.delete("size");
    }
    setParams(params);
  }, [selectedSize, setParams]);

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
        <h2 className="font-semibold text-[16px]">SIZE</h2>
        <img
          src={open ? "up.svg" : "down.svg"}
          alt="Toggle Button"
        />
      </div>

      {open && (
        <div className="grid grid-cols-5 gap-4 transition-all duration-500 animate-slide-down">
          {sizes.map((item, index) => {
            const found = selectedSize.includes(item);
            return (
              <p
                onClick={() => toggle(item)}
                key={index}
                className={`py-2 px-4 lg:px-0 text-center text-[14px] tracking-[0.25px] rounded-md cursor-pointer transition hover:bg-zinc-400 ${
                  found
                    ? "bg-gray-dark text-white"
                    : "bg-white text-gray-dark"
                }`}
              >
                <span>{item}</span>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Size;
