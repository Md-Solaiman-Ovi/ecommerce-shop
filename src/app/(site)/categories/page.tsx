import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div>this is category page</div>
      <Link href="/" className="text-sky-500 hover:font-bold">
        go to home{" "}
      </Link>
    </div>
  );
};

export default CategoryPage;
