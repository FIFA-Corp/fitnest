import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { fetcher, showCartState, uidState, useSWR } from "../../libs";
import { logout } from "../../services";
import { CategoryType } from "../../types";
import fitnestLogo from "../ui/images/fitnestLogo.png";
import { useSWRConfig } from "swr";

export default function Navbar() {
  const [uid, setUid] = useRecoilState(uidState);

  const { mutate } = useSWRConfig();
  const setShowCart = useSetRecoilState(showCartState);
  const navigate = useNavigate();

  // search form
  const { data: categories, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/categories?$lookup=*`,
    fetcher
  );

  // navbar
  const { data: carts, error: cartError } = useSWR(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/carts?$lookup=*&userId=${uid}&isCheckout=0`,
    fetcher
  );

  const isAuthenticated = Boolean(uid);

  const handleLogout = async () => {
    await logout();
    mutate([
      `${import.meta.env.VITE_BACKEND_API_URL}/auth/user`,
      { headers: null },
    ]);
    setUid("");
    navigate("/login");
  };

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const category = formData.get("category")?.toString();
      const search = formData.get("search")?.toString();

      const searchParams = new URLSearchParams();
      searchParams.append("category", String(category));
      searchParams.append("search", String(search));

      navigate(`/products?${searchParams.toString()}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between bg-custom-blue-primary py-2 px-4">
      <Link to="/" className="">
        <img src={fitnestLogo}></img>
      </Link>

      <form
        className="flex items-center"
        action="/products"
        onSubmit={handleSubmitSearch}
      >
        <div className="input-group flex flex-wrap">
          <select
            name="category"
            className="m-0 flex items-center whitespace-nowrap rounded-l-lg bg-[#D8D1D1] px-2 py-[9px] text-xs font-medium text-custom-black-secondary outline-none"
          >
            <option
              value=""
              className="mx-2 py-[9px] text-xs font-medium text-custom-black-secondary"
            >
              Semua
            </option>
            {categories?.length > 0 &&
              categories.map(({ _id, name }: CategoryType) => {
                return (
                  <option
                    key={_id}
                    value={_id}
                    className="px-2 py-[9px] text-xs font-medium text-custom-black-secondary"
                  >
                    {name}
                  </option>
                );
              })}
          </select>
          <input
            type="search"
            className="form-control block flex-auto  bg-white px-3 py-1.5 text-base font-normal text-gray-700  outline-none"
            placeholder="Cari produk"
            aria-label="Search"
            aria-describedby="button-addon2"
            name="search"
          ></input>
          <button
            className="btn flex items-center rounded-r-lg bg-custom-yellow px-6 py-2 text-xl font-medium leading-tight text-black  outline-none"
            type="submit"
            id="button-addon2"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-3">
        <div
          className="cursor-pointer text-white"
          onClick={() => {
            setShowCart(true);
            document.body.classList.add("overflow-y-hidden");
          }}
        >
          <FaShoppingCart className="h-auto w-8 " />

          {carts?.length > 0 && (
            <div className="absolute bottom-2 ml-4 flex h-5 w-5 items-center justify-center rounded-full bg-custom-yellow">
              <p className="mr-[1px] text-[9px] text-custom-black-primary">
                {carts!.length > 99 ? "99" : carts!.length}
              </p>
            </div>
          )}
        </div>

        <AuthButtons
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
        />
      </div>
    </nav>
  );
}

interface AuthButtonsProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

export const AuthButtons = ({
  isAuthenticated,
  handleLogout,
}: AuthButtonsProps) => {
  return (
    <>
      {!isAuthenticated && (
        <>
          <Link
            to="/login"
            type="button"
            className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            type="button"
            className="inline-block rounded bg-custom-yellow px-6 py-2.5 text-xs font-medium leading-tight text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-[#e6e600] hover:shadow-lg focus:bg-[#e6e600] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e6e600] active:shadow-lg"
          >
            Daftar
          </Link>
        </>
      )}

      {isAuthenticated && (
        <button
          type="button"
          className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </>
  );
};
