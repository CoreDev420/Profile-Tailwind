import React from "react";
import Nav from "../component/Nav";
import Counter from "../component/Counter";
import "../CSS/boxicons/css/boxicons.min.css";
import Skill from "../component/skill";
const About = () => {
  return (
    <>
      <div className="bg-black">
        {/* Top title start */}
        <div className="container flex items-center mx-auto mt-auto 2xl:w-[1140px]">
          <h1 className="text-[36px] font-bold font-[Poppins,sans-serif] mr-auto p-[8px]">
            <a href="/" className="text-white">
              Jermaine Samala
            </a>
          </h1>
          <Nav />
        </div>
        {/* Top title end */}
      </div>
      {/* Section */}
      <div className="container mx-auto bg-black 2xl:w-[1140px] mt-[30px] p-[30px] pb-[30px]">
        <h2 className="text-[14px] font-medium text-[#aaaaaa] tracking-[2px] after:content-[''] after:w-[120px] after:h-[1px] after:inline-block after:bg-green-600 after:ml-[4px] after:mb-[3px]">
          ABOUT
        </h2>
        <p className="text-white text-[36px] font-bold mb-[15px]">
          LEARN MORE ABOUT ME
        </p>
        {/* Section Contants */}
        <div className="grid grid-cols-12 ">
          <div className="col-span-4 pr-[24px]">
            <img src="me.jpg" alt="not found" className="w-[100%]" />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-[26px] text-[#18d26e] font-[Raleway, sans-serif] mb-[8px]">
              WEB-3 Specialist & Full Stack Expert
            </h2>
            <div className="grid grid-cols-2 ">
              <div className="col-span-1">
                <ul>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Birthday:</strong> 20 Jan
                    1991
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Website:</strong>{" "}
                    https://github.com/superdev214
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Phone:</strong> +1 718 619
                    8521
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Location:</strong> Germany
                  </li>
                </ul>
                <br />
              </div>
              <div className="col-span-1">
                <ul>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Age:</strong> 31
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Degree:</strong> Bachelor
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Email:</strong>{" "}
                    royaldev.web.development@gmail.com
                  </li>
                  <li className="pb-[10px] text-white">
                    <i className="icofont-rounded-right text-[#18d26e]"></i>{" "}
                    <strong className="text-white">Full time job:</strong>{" "}
                    Available
                  </li>
                </ul>
                <br></br>
              </div>
            </div>
            <p className="text-white">
              I can write me exactly. 30% for backend, 70% for frontend
              <br />
              What I mean is I spent most my careers on Frontend.
              <br />
              I'm seasoned Full-stack Developer. I specialize in creating
              intuitive, engaging, and efficient digital experiences that not
              only captivate users but also maximize business performance.
              <br />
              My professional journey spans several years of building scalable
              web applications and sites. As a full stack developer,
              <br />
              I have experience in building, testing, and deploying secure and
              efficient web applications.
              <br />I am proficient in key programming languages including
              JavaScript and Typescript, and I have a deep knowledge of popular
              frameworks like React, Vue, Angular, Next,Nuxt,Nest
              <br />
              <br />
              You should hire me for my passion and honest .
              <br />
              And also I pride myself on my web development, collaboration
              skills.In my previous role as a developer, I kept up deadline and
              high quality with clients.
              <br />
              Of course clients are always satisfied with my work.
              <br />
              If you have a project in mind or if you're just exploring
              potential enhancements to your website or web application, I'd
              love to chat with you.
            </p>
          </div>
        </div>
        {/* Counter up */}
        <div className="grid grid-cols-12">
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-simple-smile absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="23" index={1}></Counter>
            <p className="text-[20px] pb-[1rem]">Happy Client</p>
          </div>
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-document-folder absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="42" index={2}></Counter>
            <p className="text-[20px] pb-[1rem]">Projects</p>
          </div>
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-live-support absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="1463" index={3}></Counter>
            <p className="text-[20px] pb-[1rem]">Hours of Support</p>
          </div>
          <div className="col-span-3 text-white bg-white/[.08] text-center mr-[20px] rounded-[7px] p-[20px] relative mt-[35px]">
            <i className="icofont-users-alt-5 absolute top-[-25px] left-[30%] translate-x-[50%] text-[24px] p-[12px] rounded-[50px] text-[#18d26e] bg-white/[.1]"></i>
            <Counter ed="3" index={4} />
            <p className="text-[20px] pb-[1rem]">Hard Workers</p>
          </div>
        </div>

        {/* counter up End */}
        <h2 className="text-[14px] font-medium text-[#aaaaaa] tracking-[2px] after:content-[''] after:w-[120px] after:h-[1px] after:inline-block after:bg-green-600 after:ml-[4px] after:m-[2px] m-[20px] ml-0">
          SKILLS
        </h2>
        <div className="grid grid-cols-12">
          <div className="col-span-6 p-[12px]">
            {" "}
            <Skill title="REACT JS" target="100" />
            <Skill title="VUE JS" target="100" />
            <Skill title="ANGULAR" target="95" />
            <Skill title="Next JS" target="100" />
            <Skill title="Nuxt JS" target="100" />
            <Skill title="ANGULAR" target="95" />
            <Skill title="NODE JS" target="100" />
            <Skill title="GOLANG" target="90" />
            <Skill title="FIGMA" target="100" />
          </div>
          <div className="col-span-6 p-[12px]">
            {" "}
            <Skill title="PHP" target="100" />
            <Skill title="lARAVEL" target="100" />
            <Skill title="REACT NATIVE" target="100" />
            <Skill title="JAVA/KOTLIN" target="80" />
            <Skill title="SWIFT" target="80" />
            <Skill title="C#" target="80" />
            <Skill title="QT" target="80" />
            <Skill title="MONGODB" target="100" />
            <Skill title="MYSQL" target="90" />
          </div>
        </div>
      </div>
      <div className="pb-[40px]"></div>
    </>
  );
};

export default About;
