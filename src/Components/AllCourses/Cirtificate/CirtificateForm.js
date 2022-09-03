import React from "react";
import "./Cirtificate.css";

const CirtificateForm = ({ formData, userData, courseData }) => {
  return (
    <form>
      <div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Awarded to</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={userData?.name}
            value={userData?.name}
            disabled
            class="input input-bordered"
          />
        </div>
      </div>
      <div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">for completing</span>
          </label>
          <input
            id="course"
            name="course"
            disabled
            placeholder={
              courseData?.name === "" && "Creating PDFs with React & Make.cm"
            }
            value={courseData?.name}
            class="input input-bordered"
          />
        </div>
      </div>
    </form>
  );
};

export default CirtificateForm;
