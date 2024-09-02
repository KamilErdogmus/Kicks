const Buttons = ({ open }: { open: () => void }) => {
  return (
    <div className="mt-5 flex lg:hidden gap-5 border border-gray-dark">
      <button
        onClick={open}
        className="flex-1 flex justify-between items-center px-4 py-2 bg-[#f4f2f2] font-open font-semibold rounded-lg text-[14px] z-10"
      >
        <p>Filters</p>
        <img src="/lines.svg" alt="" />
      </button>
      <button className="flex-1 flex justify-between items-center px-4 py-2 bg-[#f4f2f2] font-open font-semibold rounded-lg text-[14px] z-10">
        Trending
        <img src="/down.svg" alt="" />
      </button>
    </div>
  );
};

export default Buttons;
