import Image from "next/image";
import assets from "../../public/assets";

function login() {
  return (
    <>
      <div className="container-xl mx-auto">
        <div
          className="
        container-xl mx-auto flex flex-row"
        >
          <div className="basis-1/2 bg-yellow-400">
            <Image
              className=""
              src={assets.leftLogin}
              height={700}
              width={700}
            />
          </div>
          <div className="basis-1/2">
            <div className="w-4/5 mx-auto ">
              <div className="mt-64 flex flex-col gap-5">
                <p className="text-center text-yellow-400 text-3xl font-bold">
                  Welcome
                </p>
                <p className="text-center text-slate-400 text-xl font-medium">
                  Login into your existing account
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <form action="">
                  <p className="text-start text-slate-400 text-lg font-normal ml-14">
                    Email
                  </p>
                  <input
                    type="email"
                    id="email"
                    className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
                    placeholder="Email"
                    required
                  />
                  <p className="text-start text-slate-400 text-lg font-normal ml-14 mt-5">
                    Password
                  </p>
                  <input
                    type="password"
                    id="password"
                    className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="submit"
                    className="block shadow mx-auto bg-amber-300 rounded w-4/5 py-4 px-3 mt-20 text-white leading-tight "
                  >
                    Masuk
                  </button>
                </form>
                <a
                  href="#"
                  className="font-sans text-sm font-normal text-black h-5 text-end"
                >
                  <p className="mt-3 mr-14">Lupa kata sandi?</p>
                </a>
                <p className="font-sans mx-auto mt-8 text-sm font-normal text-blaxk w-max h-5 text-center">
                  Anda belum punya akun?
                  <a className="text-amber-400" href="/register">
                    Daftar disini!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
