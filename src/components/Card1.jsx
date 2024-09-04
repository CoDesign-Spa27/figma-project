import React, { useState } from 'react';

const Card1 = () => {
  const [activeTab, setActiveTab] = useState('About Me');
 
  const tabContent = {
    'About Me': "Hello! I'm Sandeep Singh, a passionate and innovative full-stack developer with a knack for crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on bringing ideas to life and solving complex problems with elegant solutions.",
    'Experience': "I embarked on my journey in software development with a curiosity for how things work behind the scenes.Over the years, I've honed my skills in technologies like React, Node.js, Express, Next.js, and databases such as MongoDB and PostgreSQL. I also have additional knowledge of Docker, Git, and DevOps",
    'Recommended': "As a full-stack developer, I enjoy working on all aspects of web development. Whether it's designing intuitive user interfaces, building robust server-side logic, or optimizing database performance, I approach each task with creativity and precision."
  };

  return (
    <div className="h-[50%] w-full bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
      <div className="p-4 flex gap-4 items-start">
        <div>
          <img src="/QMark.svg" alt="Question Mark" />
        </div>
        <div className="h-[56px] font-medium bg-black rounded-2xl flex justify-evenly items-center text-[13px]">
          {['About Me', 'Experience', 'Recommended'].map((tab) => (
            <div
              key={tab}
              className={`relative rounded-xl px-[55px] h-[40px] flex justify-center items-center ml-2 mr-2 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
                ${activeTab === tab ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_10px_black]' : 'text-[#b4aeae]  hover:text-white'}
              `}
              onClick={() => setActiveTab(tab)}
            >
              <div className="absolute inset-0 bg-[#98999d2b] transform -translate-x-full transition-transform duration-1000 ease-in-out"></div>
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 p-4 ml-2.5 items-start">
      <div className="mt-5 w-[19px]">
          <img src="/grid.svg" alt="" />
        </div>
        <div className="flex-1">
          <p className="text-[#969696] text-[18px]">{tabContent[activeTab]}</p>
        </div>
        <div>
          <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299]"></div>
        </div>
      </div>
      <style jsx>{`
        .relative:hover .absolute {
          transform: translateX(0);
        }
        .absolute {
          transition: transform 0.5s ease-in-out;
          transform: translateX(-100%);
        }
      `}</style>
    </div>
  );
};

export default Card1;
