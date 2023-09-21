import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import wordpress from "../../../public/icons/wordpress.svg"
import nextjs from "../../../public/icons/nextjs.svg"
import tailwind from "../../../public/icons/tailwind.svg"
import nodejs from "../../../public/icons/nodejs.svg"
import vercel from "../../../public/icons/vercel.svg"
import figma from "../../../public/icons/figma.svg"
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
const Services = () => {

    const features = [
      {
        icon: wordpress,
        title: "Range of Service",
        desc: "flexible business processes that respond to customer demands and the range of requests.Examples include: Service based on customer segmentation  Providing the perception of dedicated support 24 hours a day, 7 days a week, customer service availability.",
      },
      {
        icon: nextjs,
        title: "Ease of Service",
        desc: "Allow customers to choose the media option for doing business and creating cross channel customer service. Examples include:Providing integrated, alternate access points (channels) for customer service (phone, fax, email, postal mail and Internet) Allowing anytime customer service Consistent information and service across. .",
      },
      {
        icon: tailwind,
        title: "Quality & Accuracy of Service",
        desc: "Personalized service based on the customer profile and  customer segmentation rules. Examples include:Knowledgeable personnel performing value-added activities in support of the customer Accurate transaction processing and validation via knowledge-based infrastructure (whether performed by company personnel or directly by the customer)",
      },
      {
        icon: nodejs,
        title: "Speed of Service",
        desc: "Ensuring that when a customer contacts the organization, the inquiry or problem is handled timely, efficient and during the first contact. Examples include:  Responsiveness to all contact methods utilizing an efficient workflow with minimal hand-offs  Providing an intuitive customer self-help interface with immediate access to information and people.",
      },
      
      
    ];

    return (
      <SectionWrapper>
        <div
          id="services"
          className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
        >
          <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Services
            </h2>
            <p>
              {" "}
              WIS offers the expertise any client or company needs to develop
              new product distribution and new market segments in new markets.
              This can be taken as high-level retainer consulting, market
              research reports, real estate assistance, home support services,
              event planning, software applications developments and/or
              project-based consulting etc.{" "}
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-lg">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    );
}

export default Services;