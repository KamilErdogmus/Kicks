import { colors } from "../../Utils/Constants";

const Color = ({ data }: { data: string }) => {
  const array = data.split(",");

  return (
    <div>
      <h2 className="mb-3">COLORS</h2>

      <div className="flex gap-4">
        {array.map((item, i) => {
          const found = colors.find((i) => i.id === item);
          return (
            <div
              key={i}
              style={{ background: found?.code || "gray" }}
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Color;
