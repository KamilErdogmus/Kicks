import Price from "./Price";
import Color from "./Color";
import Gender from "./Gender";
import { useState } from "react";
import Size from "./Size";
import { useSearchParams } from "react-router-dom";
import Refine from "./Refine";
import TypeSize from "./TypeSize";

const Filter = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  const [params, setParams] = useSearchParams();

  const [selectedRefine, setSelectedRefine] = useState<string[]>(
    params.get("refine")?.split(",") || []
  );
  const [selectedSize, setSelectedSize] = useState<string[]>(
    params.get("size")?.split(",") || []
  );

  const [selectedColor, setSelectedColor] = useState<string[]>(
    params.get("color")?.split(",") || []
  );

  const [selectedGender, setSelectedGender] = useState<string[]>(
    params.get("gender")?.split(",") || []
  );

  const [selectedType, setSelectedType] = useState<string[]>(
    params.get("type")?.split(",") || []
  );

  const [value, setValue] = useState<string>(
    params.get("price") || "0"
  );

  const handleReset = () => {
    setParams(new URLSearchParams());
    setSelectedRefine([]);
    setSelectedSize([]);
    setSelectedColor([]);
    setSelectedGender([]);
    setSelectedType([]);
    setValue("0");
  };

  return (
    <div
      className={`${
        isOpen
          ? "max-lg:fixed max-lg:inset-0 max-lg:grid z-[9999] max-lg:place-items-center max-lg:bg-zinc-900/60 overflow-auto"
          : "max-lg:hidden"
      }`}
    >
      <div className="max-lg:h-[85vh] max-lg:mx-auto max-lg:max-w-lg max-lg:min-w-[300px] max-lg:overflow-y-scroll no-scrollbar">
        <div className="max-lg:flex max-lg:bg-white justify-between max-lg:p-4 rounded-t-md">
          <h2 className="text-2xl max-lg:text-xl font-semibold ">
            Filters
          </h2>
          <button onClick={close} className="lg:hidden">
            X
          </button>
        </div>

        <form className="max-lg:p-5 bg-gray flex flex-col gap-6 rounded-b-md">
          <Refine
            selectedRefine={selectedRefine}
            setSelectedRefine={setSelectedRefine}
          />
          <Size
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <Color
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <TypeSize
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <Gender
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />
          <Price value={value} setValue={setValue} />

          <button
            onClick={handleReset}
            type="reset"
            className="border p-2 border-gray-dark rounded-lg hover:bg-gray-dark hover:text-white transition"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
