import React from "react";
import img1 from '../assets/1.svg'
import img2 from '../assets/2.svg'
import img3 from '../assets/3.svg'
import AboutCard from "./AboutCard";

const cardData = [
    {
        icon: img1,
        heading: 'Seamless connection to any API',
        text: 'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'
    },
    {
        icon: img2,
        heading: 'Proven, ready-made solutions',
        text: 'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'
    },
    {
        icon: img3,
        heading: 'Secure off-chain computation',
        text: 'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'
    }
]

const About = () => {
  return (
    <section className=" text-white bg-black w-full text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <h1 className="py-[5rem]">A Growing Protocol Ecosystem</h1>
        <p className="py- text-xl">
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all.
        </p>
        {/* card container */}
        <div className="sm:flex my-[6rem]">
            {
                cardData.map((data) => <AboutCard icon={data.icon} heading={data.heading} text={data.text} />)
            }
           
        </div>
      </div>
    </section>
  );
};

export default About;
