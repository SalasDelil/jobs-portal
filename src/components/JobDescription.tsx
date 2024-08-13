import { CiCircleCheck, CiLocationOn } from "react-icons/ci";

interface CandidateType {
  age: string;
  gender: string;
  traits: string[];
}

interface DescriptionTypes {
  description: string;
  responsibilities: string[];
  candidate: CandidateType;
  whenWhere: string;
}


const JobDescription = (description: DescriptionTypes) => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-custom-color">
      <h1 className="text-2xl font-black">Social Media Assistant</h1>

      <section className="mt-6">
        <h2 className="text-xl font-black">Description</h2>
        <p className="mt-2">{description.description}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black ">Responsibilities</h2>
        <div className="list-disc list-inside mt-2 space-y-1">
          {description.responsibilities.map((responsibility, inde) => (
            <span className="flex items-center" key={inde}>
              <CiCircleCheck className="mr-2 text-emerald-400" />
              {responsibility}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black ">Ideal Candidate we want</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {description.candidate.traits.map((skill, index) => (
            <li
              key={index}
              className="px-2 mr-2 mb-2"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black ">When & Where</h2>
        <p className="flex items-center mt-2">
          <div className="mr-2 p-2 border rounded-full text-emerald-400">
            <CiLocationOn />
          </div>
          {description.whenWhere}
        </p>
      </section>
    </div>
  );
};

export default JobDescription;
