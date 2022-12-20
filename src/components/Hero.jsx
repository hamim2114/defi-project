import React from "react";
import bg from "../assets/a.jpg";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] top-[90px]">
      <img  className="object-cover h-full w-full absolute -z-10" src={bg} alt="" />
      <div className="w-full h-[90%] text-white flex flex-col justify-center items-center text-center px-4 ">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="blue">Trading</span>Protocol
        </h1>
        <p className="text-xl py-4 text-gray-400">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2 ">FAQ</button>
        </div>
      </div>
      <div className="mx-5">
        <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42,104,783,662.47</p>
      </div>
    </section>
  );
};

export default Hero;
