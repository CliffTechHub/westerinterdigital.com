import { AboutUsImage } from "../assets/LinkIMage/ImagesWithLinks";

const AboutUsComponent = () => {
  return (
    <>
      <section className="bg-white lg:mx-10 py-20 ">
        <div className="container flex flex-col px-6 py-10  mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              {/* Heading text */}
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
                About Us
              </h1>
              <p className="leading-6 mt-4 text-gray-600">
                WIS offers high-tech manufacturers, real estate developers,
                IT-companies and the general public a reliable, high quality
                alternative to in-house resources for business development,
                market research and channel development on an international
                scale. We will be able to give best services to the public at a
                lower cost and providing thousands of jobs for various
                professionals in a short possible time.
              </p>

              <div className="mt-8 space-y-5">
                {/* web application developments */}
                <p className="flex items-center -mx-2 text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2"> Web application developments </span>
                </p>

                {/* SEO consultancy */}
                <p className="flex items-center -mx-2 text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">SEO consultancy</span>
                </p>

                {/* Image consultancy */}
                <p className="flex items-center -mx-2 text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2"> Image consultancy </span>
                </p>

                {/* , Software development */}
                <p className="flex items-center -mx-2 text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2"> Software development </span>
                </p>

                {/* Computer Hardware */}
                <p className="flex items-center -mx-2 text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2"> Computer Hardware </span>
                </p>
                {/* IT Infrastructure
                 */}
                <p className="flex items-center -mx-2 text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2"> IT Infrastructure</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={AboutUsImage}
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsComponent