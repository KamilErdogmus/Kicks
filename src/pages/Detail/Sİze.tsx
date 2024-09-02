import { useState } from "react";
import { sizes } from "../../Utils/Constants";

const Size = ({ data }: { data: string }) => {
  const [selected, SetSelected] = useState<string>("");
  const stockSizes = data.split(",");

  const toogle = (size: string) => {
    if (selected === size) {
      SetSelected("");
    } else {
      SetSelected(size);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="mb-3 font-semibold text-[16px]">SIZE</h2>
        <span className="underline text-[14px]">SIZE CHART</span>
      </div>
      <div className="grid grid-cols-8 gap-1 md:grid-cols-6">
        {sizes.slice(0, 8).map((size, i) => {
          const found = selected === size;
          return (
            <button
              onClick={() => toogle(size)}
              key={i}
              disabled={!stockSizes.includes(size)}
              type="button"
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] ${
                found ? "bg-gray-dark text-white" : "bg-white"
              }`}
            >
              <span>{size}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
