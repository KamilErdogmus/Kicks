const Hero = () => {
  return (
    <div className="mt-6 mb-6 lg:mb-8 lg:mt-[80px] relative max-w-[1320px] max-h-[395px] mx-auto min-h-[149px] min-w-[358px] ">
      <div className="absolute top-1/2 transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10">
        <p className="text-gray font-open font-semibold text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]  ">
          Limited Time Only
        </p>
        <h1 className="font-semibold text-white text-[20px] md:text-[38px] lg:text-[56px] xl:text-[74px] ">
          Get 30% off
        </h1>
        <p className="text-gray font-open text-[10px] font-regular md:text-[13.3px] lg:text-[16.7px] xl:text-[20px]  max-w-[50%] ">
          Sneakers made with your comfort in mind so you can put
          all of your focus into your next session.
        </p>
      </div>

      <img src="/bg.png" alt="" />
    </div>
  );
};

export default Hero;
