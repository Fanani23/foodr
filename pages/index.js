import assets from "../public/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const [sortby, setSortby] = useState("title");
  const [sort, setSort] = useState("asc");
  const [limit, setLimit] = useState("6");
  const [page, setPage] = useState("1");

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      setData(res.data.result);
      console.log(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let url = `http://localhost:2103/recipe`;
    if (sortby !== "title") {
      url = `${url}?sortby=${sortby}`;
    } else {
      url = `${url}?sortby=title`;
    }
    if (limit !== "6") {
      url = `${url}&limit=${limit}`;
    } else {
      url = `${url}&limit=6`;
    }
    if (search !== "") {
      url = `${url}&search=${search}`;
    }
    if (page !== "1") {
      url = `${url}&page=${page}`;
    }
    url = `${url}&sort=asc`;
    getData(url);
  }, [search, sort, sortby, limit, page]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-xl mx-auto bg-red-50">
        <div className="container-xl mx-auto flex flex-row">
          <div className="basis-3/4 bg-red-50 h-5/6">
            <div className="flex">
              <ul className="mt-12 ml-10 flex flex-row gap-20 text-purple-800 font-medium">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/add-recipe">Add Recipe</Link>
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
              </ul>
            </div>
            <div className="w-4/6 h-96 flex flex-col gap-10 ml-16 mt-36">
              <div className="">
                <p className="font-bold text-7xl text-purple-800">
                  Discover Recipe & Delicious Food
                </p>
              </div>
              <div className="">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
                  placeholder="Search..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="basis-1/4 bg-amber-300 h-screen">
            <div className="flex flex-row justify-end gap-5 mr-20">
              <Image className="mt-10" src={assets.uIcon} />
              <p className="mt-12 font-medium text-purple-800">
                <Link href="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="container-xl mx-auto">
          <div className="flex flex-row gap-10 ml-16">
            <Image src={assets.reYellow} />
            <p className="font-semibold text-purple-800 text-2xl mt-14">
              Popular For You!
            </p>
          </div>
          <div className="w-3/5 mx-auto justify-center flex flex-row gap-10 mt-10 mb-10">
            <Image src={assets.lPopular} width={300} height={500} />
            <Image src={assets.rPopular} width={300} height={500} />
          </div>
        </div>
        <div className="container-xl mx-auto">
          <div className="flex flex-row gap-10 ml-16">
            <Image src={assets.reYellow} />
            <p className="font-semibold text-purple-800 text-2xl mt-14">
              New Recipes
            </p>
          </div>
          <div className="w-3/5 mx-auto justify-center flex flex-row gap-10 mt-10 mb-10">
            <Image src={assets.lPopular} width={300} height={500} />
            <Image src={assets.rPopular} width={300} height={500} />
          </div>
        </div>
        <div className="container-xl mx-auto">
          <section>
            <div className="w-4/5 mt-10 mb-10 flex flex-wrap gap-10">
              {data ? (
                data.map((item) => (
                  <div className="w-1/4 mx-auto rounded-xl shadow-md">
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </section>
        </div>
        <div className="container-xl mx-auto h-80 bg-yellow-400">
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

export default Home;
