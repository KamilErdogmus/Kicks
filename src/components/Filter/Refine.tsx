import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProps {
  selectedRefine: string[];
  setSelectedRefine: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const Refine = ({
  setSelectedRefine,
  selectedRefine,
}: IProps) => {
  const [params, setParams] = useSearchParams();
  const [open, setIsOpen] = useState<boolean>(true);

  const toggle = (type: string) => {
    setSelectedRefine(
      selectedRefine.includes(type)
        ? selectedRefine.filter((i) => i !== type)
        : [...selectedRefine, type]
    );
  };

  useEffect(() => {
    if (selectedRefine.length > 0) {
      params.set("refine", selectedRefine.join(","));
    } else {
      params.delete("refine");
    }
    setParams(params);
  }, [selectedRefine, params, setParams]);

  const handleToggleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <div className="lg:mt-6">
      <div
        onClick={(e) => {
          e.preventDefault();
          handleToggleOpen();
        }}
        className={`flex justify-between items-center cursor-pointer ${
          open ? "mb-4" : "mb-0"
        }`}
      >
        <h2 className="font-semibold text-[16px]">REFINED BY</h2>
        <img
          src={open ? "up.svg" : "down.svg"}
          alt="Toggle Button"
        />
      </div>
      {open && (
        <div className="flex gap-4 justify-start items-center transition-all duration-500 animate-slide-down">
          <button
            type="button"
            onClick={() => toggle("mens")}
            className={`w-fit px-4 py-3 rounded-xl text-[12px] transition ${
              selectedRefine.includes("mens")
                ? "bg-blue text-white"
                : "bg-white text-gray-dark"
            }`}
          >
            Mens
          </button>
          <button
            type="button"
            onClick={() => toggle("casual")}
            className={`w-fit px-4 py-3 rounded-xl text-[12px] transition ${
              selectedRefine.includes("casual")
                ? "bg-blue text-white"
                : "bg-white text-gray-dark"
            }`}
          >
            Casual
          </button>
        </div>
      )}
    </div>
  );
};

export default Refine;
