import React from "react";
interface PropsI {
  params: {
    productId: number;
    reviewId: number;
  };
}

const page = ({ params }: PropsI) => {
  return (
    <div>
      productId is {params.productId} and reviw id is {params.reviewId}
    </div>
  );
};

export default page;
