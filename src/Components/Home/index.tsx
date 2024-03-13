import Logo from "/src/assets/logo.svg";
import HomeImg01 from "/src/assets/homepage/mobile/image-homepage-hero.jpg";
import HomeImg01Tablet from "/src/assets/homepage/tablet/image-homepage-hero.jpg";
import HomeImg01Desktop from "/src/assets/homepage/desktop/image-homepage-hero.jpg";
import DownArrow from "/src/assets/icons/down-arrows.svg";
import MenuIcon from "/src/assets/icons/hamburger.svg";
import CloseIcon from "/src/assets/icons/close.svg";
import HomeImg02 from "/src/assets/homepage/mobile/image-homepage-profile.jpg";
import HomeImg02Tablet from "/src/assets/homepage/tablet/image-homepage-profile.jpg";
import HomeImg02Desktop from "/src/assets/homepage/desktop/image-homepage-profile.jpg";
import { useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden desktop:px-[165px] tablet:px-[40px] px-8 pt-[32px]">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <div className="desktop:right-[165px] hidden tablet:absolute tablet:right-[40px] tablet:flex tablet:flex-row">
          <h1 className="mr-[40px] duration-200 hover:text-emerald-400 cursor-pointer text-neutral-700 font-[400] text-[12px] tracking-wider leading-[14px]">
            HOME
          </h1>
          <h1 className="mr-[40px] duration-200 hover:text-emerald-400 cursor-pointer text-neutral-700 font-[400] text-[12px] tracking-wider leading-[14px]">
            PORTFOLIO
          </h1>
          <h1 className="duration-200 hover:text-emerald-400 cursor-pointer text-neutral-700 font-[400] text-[12px] tracking-wider leading-[14px]">
            CONTACT ME
          </h1>
        </div>
        <div>
          <div onClick={() => setOpen(!open)} className="h-[17px]">
            {open ? (
              <img
                className="tablet:hidden cursor-pointer"
                src={CloseIcon}
                alt="close"
              />
            ) : (
              <img
                className="tablet:hidden cursor-pointer"
                src={MenuIcon}
                alt="menu"
              />
            )}
          </div>
          {open ? (
            <div className="tablet:hidden bg-neutral-700 absolute translate-x-[-205px] translate-y-[30px]">
              <ul className="w-max flex items-center flex-col gap-[32px] px-[65px] py-[40px] text-[12px] leading-[14px] font-normal tracking-wider">
                <li className="text-white cursor-pointer duration-200 hover:text-gray-300">
                  HOME
                </li>
                <li className="text-white cursor-pointer duration-200 hover:text-gray-300">
                  PORTFOLIO
                </li>
                <li className="text-white cursor-pointer duration-200 hover:text-gray-300">
                  CONTACT ME
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="desktop:mb-[150px] tablet:mb-[96px] mt-10 flex  items-center flex-col">
        <img className="tablet:hidden" src={HomeImg01} alt="pc" />
        <img
          className="hidden desktop:hidden tablet:flex"
          src={HomeImg01Tablet}
          alt="pc"
        />
        <img className="hidden desktop:flex" src={HomeImg01Desktop} alt="pc" />
        <div className="desktop:translate-y-[300px] desktop:translate-x-[-273px] tablet:absolute tablet:translate-x-[-61px] tablet:translate-y-[336px] tablet:bg-white tablet:pr-[112px]">
          <h1 className="desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] max-w-[311px] text-[36px] mt-6 mb-8 font-bold tracking-tight">
            Hey, I’m David Naskidashvili and I love building beautiful websites
          </h1>
          <div className="tablet:mb-0 group max-w-[171px] flex items-center cursor-pointer mb-[96px]">
            <img
              className="duration-200 group-hover:bg-emerald-700 bg-slate-800  mr-[-2px] p-[16px]"
              src={DownArrow}
              alt="DownArrow"
            />
            <button className="duration-200 group-hover:bg-emerald-600 outline-offset-0 p-4 pl-[30px] bg-slate-700 text-[12px] text-white text-xs font-normal tracking-wider leading-[14px]">
              ABOUT ME
            </button>
          </div>
        </div>
      </div>
      <div className="desktop:mb-[150px] tablet:justify-around tablet:flex-row flex items-center flex-col">
        <img className="tablet:hidden mb-[32px]" src={HomeImg02} alt="man" />
        <img
          className="desktop:hidden translate-y-[-38px] mr-[69px] items-center hidden tablet:flex mb-[32px]"
          src={HomeImg02Tablet}
          alt="man"
        />
        <img
          className="tablet:hidden hidden desktop:flex translate-y-[-38px] mr-[69px] items-center mb-[32px]"
          src={HomeImg02Desktop}
          alt="man"
        />
        <div>
          <span className="tablet:max-w-[347px] opacity-25 mb-[32px] flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
          <h1 className="font-[bold] mb-[28px] tracking-tight text-black text-[40px] leading-[42px]">
            About Me
          </h1>
          <p className="tablet:max-w-[347px] mb-[24px] max-w-[311px] text-neutral-700 text-[16px] leading-[30px] font-normal">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <button className="transform motion-safe:hover:scale-110 duration-200 hover:bg-black hover:text-white cursor-pointer mb-[51px] outline outline-2 py-[17px] pr-[36px] pl-[32px] text-neutral-700 text-[12px] leading-[14px] font-normal tracking-wider">
            GO TO PORTFOLIO
          </button>
          <span className="tablet:max-w-[347px] opacity-25 mb-[115px] flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
        </div>
      </div>
      <div className="desktop:mb-[150px] tablet:justify-around tablet:flex-row mb-[80px] flex items-center flex-col">
        <h1 className="tablet:mb-0 tablet:max-w-[356px] max-w-[311px] mb-[40px] text-center flex font-[700] text-[40px] tracking-tight leading-[42px]">
          Interested in doing a project together?
        </h1>
        <span className="desktop:w-[334px] desktop:max-w-[534px] hidden tablet:flex w-[113px] max-w-[113px] opacity-25 bg-neutral-700 h-[1px]"></span>
        <button className="transform motion-safe:hover:scale-110 duration-200 hover:bg-black hover:text-white cursor-pointer outline outline-2 py-[17px] pr-[35px] pl-[32px] text-neutral-700 text-[12px] leading-[14px] font-normal tracking-wider">
          CONTACT ME
        </button>
      </div>
      <div className="desktop:pl-[165px] desktop:pr-[165px] desktop:ml-[-165px] desktop:mr-[-165px] tablet:ml-[-40px] tablet:mr-[-42px] tablet:py-[24px] tablet:px-[40px] tablet:flex-row tablet:justify-between tablet:flex-wrap ml-[-32px] mr-[-32px] py-[56px] bg-cover bg-neutral-700 flex items-center flex-col">
        <div className="tablet:flex-row flex items-center flex-col">
          <svg
            className="tablet:mb-0 tablet:mr-[49px] mb-[40px]"
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="32"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
            />
          </svg>
          <div className="tablet:flex tablet:flex-row">
            <h1 className="tablet:mb-0 tablet:mr-[40px] duration-200 hover:text-gray-300 text-center cursor-pointer text-white mb-[32px] font-[400] text-[12px] tracking-wider leading-[14px]">
              HOME
            </h1>
            <h1 className="tablet:mb-0 tablet:mr-[40px] duration-200 hover:text-gray-300 text-center cursor-pointer text-white mb-[32px] font-[400] text-[12px] tracking-wider leading-[14px]">
              PORTFOLIO
            </h1>
            <h1 className="tablet:mb-0 duration-200 hover:text-gray-300 text-center cursor-pointer text-white mb-[32px] font-[400] text-[12px] tracking-wider leading-[14px]">
              CONTACT ME
            </h1>
          </div>
        </div>
        <div className="flex">
          <a
            href="https://github.com/david19589"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-[15px] cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
              <path
                fill="#FFF"
                d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/davit-naskidashvili-8a54472b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-[15px] cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
