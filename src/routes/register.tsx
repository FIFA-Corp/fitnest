import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-custom-white p-4">
      <form className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-custom-white p-10 shadow-lg">
        <div className="flex w-full flex-row items-end justify-between">
          <h1 className="text-3xl font-bold text-custom-black-primary">
            Daftar
          </h1>
          <Link
            to="/login"
            className="text-xl font-semibold text-custom-blue-primary"
          >
            Masuk
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="first-name" className="text-sm">
            Nama Depan
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="rounded-lg border-[1px] border-custom-black-secondary p-3 text-sm text-custom-black-secondary outline-none placeholder:font-light placeholder:text-custom-grey"
            placeholder="cth: Mesut"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last-name" className="text-sm">
            Nama Belakang
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className="rounded-lg border-[1px] border-custom-black-secondary p-3 text-sm text-custom-black-secondary outline-none placeholder:font-light placeholder:text-custom-grey"
            placeholder="cth: Ozil"
          />
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
            placeholder="minimal 8 karakter"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm-password" className="text-sm">
            Konfirmasi Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="rounded-lg border-[1px] border-custom-black-secondary p-3 text-sm text-custom-black-secondary outline-none placeholder:font-light placeholder:text-custom-grey"
            placeholder="harus sama dengan password"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-custom-blue-primary py-3 text-white transition-all duration-300 ease-linear hover:bg-custom-blue-secondary"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
