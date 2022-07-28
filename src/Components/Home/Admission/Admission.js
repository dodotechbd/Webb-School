import { Link } from "react-router-dom";
import useAdmission from "../../../Hooks/useAdmission";
import AdmissionCard from "./AdmissionCard";

const Admission = () => {
  const [admission, setAdmission] = useAdmission();

  return (
    <div id="admission" className="" >
      <div className="mb-10 mt-8">
        <h1 data-aos="flip-right" data-aos-duration="2000" className="lg:text-3xl md:text-2xl text-xl text-black font-semibold text-center">
          Admission Preparation
        </h1>
        <p className="lg:text-xl text-md mb-5 mt-2 text-center text-gray-500">
          Prepare for your dreams university
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:mx-8 mb-10 ">
        {admission.slice(0, 4).map((admission) => (
          <AdmissionCard
            key={admission._id}
            admission={admission}
          ></AdmissionCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={'admission'} className="btn btn-wide btn-primary text-white ">
          Explore All Programs
        </Link>
      </div>
    </div>
  );
};

export default Admission;
