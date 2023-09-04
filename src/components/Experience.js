import React from "react";
import exp1 from "../assets/img/exp-img1.png";
import exp2 from "../assets/img/exp-img2.png";
const Experience = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row min-h-[480px] items-centers lg:space-x-20">
        <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
          <div data-aos='fade-down' data-aos-offset='100' className="self-start ">
            <img
              
              src={exp1}
              alt=""
            />
          </div>
          <div data-aos='fade-up' data-aos-offset='200' className="self-end">
            <img
              
              src={exp2}
              alt=""
            />
          </div>
        </div>
        <div data-aos='fade-up' data-aos-offset='300' className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0 ">
          <h2 className="text-3xl font-bold mb-6">
            New Experience in Playing Games
          </h2>
          <p className="font-secondary pb-6">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world
          </p>
          <button className="btn">Get it now</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
