import { useQuery } from "react-query";
import primaryAxios from "../Api/primaryAxios";

const useLanguage = () => {
  const {
    data: language,
    isLoading,
    refetch,
  } = useQuery(["languageCourse"], () => primaryAxios.get(`/language`));
  return [language, isLoading, refetch];
};
const useAdmission = () => {
  const {
    data: admission,
    isLoading,
    refetch,
  } = useQuery(["admissionCourses"], () => primaryAxios.get(`/admission`));
  const admissionLoading = isLoading;
  return [admission, isLoading, refetch, admissionLoading];
};
const useJob = () => {
  const {
    data: job,
    isLoading,
    refetch,
  } = useQuery(["jobCourse"], () => primaryAxios.get(`/job`));
  const jobLoading = isLoading;
  return [job, isLoading, refetch, jobLoading];
};

const useAllCourses = () => {
  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery(["all"], () => primaryAxios.get(`/courses`));
  return { courses, isLoading, refetch };
};

const useAllCourse = () => {
  const [language, isLoading] = useLanguage();
  const [admission, , , admissionLoading] = useAdmission();
  const [job, , , jobLoading] = useJob();

  const courseLoading = isLoading || admissionLoading || jobLoading;

  return [admission, job, language, courseLoading];
};

export default {
  useLanguage,
  useJob,
  useAdmission,
  useAllCourse,
  useAllCourses,
};
