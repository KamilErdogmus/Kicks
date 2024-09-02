import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProps {
  selectedType: string[];
  setSelectedType: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const TypeSize = ({ selectedType, setSelectedType }: IProps) => {
  const [params, setParams] = useSearchParams();
  const [open, setIsOpen] = useState<boolean>(true);

  const toggle = (type: string) => {
    setSelectedType(
      selectedType.includes(type)
        ? selectedType.filter((i) => i !== type)
        : [...selectedType, type]
    );
  };

  useEffect(() => {
    if (selectedType.length > 0) {
      params.set("type", selectedType.join(","));
    } else {
      params.delete("type");
    }
    setParams(params);
  }, [selectedType, params, setParams]);

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
        <div>
          {[
            "casual shoes",
            "runners",
            "hiking",
            "sneaker",
            "basketball",
            "golf",
            "outdoor",
          ].map((type) => (
            <div
              key={type}
              className="flex items-center gap-4 transition-all duration-500 animate-slide-down-size"
            >
              <input
                type="checkbox"
                id={type}
                checked={selectedType.includes(type)}
                onChange={() => toggle(type)}
              />
              <label
                htmlFor={type}
                className="select-none capitalize cursor-pointer"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeSize;
