import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-custom-white">
      <form className="flex w-full max-w-md flex-col gap-6 rounded-xl bg-custom-white p-10 shadow-lg">
        <div className="flex w-full flex-row items-end justify-between">
          <h1 className="text-3xl font-bold text-custom-black-primary">
            Masuk
          </h1>
          <Link
            to="/register"
            className="text-xl font-semibold text-custom-blue-primary"
          >
            Daftar
          </Link>
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
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-custom-blue-primary py-3 text-white transition-all duration-300 ease-linear hover:bg-custom-blue-secondary"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
