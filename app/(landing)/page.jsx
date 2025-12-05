import React from "react";
import Navbar from "../components/navbar";
import Content from "../components/content";

const page = () => {
  return (
    <div>
      <Navbar />

      {/* <div className="flex flex-col justify-center items-center h-full pt-[160px] max-w-7xl mx-auto text-center">
        <h1 className="text-6xl text-black dark:text-zinc-50">
          Explore Stores For Your Business
        </h1>
        <h2 className="text-3xl text-gray-500 mt-2">
          Find · Share · Save · Rent
        </h2>
        <p className="text-sm text-gray-500 max-w-4xl mx-auto">
          Share this store with your team, friends, or business partners and
          make the decision process smoother. Whether you're planning a new
          outlet, expanding your business, or comparing locations, sharing helps
          everyone stay aligned. Collaborate, discuss, and finalize the perfect
          store location—together.
        </p>
      </div> */}
      <Content />
    </div>
  );
};

export default page;
