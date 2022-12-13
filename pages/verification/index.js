import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { verificationAccount } from "../../redux/actions/verification";
import assets from "../../public/assets";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";

const Verification = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();

  const handlerVerification = (e) => {
    e.preventDefault();
    let data = {
      email,
      otp,
    };
    dispatch(verificationAccount(data));
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
                  Verification your account
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <form onSubmit={handlerVerification} id="form-verif">
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
                    OTP
                  </p>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
                    placeholder="Otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                  <button
                    onClick={handlerVerification}
                    type="submit"
                    form="form-verif"
                    className="block shadow mx-auto bg-amber-300 rounded w-4/5 py-4 px-3 mt-20 text-white leading-tight"
                  >
                    Verification
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
