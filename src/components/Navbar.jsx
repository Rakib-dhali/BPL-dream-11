import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({coin}) => {
  return (
    <div className="max-w-330 mx-auto navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <img src="./assets/logo.png" alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li className="hidden md:flex">
            <a>Home</a>
          </li>
          <li className="hidden md:flex">
            <a>Fixture </a>
          </li>
          <li className="hidden md:flex">
            <a>Teams</a>
          </li>
          <li className="hidden md:flex">
            <a>Schedule</a>
          </li>
          <li className="md:hidden">
            <details>
              <summary className="">
                <RxHamburgerMenu />
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2 gap-12">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture </a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="flex flex-row font-semibold  items-center justify-center"><a >
          {coin} <img src="/assets/dollar.png" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
