import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSWRConfig } from "swr";
import { getHeaders } from "../libs/headers";

import { login } from "../services/auth/login";
import { LoginType } from "../types";

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();

  const productId = searchParams.get("productId");

  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

  const onSubmitHandle = async (event: any) => {
    try {
      event.preventDefault();
      await login(loginData);

      mutate([
        `${import.meta.env.VITE_BACKEND_API_URL}/auth/user`,
        {
          headers: getHeaders(),
        },
      ]);

      if (productId) {
        navigate(`/products/${productId}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Cek kembali email dan password anda");
    }
  };

  const inputChangeHandle = (event: any) => {
    setLoginData((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <>
      <Link
        to="/"
        className="flex items-center justify-end gap-2 pt-5 pr-5 text-xl font-semibold text-custom-blue-primary"
      >
        <FaHome />
        Ke Beranda
      </Link>
      <div className="flex min-h-screen items-center justify-center bg-custom-white  p-4">
        <form
          onSubmit={onSubmitHandle}
          className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-custom-white p-10 shadow-lg"
        >
          <div className="mb-2 flex w-full flex-row items-end justify-between">
            <h1 className="text-3xl font-bold text-custom-black-primary">
              Masuk
            </h1>
            {productId ? (
              <Link
                to={`/register?productId=${productId}`}
                className="text-xl font-semibold text-custom-blue-primary"
              >
                Daftar
              </Link>
            ) : (
              <Link
                to="/register"
                className="text-xl font-semibold text-custom-blue-primary"
              >
                Daftar
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-lg border-[1px] border-custom-black-secondary p-3 text-sm text-custom-black-secondary outline-none placeholder:font-light placeholder:text-custom-grey"
              placeholder="cth: user@fitnest.com"
              value={loginData.email}
              onChange={inputChangeHandle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-lg border-[1px] border-custom-black-secondary p-3 text-sm text-custom-black-secondary outline-none placeholder:font-light placeholder:text-custom-grey"
              placeholder="********"
              value={loginData.password}
              onChange={inputChangeHandle}
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-lg bg-custom-blue-primary py-3 text-white transition-all duration-300 ease-linear hover:bg-custom-blue-secondary"
          >
            Masuk
          </button>
        </form>
      </div>
    </>
  );
}
