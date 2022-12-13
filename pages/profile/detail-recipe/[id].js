import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
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
      const id = context.params.id;
      console.log(id);
      const getRecipeById = await axios.get(
        `http://localhost:2103/recipe/byid/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = getRecipeById.data.data[0];
      console.log(data);
      return {
        props: {
          token: token,
          data: data,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
}

const DetailRecipe = ({ token, data }) => {
  console.log(token);
  console.log(data);

  const router = useRouter();

  return (
    <div className="container-xl mx-auto">
      <div className="flex flex-col gap-10 mx-auto">
        <div className="mx-auto mt-20">
          <p className="font-semibold text-4xl text-indigo-800">{data.title}</p>
        </div>
        <div className="mx-auto">
          <img
            src={data.image}
            className="mx-auto w-7/12 h-3/12 rounded-md shadow-md"
            alt=""
          />
        </div>
        <div className="w-3/5 mx-auto">
          <div className="mx-auto">
            <p className="font-semibold text-2xl text-slate-800 mb-5">
              Ingredients
            </p>
            <p className="font-normal text-xl text-slate-800 mb-10">
              {data.ingredients}
            </p>
          </div>
          <div className="mx-auto">
            <p className="font-semibold text-2xl text-slate-800 mb-5">Video</p>
            {data ? (
              <video width="100%" controls>
                <source src={data.video} type="video/mp4" />
              </video>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <button
            className="mt-10 w-20 h-10 rounded-xl bg-amber-200 mb-20"
            onClick={() =>
              router.push(`/profile/detail-recipe/edit/${data.id}`)
            }
          >
            <p className="py-1 px-1">Edit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
