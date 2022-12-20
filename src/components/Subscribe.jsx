import React from "react";
import sbg from "../assets/subscribe.jpg";

const Subscribe = () => {
  return (
    <section className="relative">
        <img className="object-cover absolute h-full w-full -z-10 " src={sbg} alt="" />
      <div className="w-full px-4 py-8 md:py-16 text-center text-white">
        <div className="">
          <h1>Join Our DeFi Community</h1>
          <div className="py-6">
            <input
              className="p-2 rounded-3xl mr-4"
              type="email"
              placeholder="Enter Your Email"
            />
            <button>Sign Up</button>
          </div>
          <div className="flex items-center justify-center mt-[-17px]">
            <input className="mr-2" type="checkbox" />
            <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
