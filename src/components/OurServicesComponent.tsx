


import { OurServicesImage } from "../assets/LinkIMage/ImagesWithLinks";
import { features } from "../Constant/OurServiceInofrmation.Constant";


const OurServicesComponent = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Services
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              WIS offers the expertise any client or company needs to develop
              new product distribution and new market segments in new markets.
              This can be taken as high-level retainer consulting, market
              research reports, real estate assistance, home support services,
              event planning, software applications developments and/or
              project-based consulting etc.
            </p>
          </div>

          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src={OurServicesImage}
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-primary pt-[20%]" />
              </div>
            </div>
          </div>

          {/*  SERVICE CARD */}
          <div className="mx-auto mt-16 max-4-2xl sm:mt-20 lg:mt-24 sm:p-10  lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16  lg:justify-center lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col  shadow-lg  bg-white lg:hover:shadow-2xl rounded-lg  p-5 lg:p-10">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-500">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                    
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}











export default OurServicesComponent