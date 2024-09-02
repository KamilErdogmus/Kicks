import { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Hero from "./Hero";
import List from "./List";
import Buttons from "./Buttons";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      <Hero />
      <Buttons open={() => setIsOpen(true)} />

      <div className="flex justify-between min-w-[358px] min-h-[32px] max-w-[1320px] max-h-[65px] md:grid md:gap-5 md:grid-cols-2 mx-auto my-8">
        <div className="flex flex-col">
          <h1 className="text-gray-dark lg:text-[36px]">
            Life Style Shoes
          </h1>
          <p className="font-open text-gray-dark font-semibold lg:text-[16px]">
            122 items
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-[1320px] mx-auto">
        <Filter isOpen={isOpen} close={() => setIsOpen(false)} />
        <List />
      </div>
    </div>
  );
};

export default Home;
