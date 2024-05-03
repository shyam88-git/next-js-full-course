import React from "react";
interface PropsI {
  params: {
    productId: string | number;
  };
}
const page = ({ params }: PropsI) => {
  return <div>Details about page {params?.productId}</div>;
};

export default page;
