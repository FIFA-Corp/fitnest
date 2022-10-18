import { FaChevronDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import fitnestLogo from "../ui/images/fitnestLogo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between bg-custom-blue-primary py-2 px-4">
      <Link to="/" className="">
        <img src={fitnestLogo}></img>
      </Link>

      <div className="flex items-center">
        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                disabled
                className="dropdown-toggle flex items-center gap-1 whitespace-nowrap rounded-l-lg bg-[#D8D1D1] px-2 py-2.5 text-xs font-medium text-custom-black-secondary hover:cursor-not-allowed"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Semua <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="input-group flex flex-wrap">
            <input
              disabled
              type="search"
              className="form-control block flex-auto  bg-white px-3 py-1.5 text-base font-normal text-gray-700 hover:cursor-not-allowed"
              placeholder="Cari produk"
              aria-label="Search"
              aria-describedby="button-addon2"
            ></input>
            <button
              disabled
              className="btn flex items-center rounded-r-lg bg-custom-yellow px-6 py-2 text-xl font-medium leading-tight text-black hover:cursor-not-allowed"
              type="button"
              id="button-addon2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="text-white">
          <FaShoppingCart className="h-auto w-8 hover:cursor-pointer" />
        </div>
        <button
          type="button"
          className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          Masuk
        </button>
        <button
          type="button"
          className="inline-block rounded bg-custom-yellow px-6 py-2.5 text-xs font-medium leading-tight text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-[#e6e600] hover:shadow-lg focus:bg-[#e6e600] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e6e600] active:shadow-lg"
        >
          Daftar
        </button>
      </div>
    </nav>
  );
}
