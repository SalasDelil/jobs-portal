import React from "react";
import JobDescription from "./JobDescription";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import jobs from "../posts/jobs.json";

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid job ID</div>;
  }
  const jobs_list = jobs.job_postings;
  const job = jobs_list.find((job: { id: number }) => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }
  return (
    <div className="mx-auto w-9/12 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <JobDescription
            description={job.description}
            responsibilities={job.responsibilities}
            candidate={job.ideal_candidate}
            whenWhere={job.when_where}
          />
        </div>
        <div>
          <Sidebar
            about={job.about}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
