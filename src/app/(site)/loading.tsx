import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen top-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-center  items-center fixed z-50">
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100 "> */}
      {/* <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
      </div> */}
      Loading...
      {/* </div> */}
    </div>
  );
};

export default Loading;
