import React from "react";
import terminal from '../assets/terminal.png'

const Developer = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="sm:flex sm:text-start text-center items-center max-w-[1240px] mx-auto px-4 pb-[4rem] sm:pb-[9rem]">
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="blue">documentation</span>, the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-10 sm:py-16">
            <img className="max-w-[350px] shadow-lg shadow-gray-500/30" src={terminal} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Developer;
