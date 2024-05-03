import React from "react";
import { notFound } from "next/navigation";
interface PropsI {
  params: {
    productId: number;
    reviewId: number;
  };
}

const page = ({ params }: PropsI) => {
  if (params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      productId is {params.productId} and reviw id is {params.reviewId}
    </div>
  );
};

export default page;
