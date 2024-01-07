import React from "react";

const productsPage = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col gap-4 items-center justify-center bg-red-50">
      <div>productsPage</div>
      <div className="rounded-lg p-5 bg-blue-100 hover:animate-accordion-down">
        hover me
      </div>
    </div>
  );
};

export default productsPage;
