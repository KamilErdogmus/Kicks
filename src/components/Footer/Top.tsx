import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="bg-blue text-white grid grid-cols-1 md:grid-cols-2 place-items-center rounded-[48px] md:z-10 max-h-[545px] pb-40 pt-16 px-8 md:px-12">
      <div className="lg:col-span-1 mb-8 md:mb-0">
        <p className="text-[36px]  font-semibold md:uppercase">
          Join our KicksPlus <br /> Club & get 15% off
        </p>
        <p className="text-gray font-semibold font-open mt-4 mb-8">
          Sign up for free! Join the community.
        </p>
        <div className="flex gap-2 w-full max-w-[450px]">
          <input
            type="text"
            className="text-gray rounded-lg py-3 px-4 bg-transparent outline-none border-gray border text-[16px] font-normal flex-grow"
            placeholder="Email address"
          />
          <button className="text-white bg-gray-dark rounded-lg text-[14px] py-3 px-6 whitespace-nowrap hover:text-yellow">
            SUBMIT
          </button>
        </div>
      </div>
      <Link to="/" className="lg:col-span-1 flex justify-center">
        <img
          src="/Footer-logo.svg"
          alt="Footer Logo"
          className="max-h-full max-w-full"
        />
      </Link>
    </div>
  );
};

export default Top;
