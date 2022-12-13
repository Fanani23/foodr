import Image from "next/image";
import assets from "../../public/assets";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export const getServerSideProps = async (context) => {
  try {
    const { token } = context.req.cookies;
    console.log(token, "ini token");
    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    } else {
      const getRecipe = await axios.get(`http://localhost:2103/recipe/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const getUser = await axios.get(`http://localhost:2103/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = getRecipe.data.data;
      const user = getUser.data.data;
      console.log(data);
      console.log(user);
      return {
        props: {
          token: token,
          data: data,
          user: user,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const Profile = ({ token, data, user }) => {
  console.log(token);
  console.log(data);
  console.log(user);
  const router = useRouter();

  const [openTab, setOpenTab] = useState(1);

  const [search, setSearch] = useState("");
  const [sortby, setSortby] = useState("title");
  const [sort, setSort] = useState("asc");
  const [limit, setLimit] = useState("6");
  const [page, setPage] = useState("1");

  return (
    <>
      <div className="container-xl mx-auto">
        <div className="container-xl mx-auto">
          <div className="flex">
            <ul className="mt-12 ml-10 flex flex-row gap-20 text-purple-800 font-medium">
              <li>
                <Link href="/home-login">Home</Link>
              </li>
              <li>
                <Link href="/add-recipe">Add Recipe</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
        <section>
          <div className="w-4/5 mx-auto flex flex-col">
            {user.map((item) => (
              <div className="flex flex-col mx-auto gap-5 mb-20">
                <div className="flex flex-row gap-50">
                  <div className="mx-auto">
                    {item.photo === null ? (
                      <Image className="mt-20" src={assets.userZero} />
                    ) : (
                      <img
                        className="mt-20 ml-20 w-96 h-96 mx-auto rounded-full"
                        src={item.photo}
                      />
                    )}
                  </div>
                  <button
                    className="mt-10 w-16 h-8 rounded-xl bg-amber-100"
                    onClick={() => router.push(`/profile/edit/${item.id}`)}
                  >
                    <p>Edit</p>
                  </button>
                </div>
                <p className="font-semibold text-lg text-center text-black">
                  {item.username}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 ml-10 list-none flex-erap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 text center">
                <a
                  href="#link1"
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal" +
                    (openTab === 1
                      ? "text-white bg-amber-100"
                      : "text-amber-400 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  role="tablist"
                >
                  My Recipes
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 text center">
                <a
                  href="#link2"
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal" +
                    (openTab === 2
                      ? "text-white bg-amber-100"
                      : "text-amber-400 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  role="tablist"
                >
                  Saved Recipes
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 text center">
                <a
                  href="#link3"
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal" +
                    (openTab === 3
                      ? "text-white bg-amber-100"
                      : "text-amber-400 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  role="tablist"
                >
                  Liked Recipes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
          <div className="px-4 py-5 flex-auto">
            <section>
              <div className="w-full flex flex-wrap gap-5">
                {data.map((item) => (
                  <div className="w-auto mx-auto rounded-sm shadow-sm">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <p>{item.title}</p>
                      <img
                        className="w-80 h-56 rounded-md shadow-md"
                        src={item.image}
                        onClick={() =>
                          router.push(`/profile/detail-recipe/${item.id}`)
                        }
                      />
                    </div>
                  </div>
                ))}

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>saved recipes</p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>liked recipes</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="container-xl mx-auto h-80 bg-yellow-400 mt-20">
          <p className="text-center font-normal text-5xl text-purple-800 pt-20">
            Eat, Cook, Repeat
          </p>
          <p className="text-center font-normal text-md text-slate-600 pt-5">
            Share your best recipe by uploading here !
          </p>
          <div className="flex flex-row gap-5 justify-center pt-24">
            <p className="text-center font-normal text-md text-slate-600">
              Product
            </p>
            <p className="text-center font-normal text-md text-slate-600">
              Company
            </p>
            <p className="text-center font-normal text-md text-slate-600">
              Learn More
            </p>
            <p className="text-center font-normal text-md text-slate-600">
              Get in Touch
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
