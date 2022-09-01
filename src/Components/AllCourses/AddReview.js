import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { useQuery } from "react-query";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import primaryAxios from "../../Api/primaryAxios";
import auth from "../../firebase.init";

const AddReview = () => {
  const { uname } = useParams();
  const [user, loading] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  const courseData = myCourse?.data?.find((allcard) => allcard.uname === uname);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      rating,
      courseName: courseData?.uname,
      reviewDate: new Date(),
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
        photo: auth?.currentUser?.photoURL,
      },
    };
    (async () => {
      const { data } = await primaryAxios.post(`/reviews`, reviewData);
      if (data.acknowledged) {
        Swal.fire("Thank You!", "For Your Feedback!", "success");
        reset();
        refetch();
      }
    })();
  };

  return (
    <>
      <figure className="px-10 pt-10">
        <img
          src="https://raw.githubusercontent.com/MShafiMS/admission/69bf271511e1e926ff0e90113c90075e937fd205/output-onlinegiftools.gif"
          alt="Shoes"
          className="rounded-full w-28 bg-base-300"
        />
      </figure>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body items-center text-center p-4"
      >
        <h2 className="text-xl">Rate this course</h2>
        <div className="text-3xl text-[#FAAF00]">
          <Rating
            count={5}
            onChange={setRating}
            fractions={2}
            emptySymbol={<ImStarEmpty />}
            fullSymbol={<ImStarFull />}
          />
        </div>
        <textarea
          {...register("review")}
          className="textarea my-3 textarea-primary w-full max-w-xs"
          placeholder="Write about this course"
          required
        ></textarea>
        <button type="submit" className="px-8 py-2 rounded-md btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddReview;
