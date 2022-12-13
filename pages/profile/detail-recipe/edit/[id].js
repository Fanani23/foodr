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

const EditRecipe = ({ token }) => {
  const router = useRouter();

  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);

  const handlerEdit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("image", image);
      data.append("video", video);
      data.append("ingredients", ingredients);
      console.log(token);
      await axios.put(`http://localhost:2103/recipe/${id}`, data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Success create new recipe");
      Swal.fire("Success", "Success edit recipe", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Failed", "Edit recipe failed", "error");
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
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-2/4 mx-auto"
            />
            <input
              type="text"
              name="title"
              id="title"
              className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              type="text"
              name="ingredients"
              id="ingredients"
              rows="4"
              className="block mx-auto w-4/5 h-32 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
            <input
              type="file"
              name="video"
              id="video"
              className="block mx-auto w-2/4"
              onChange={(e) => setVideo(e.target.files[0])}
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

export default EditRecipe;
