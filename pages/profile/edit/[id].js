import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  try {
    const { token } = context.req.cookies;
    console.log(token, "token cookies");
    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    } else {
      return {
        props: {
          token: token,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const EditUser = ({ token }) => {
  const router = useRouter();

  const { id } = router.query;

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState([]);

  const handlerEdit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("username", username);
      data.append("phone", phone);
      data.append("photo", photo);
      console.log(token);
      await axios.put(`http://localhost:2103/users/${id}`, data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Success update user data");
      Swal.fire("Success", "Success update user data", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Failed", "Update user data failed", "error");
    }
  };

  return (
    <>
      <div className="container-xl mx-auto">
        <div className="container-xl mx-auto">
          <div className="flex">
            <ul className="mt-12 ml-10 flex flex-row gap-20 text-purple-800 font-medium">
              <li>
                <Link href="/profile">Back</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-4/5 mx-auto flex flex-col">
          <form className="w-full mx-auto mt-20 mb-20 flex flex-col gap-10">
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="block w-2/4 mx-auto"
            />
            <input
              type="text"
              name="title"
              id="title"
              className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Title"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              name="phone"
              id="phone"
              className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Title"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={handlerEdit}
              className="block shadow mx-auto bg-amber-300 rounded w-4/5 py-4 px-3 mt-10 text-white leading-tight "
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
