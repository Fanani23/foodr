import Image from "next/image";
import assets from "../../public/assets";
import Link from "next/link";

function addRecipe() {
  return (
    <>
      <div className="container-xl mx-auto">
        <div className="container-xl mx-auto">
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
        </div>
        <div className="w-4/5 mx-auto flex flex-col">
          <form className="w-full mx-auto mt-20 mb-20 flex flex-col gap-10">
            <input
              type="file"
              name="image"
              id="image"
              className="block mx-auto"
            />
            <input
              type="text"
              name="title"
              id="title"
              className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Title"
              required
            />
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              className="block mx-auto w-4/5 h-32 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Ingredients"
              required
            />
            <input
              type="text"
              name="video"
              id="video"
              className="block mx-auto w-4/5 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-100 focus:ring-violet-500 focus:border-violet-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-violet-500 light:focus:border-violet-500"
              placeholder="Video"
              required
            />
            <button
              type="submit"
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
}

export default addRecipe;
