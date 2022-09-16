import Image from "next/image";

import FooterTriangles from "../public/FooterTriangles.svg";
import ReactPlayLogo from "../public/ReactPlayLogo.svg";
import FooterReactLogo from "../public/FooterReactLogo.svg";

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center pt-16 pb-11 px-8 bg-white bg-opacity-10 overflow-clip">
      <div className="absolute -left-5">
        <Image
          src={FooterTriangles}
          alt="Footer Triangles"
          width={155}
          height={155}
        />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto ">
        <span className="text-gray-500 font-medium font-body">Hosted By</span>
        <Image src={ReactPlayLogo} alt="ReactPlay Logo" layout="fixed" />
        <p className="mt-4 font-medium font-body text-gray-500">
          An open-source project made with ❤️ by Tapas Adhikary and friends.
        </p>
      </div>
      <div className="absolute opacity-40 -right-24 -bottom-28">
        <Image
          src={FooterReactLogo}
          alt="Footer React Logo"
          width={300}
          height={300}
        />
      </div>
    </footer>
  );
};

export default Footer;