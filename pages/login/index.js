import Image from "next/image";
import assets from "../../public/assets";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/login";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

const login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let login = {
    email,
    password,
  };

  const [loading, setLoading] = useState(false);

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        withCredentials: true,
      };
      const result = await axios.post(
        `http://localhost:2103/users/login`,
        login,
        config
      );
      console.log(login);
      console.log(result);
      const errmail = "User not found";
      const errpass = "Password incorrect";
      if (result.data.message === errmail) {
        console.log("User not found");
        Swal.fire(
          "Warning",
          "Email Not Found, Please check if your email are registered",
          "error"
        );
      } else if (result.data.message === errpass) {
        console.log("Password incorrect");
        Swal.fire("Warning", "Wrong Password", "error");
      } else {
        const token = result.data.data.token;
        const data = {
          token: token,
        };
        console.log(data);
        const cookie = await fetch(`/api/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const isToken = await cookie.json();
        console.log(isToken);
        if (!isToken) {
          console.log("Login failed");
          return Swal.fire("Warning", "Login failed", "error");
        }
        console.log("Login success");
        Swal.fire("Success", "Login success", "success");
        router.push("/home-login");
      }
    } catch (error) {
      if (error.response.data.message === "User not found") {
        Swal.fire("Warning", "User not found", "error");
      } else if (
        error.response.data.message == "Access denied, user not verified"
      ) {
        Swal.fire("Warning", "Account not verified", "error");
      }
    }
  };

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
                <form onSubmit={handlerLogin} id="form-login">
                  <p className="text-start text-slate-400 text-lg font-normal ml-14">
                    Email
                  </p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-start text-slate-400 text-lg font-normal ml-14 mt-5">
                    Password
                  </p>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    title={loading ? "Logging in..." : "Login"}
                    onClick={handlerLogin}
                    type="submit"
                    form="form-login"
                    className="block shadow mx-auto bg-amber-300 rounded w-4/5 py-4 px-3 mt-20 text-white leading-tight"
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
};

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log(token, "token ssp");
  if (token) {
    return {
      redirect: {
        destination: "/home-login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        isLogin: false,
      },
    };
  }
};

export default login;
