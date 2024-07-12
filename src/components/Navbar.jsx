import { LuUser2 } from "react-icons/lu";
import { IoLanguage } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
             <a href="/">
             <img
                className="h-8 w-auto"
                src="../../public/logo.png"
                alt="Logo"
              /></a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <a
                  href="/properties"
                  className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  PROPERTIES
                </a> */}
                <a href="/properties" className="text-black underline hover:underline hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
  PROPERTIES
</a>

                <a
                  href="#"
                  className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  MY DASHBOARD/ACTIVITY
                </a>
                <a
                  href="/dashboard"
                  className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium "
                >
                  LIST YOUR PROPERTY
                </a>
                <a
                  href=".listing"
                  className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  CONTACT US
                </a>
                <a
                  href="/contactus"
                  className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  MORE
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-white p-1 rounded-full text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Change Language</span>
              <IoLanguage  className="h-4 w-4"/>

            </button>
            <button className="bg-white ml-3 p-1 rounded-full text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">User Menu</span>
              <LuUser2 className="h-4 w-4 font-bold"/>

            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
