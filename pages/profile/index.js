import Image from "next/image";
import assets from "../../public/assets";
import Link from "next/link";

function Profile() {
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
          <div className="flex flex-col mx-auto gap-5 mb-20">
            <Image className="mt-20" src={assets.userZero} />
            <p className="font-semibold text-lg text-center text-black">Nama</p>
          </div>
          <div className="">
            <div className="mb-4 border-b border-gray-400 dark:border-gray-700">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 rounded-t-lg border-b-2"
                    id="myrecipes-tab"
                    data-tabs-target="#myrecipes-pane"
                    type="button"
                    role="tab"
                    aria-controls="myrecipes-pane"
                    aria-selected="true"
                  >
                    My Recipes
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="saved-recipes"
                    data-tabs-target="#saved-recipes-pane"
                    type="button"
                    role="tab"
                    aria-controls="saved-recipes-pane"
                    aria-selected="false"
                  >
                    Saved Recipes
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="liked-recipes"
                    data-tabs-target="#liked-recipes-pane"
                    type="button"
                    role="tab"
                    aria-controls="liked-recipes-pane"
                    aria-selected="false"
                  >
                    Liked Recipes
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div
                className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                id="myrecipes-pane"
                role="tabpanel"
                aria-labelledby="myrecipes-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Profile tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
              <div
                className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Dashboard tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
              <div
                className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong class="font-medium text-gray-800 dark:text-white">
                    Settings tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
              <div
                className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                id="contacts"
                role="tabpanel"
                aria-labelledby="contacts-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Contacts tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
            </div>
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
}

export default Profile;
