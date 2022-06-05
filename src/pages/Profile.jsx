import React from "react";

const Profile = () => {
  return (
    <>
      <div className="pt-64">
        <main class="profile-page">
          <section class="relative block h-500-px">
            <div class="absolute top-0 w-full h-full bg-center bg-cover">
              <span
                id="blackOverlay"
                class="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
              <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  class="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section class="relative py-16 bg-blueGray-200">
            <div class="container mx-auto px-4">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div class="px-6">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div class="relative">
                        <img
                          alt="..."
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-12">
                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                      John Doe
                    </h3>
                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      Mumbai, India
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      Solution Manager
                    </div>
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      University of Computer Science
                    </div>
                  </div>
                  <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-full lg:w-9/12 px-4">
                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
