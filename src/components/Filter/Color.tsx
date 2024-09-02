import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../Utils/Constants";

interface IProps {
  selectedColor: string[];
  setSelectedColor: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const Color = ({ selectedColor, setSelectedColor }: IProps) => {
  const [params, setParams] = useSearchParams();
  const [open, setIsOpen] = useState<boolean>(true);

  const toggle = (color: string) => {
    setSelectedColor((prev) =>
      prev.includes(color)
        ? prev.filter((i) => i !== color)
        : [...prev, color]
    );
  };

  useEffect(() => {
    if (selectedColor.length > 0) {
      params.set("color", selectedColor.join(","));
    } else {
      params.delete("color");
    }
    setParams(params);
  }, [selectedColor, setParams]);

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
        <h2 className="font-semibold text-[16px]">COLORS</h2>

        <img
          src={open ? "up.svg" : "down.svg"}
          alt="Toggle Button"
        />
      </div>

      {open && (
        <div
          className={`grid grid-cols-5 gap-4 transition-all duration-500 animate-slide-down`}
        >
          {colors.map((color) => {
            const found = selectedColor.includes(color.id);
            return (
              <div
                style={{ background: color.code }}
                onClick={() => toggle(color.id)}
                key={color.id}
                className={`py-2 px-4 lg:px-0 text-center select-none rounded-md text-transparent cursor-pointer ring-blue-500 transition hover:bg-zinc-400 ${
                  found ? "ring-[4px]" : ""
                }`}
              >
                .
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Color;
