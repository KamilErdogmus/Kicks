import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProps {
  selectedGender: string[];
  setSelectedGender: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const Gender = ({
  selectedGender,
  setSelectedGender,
}: IProps) => {
  const [params, setParams] = useSearchParams();
  const [open, setIsOpen] = useState<boolean>(true);

  const toogle = (gender: string) => {
    setSelectedGender(
      selectedGender.includes(gender)
        ? selectedGender.filter((i) => i !== gender)
        : [...selectedGender, gender]
    );
  };

  useEffect(() => {
    if (selectedGender.length > 0) {
      params.set("gender", selectedGender.join(","));
    } else {
      params.delete("gender");
    }
    setParams(params);
  }, [selectedGender, params, setParams]);

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
        <h2 className="font-semibold text-[16px]">GENDER</h2>

        <img
          src={open ? "up.svg" : "down.svg"}
          alt="Toggle Button"
        />
      </div>
      {open && (
        <div>
          {["men", "women"].map((type) => (
            <div
              key={type}
              className="flex items-center gap-4 transition-all duration-500 animate-slide-down-size"
            >
              <input
                type="checkbox"
                id={type}
                checked={selectedGender.includes(type)}
                onChange={() => toogle(type)}
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

export default Gender;
