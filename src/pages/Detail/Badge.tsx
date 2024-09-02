const Badge = ({ discount }: { discount?: number }) => {
  return (
    <span
      className={`text-white  text-[12px] px-4 py-3 absolute font-semibold rounded-xl ${
        !discount ? "bg-blue" : " bg-yellow"
      }`}
    >
      {discount ? `%${discount} off` : "New Release"}
    </span>
  );
};

export default Badge;
