import { Link } from "react-router-dom";
import fitnestLogo from "../ui/images/fitnestLogo.png";
export default function Navbar() {
  return (
    <nav className="w-full bg-cyan-500 flex flex-wrap items-center justify-between">
      <Link to="/" className="">
        <img src={fitnestLogo}></img>
      </Link>

      <div className="flex items-center">
        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                className="
          dropdown-toggle
          px-2
          py-2.5
          bg-[#D8D1D1]
          text-[#122C34]
          font-medium
          text-xs
          rounded-l-lg
          hover:bg-[#ACA7A7] 
          flex
          items-center
          whitespace-nowrap
        "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Semua
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="input-group flex flex-wrap">
            <input
              type="search"
              className="form-control  flex-auto block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            ></input>
            <button
              className="btn px-6 py-2 bg-[#FFFF00] text-white font-medium text-xs leading-tight rounded-r-lg hover:bg-[#e6e600] flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Masuk
        </button>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#FFFF00] text-gray-700 font-medium text-xs leading-tight rounded shadow-md hover:bg-[#e6e600] hover:shadow-lg focus:bg-[#e6e600] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e6e600] active:shadow-lg transition duration-150 ease-in-out"
        >
          Daftar
        </button>
      </div>
    </nav>
  );
}
