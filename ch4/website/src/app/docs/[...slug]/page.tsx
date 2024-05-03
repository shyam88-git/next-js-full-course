import React from "react";

const page = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs for features {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    <h1>View docs for features {params.slug[0]}</h1>;
  }

  return <div>Catch all segements</div>;
};

export default page;
