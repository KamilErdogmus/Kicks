import { shoes } from "../../types";
import { calculatedValue } from "../../Utils/Calculate";
import Badge from "./Badge";

const Head = ({ data }: { data: shoes }) => {
  return (
    <div>
      <Badge discount={data.discount} />
      <h1 className="mt-[60px] text-[32px] text-gray-dark line-clamp-2">
        {data.name}
      </h1>
      <p className="mt-4">
        <span className="text-2xl text-blue">
          $
          {calculatedValue(data.price, data.discount).toFixed(2)}
        </span>
        <del className={data.discount ? "" : "hidden"}>
          (${data.price})
        </del>
      </p>
    </div>
  );
};

export default Head;
