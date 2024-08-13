import posts from "./jobs.json";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

interface PropsType {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Posts = (props: PropsType) => {
  const job_posts = posts.job_postings;
  const count = job_posts.length;
  props.setCount(count)

  return (
    <div>
      {job_posts ? (
        <ul>
          {job_posts.map((post) => (
            <Link to={`/job/${post.id}`} key={post.id}>
              <JobCard
                title={post.title}
                description={post.description}
                categories={post.about.categories}
                company={post.company}
                location={post.about.location}
                avatar={post.image}
              />
            </Link>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Posts;
