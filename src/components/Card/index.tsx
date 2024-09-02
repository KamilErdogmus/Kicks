import { Link } from "react-router-dom";
import { shoes } from "../../types";
import Badge from "./Badge";
import { calculatedValue } from "../../Utils/Calculate";

const Card = ({ shoe }: { shoe: shoes }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col justify-between">
        <div>
          <div className="bg-white relative rounded-2xl lg:rounded-[28px] p-2">
            <Badge discount={shoe.discount} />
            <img
              src={shoe.picture[0]}
              alt={shoe.name}
              className="w-full max-h-[318px] object-cover rounded-[24px]"
            />
          </div>
          <h2 className="font-bold line-clamp-1 hover:line-clamp-2 mt-5 mb-4 lg:text-[20px]">
            {shoe.name}
          </h2>
        </div>
        <Link
          to={`/detail/${shoe.id}`}
          className="bg-gray-dark flex items-center justify-center py-[15.5px] px-[57px] md:py-[13px] md:px-[19.5px] rounded-lg text-[12px] whitespace-nowrap"
        >
          <p className="text-white hover:text-blue">
            VIEW PRODUCT -
          </p>
          <p>
            <span className="text-white max-md:text-yellow">
              &nbsp;${calculatedValue(shoe.price, shoe.discount)}
              &nbsp;
            </span>
            {shoe.discount && (
              <del
                className={`${
                  shoe.discount ? "text-yellow" : "text-white"
                } max-md:hidden`}
              >
                ${shoe.price}
              </del>
            )}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
