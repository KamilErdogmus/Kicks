const Badge = ({ discount }: { discount?: number }) => {
  return (
    <span
      className={`text-white  text-[12px] px-4 py-3 absolute font-semibold rounded-ee-[24px] rounded-ss-[24px] ${
        discount ? "bg-blue" : " bg-yellow"
      }`}
    >
      {discount ? `%${discount} off` : "New"}
    </span>
  );
};

export default Badge;
