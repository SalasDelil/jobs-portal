import { CiLocationOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscFlame } from "react-icons/vsc";
import { LuCalendarCheck } from "react-icons/lu";
import { TbCalendar } from "react-icons/tb";

interface AboutProps {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

const Sidebar: React.FC<{ about: AboutProps }> = ({ about }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md text-custom-color">
      <section className="mb-6">
        <h2 className="font-black">About</h2>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <IoMdAddCircleOutline />
            </div>
            <div className="flex flex-col justify-start">
              Posted On:
              <span>
                <strong>{about.posted_on}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <VscFlame />
            </div>
            <div className="flex flex-col justify-start">
              Deadline:
              <span>
                <strong>{about.deadline}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <CiLocationOn />
            </div>
            <div className="flex flex-col justify-start">
              Location:
              <span>
                <strong>{about.location}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <TbCalendar />
            </div>
            <div className="flex flex-col justify-start">
              Start Date:
              <span>
                <strong>{about.start_date}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <LuCalendarCheck />
            </div>
            <div className="flex flex-col justify-start">
              End Date:
              <span>
                <strong>{about.end_date}</strong>
              </span>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-black">Categories</h2>
        <div className="mt-2 space-x-2">
          <span className="inline-block bg-yellow-200 px-2 py-1 rounded-full">
            {about.categories[0]}
          </span>
          <span className="inline-block bg-green-200 px-2 py-1 rounded-full">
            {about.categories[1]}
          </span>
        </div>
      </section>

      <section>
        <h2 className="font-black">Required Skills</h2>
        <div className="mt-2 space-y-2">
          {about.required_skills.map((data, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 px-2 py-1 mx-2 rounded-full"
            >
              {data}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
