import React from "react";
import Container from "../container";

const Connect = () => {
  return (
    <section className="w-screen flex justify-center items-center font-pressStart">
      <div className="h-[35vh] md:h-[65vh] w-[90vw] md:w-[60vw] px-4 md:px-16 flex justify-center items-center flex-col gap-4 md:gap-8 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="md:text-5xl text-center">Connect With Us</h2>
        </div>
        <p className=" font-openSans md:text-2xl text-center">
       Please email us any inquiries about our club or future projects!
        </p>
        <button className="bg-black text-3xl py-2 px-4 rounded-lg ">Contact Us</button>
      </div>
    </section>
  );
};

export default Connect;
