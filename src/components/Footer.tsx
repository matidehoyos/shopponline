import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-4 md:pt-20 md:pb-0 bg-gray-800 overflow-hidden">
      <div className="container p-4 lg:py-0 lg:px-12 flex flex-col lg:flex-row lg:justify-between items-start bg-transparent">
        <div className="w-auto flex md:justify-center">
          <a href="/">
            <Image src="/logoFooter.png" alt="Logo Shop online" width={200} height={100} className="w-[160px] md:w-[200px] h-auto"/>
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-gray-200 text-lg font-extrabold mb-2">Policy Info</h3>
          <ul className="font-semibold text-gray-400 hover:text-gray-300 cursor-pointer">
            <li className="mb-2">
                <a className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-2">
                <a className="hover:underline">Terms of Use</a>
            </li>
            <li className="mb-2">
                <a className="hover:underline">Report Abuse</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-gray-200 text-lg font-extrabold mb-2">Company</h3>
          <ul className="font-semibold text-gray-400 hover:text-gray-300 cursor-pointer">
            <li className="mb-2">
                <a className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
                <a className="hover:underline">Careers</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-gray-200 text-lg font-extrabold mb-2">Business</h3>
          <ul className="font-semibold text-gray-400 hover:text-gray-300 cursor-pointer">
            <li className="mb-2">
                <a className="hover:underline">Sell on Platform</a>
            </li>
            <li className="mb-2">
                <a className="hover:underline">Advertise on Platform</a>
            </li>
            <li className="mb-2">
                <a className="hover:underline">Be an Affiliate</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-gray-200 text-lg font-extrabold mb-2">Subscribe</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-2 text-white rounded border border-gray-100 bg-gray-500"
            />
            <button
              type="submit"
              className="w-full p-2 bg-red-400 text-white rounded md:hover:bg-red-500 transition-colors duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="md:py-8 text-center text-gray-300 font-semibold mt-8 md:mt-12 md:bg-gray-900">
        <p>Copyright 2024, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
