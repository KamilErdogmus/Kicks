import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="bg-gray-dark transform -translate-y-36 lg:h-[591px] sm:h-[720px] grid md:grid-cols-5 max-md:grid-col-1 z-10 rounded-[48px] max-sm:p-0  p-8 gap-[122px] max-md:gap-4 mt-10 text-white">
      <div className="col-span-5 max-md:col-span-3 flex flex-col lg:mx-[40px] max-sm:mx-4 max-sm:mt-6 max-sm:mb-10 max-sm:w-[326px]">
        <h1 className="text-yellow mb-4 text-[36px] md:text-[24px] md:font-semibold">
          About Us
        </h1>
        <p className="text-gray font-semibold text-[20px] font-open md:text-[16px] md:font-semibold md:text-wrap ">
          We are the biggest hyperstore in the universe. We got
          you all covered with our exclusive collections and
          latest drops.
        </p>
      </div>

      <div className="col-span-5 max-md:col-span-3 lg:col-span-6 grid md:grid-cols-3 gap-[128px] max-md:gap-6 max-md:px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow mb-4 text-[24px] md:text-[20px] md:font-semibold">
            Categories
          </h1>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Runners
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Sneakers
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Basketball
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Outdoor
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Golf
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Hiking
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-yellow mb-4 text-[24px] md:text-[20px] md:font-semibold">
            Company
          </h1>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            About
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="hover:text-yellow text-[20px] font-semibold font-open md:[text-16px]"
          >
            Blogs
          </Link>
        </div>

        <div className="flex flex-col mr-2">
          <h1 className="text-yellow mb-4 text-[24px] md:text-[20px] md:font-semibold">
            Follow Us
          </h1>
          <div className="flex gap-4">
            <Link
              to="/"
              className="rounded-full hover:bg-yellow"
            >
              <img src="/facebook.svg" alt="Facebook" />
            </Link>
            <Link
              to="/"
              className="rounded-full hover:bg-yellow"
            >
              <img src="/instagram.svg" alt="Instagram" />
            </Link>
            <Link
              to="/"
              className="rounded-full hover:bg-yellow"
            >
              <img src="/twitter.svg" alt="Twitter" />
            </Link>
            <Link
              to="/"
              className="rounded-full hover:bg-yellow"
            >
              <img src="/tiktok.svg" alt="TikTok" />
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-5 lg:col-span-12 md:col-span-3 -translate-y-24 max-lg:-translate-y-28 max-md:translate-y-4 mx-auto flex  transform items-center justify-center w-[1262px] h-[314px] max-md:w-[358px] max-md:h-[89px] max-lg:w-[760px] max-lg:h-[202px]">
        <img
          src="/bottom-logo.svg"
          alt="Bottom Logo"
          className="max-h-full max-w-full"
        />
      </div>
    </div>
  );
};

export default Bottom;
