import React from 'react';

const Footer = () => {
    const h3Style = 'font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-[5rem]'
    return (
        <footer className='bg-black text-white'>
            <div className='flex justify-center max-w-[1240px] px-4 mx-auto'>
                <div className='mx-[5rem]'>
                    <h3 className={h3Style}>Products</h3>
                    <ul>
                        <li>App</li>
                        <li>Analytics</li>
                        <li>Token</li>
                        <li>Defi</li>
                    </ul>
                </div>
                <div className='mx-[5rem]' >
                    <h3 className={h3Style}>Products</h3>
                    <ul>
                        <li>App</li>
                        <li>Analytics</li>
                        <li>Token</li>
                        <li>Defi</li>
                    </ul>
                </div>
            </div>
            <marquee behavior="" direction="">Powred by HAMIM</marquee>
        </footer>
    );
};

export default Footer;