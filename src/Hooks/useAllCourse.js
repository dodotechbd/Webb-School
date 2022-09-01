import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const useAllCourse = () => {
  const { uname } = useParams();
  const { data: language, isLoading } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then((res) =>
      res.json()
    )
  );
  const { data: job, jobLoading } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
      res.json()
    )
  );
  const { data: admission, aLoading } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const courseLoading = isLoading && jobLoading && aLoading;
  return [admission, job, language, courseLoading];
};

export default useAllCourse;
