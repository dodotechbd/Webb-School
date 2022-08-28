import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ReviewCard from "./ReviewCard";
const BookReview = () => {
    const {
        data: bookreviews,
        isLoading,
        refetch,
      } = useQuery(["bookreviewsData"], () =>
        fetch(`https://rocky-escarpment-87440.herokuapp.com/bookreviews`).then((res) =>
          res.json()
        )
      );
      if (isLoading) {
        return <Loading></Loading>;
      }
  return (
    <div className="mt-4 text-center">
      <h1 className="text-3xl pb-5 ">Book Reviews</h1>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name & Rating</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookreviews?.map((allcard, index) => (
              <ReviewCard
                key={allcard._id}
                allcard={allcard}
                index={index}
                refetch={refetch}
              ></ReviewCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookReview;