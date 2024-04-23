import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      This is admin page. Please
      <Link href="/"> Go to home page</Link>
    </div>
  );
};

export default page;
