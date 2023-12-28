import React from "react";

function Details() {
  return <div>Details</div>;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("http://localhost/4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: {
      id: food.id.tostring()
    },
  }));

  return {
paths,
fallback:true
  };
}
