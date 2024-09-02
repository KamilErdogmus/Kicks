import { Link } from "react-router-dom";
import Bottom from "./Bottom";
import Top from "./Top";

const Footer = () => {
  return (
    <div className="flex flex-col max-w-[1320px] mx-auto  max-h-[931px] mt-4">
      <Top />
      <Bottom />

      <div className="font-open text-lg text-center z-50 transform -translate-y-24 w-full underline">
        <p>
          © All rights reserved | Made with ❤️ by &nbsp;
          <Link to="/" className="text-blue font-semibold">
            Visiata Systems International
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
