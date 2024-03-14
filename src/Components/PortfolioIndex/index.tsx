import Logo from "/src/assets/logo.svg";
import PortfolioIndexImg01 from "/src/assets/portfolio/mobile/image-portfolio-manage.jpg";
import PortfolioIndexImg01Tablet from "/src/assets/portfolio/tablet/image-portfolio-manage.jpg";
import PortfolioIndexImg01Desktop from "/src/assets/portfolio/desktop/image-portfolio-manage.jpg";
import MenuIcon from "/src/assets/icons/hamburger.svg";
import CloseIcon from "/src/assets/icons/close.svg";
import PortfolioIndexImg02 from "/src/assets/portfolio/mobile/image-portfolio-bookmark.jpg";
import PortfolioIndexImg02Tablet from "/src/assets/portfolio/tablet/image-portfolio-bookmark.jpg";
import PortfolioIndexImg02Desktop from "/src/assets/portfolio/desktop/image-portfolio-bookmark.jpg";
import PortfolioIndexImg03 from "/src/assets/portfolio/mobile/image-portfolio-insure.jpg";
import PortfolioIndexImg03Tablet from "/src/assets/portfolio/tablet/image-portfolio-insure.jpg";
import PortfolioIndexImg03Desktop from "/src/assets/portfolio/desktop/image-portfolio-insure.jpg";
import PortfolioIndexImg04 from "/src/assets/portfolio/mobile/image-portfolio-fylo.jpg";
import PortfolioIndexImg04Tablet from "/src/assets/portfolio/tablet/image-portfolio-fylo.jpg";
import PortfolioIndexImg04Desktop from "/src/assets/portfolio/desktop/image-portfolio-fylo.jpg";
import { useState } from "react";

function PortfolioIndex() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden desktop:px-[165px] tablet:px-[40px] px-8 pt-[32px]">
      <div className="tablet:mb-[94px] mb-[40px] flex items-center justify-between">
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
      <div className="desktop:gap-[125px] tablet:flex-row tablet:justify-center tablet:gap-[69px] tablet:mb-[80px] mb-[72px] flex items-center flex-col">
        <img
          className="tablet:hidden mb-[32px]"
          src={PortfolioIndexImg01}
          alt="PortfolioIndexImg01"
        />
        <img
          className="hidden desktop:hidden tablet:flex"
          src={PortfolioIndexImg01Tablet}
          alt="PortfolioIndexImg01Tablet"
        />
        <img
          className="hidden desktop:flex"
          src={PortfolioIndexImg01Desktop}
          alt="PortfolioIndexImg01Desktop"
        />
        <div>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
          <h1 className="desktop:mt-[103px] desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] text-start max-w-[311px] text-[36px] mt-[24px] mb-[24px] font-bold tracking-tight">
            Manage
          </h1>
          <p className="tablet:max-w-[347px] mb-[24px] max-w-[311px] text-neutral-700 text-[16px] leading-[30px] font-normal">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <button className="desktop:mb-[103px] transform motion-safe:hover:scale-110 duration-200 hover:bg-black hover:text-white cursor-pointer mb-[24px] outline outline-2 py-[17px] pr-[36px] pl-[32px] text-neutral-700 text-[12px] leading-[14px] font-normal tracking-wider">
            VIEW PROJECT
          </button>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
        </div>
      </div>
      <div className="desktop:translate-x-[95px] desktop:gap-[125px] tablet:flex-row-reverse tablet:justify-center tablet:gap-[69px] tablet:mb-[80px] mb-[72px] flex items-center flex-col">
        <img
          className="tablet:hidden mb-[32px]"
          src={PortfolioIndexImg02}
          alt="PortfolioIndexImg01"
        />
        <img
          className="hidden desktop:hidden tablet:flex"
          src={PortfolioIndexImg02Tablet}
          alt="PortfolioIndexImg01Tablet"
        />
        <img
          className="hidden desktop:flex"
          src={PortfolioIndexImg02Desktop}
          alt="PortfolioIndexImg01Desktop"
        />
        <div>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
          <h1 className="desktop:mt-[103px] desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] text-start max-w-[311px] text-[36px] mt-[24px] mb-[24px] font-bold tracking-tight">
            Bookmark
          </h1>
          <p className="tablet:max-w-[347px] mb-[24px] max-w-[311px] text-neutral-700 text-[16px] leading-[30px] font-normal">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            features section.
          </p>
          <button className="desktop:mb-[103px] transform motion-safe:hover:scale-110 duration-200 hover:bg-black hover:text-white cursor-pointer mb-[24px] outline outline-2 py-[17px] pr-[36px] pl-[32px] text-neutral-700 text-[12px] leading-[14px] font-normal tracking-wider">
            VIEW PROJECT
          </button>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
        </div>
      </div>
      <div className="desktop:gap-[125px] tablet:flex-row tablet:justify-center tablet:gap-[69px] tablet:mb-[80px] mb-[72px] flex items-center flex-col">
        <img
          className="tablet:hidden mb-[32px]"
          src={PortfolioIndexImg03}
          alt="PortfolioIndexImg01"
        />
        <img
          className="hidden desktop:hidden tablet:flex"
          src={PortfolioIndexImg03Tablet}
          alt="PortfolioIndexImg01Tablet"
        />
        <img
          className="hidden desktop:flex"
          src={PortfolioIndexImg03Desktop}
          alt="PortfolioIndexImg01Desktop"
        />
        <div>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
          <h1 className="desktop:mt-[103px] desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] text-start max-w-[311px] text-[36px] mt-[24px] mb-[24px] font-bold tracking-tight">
            Insure
          </h1>
          <p className="tablet:max-w-[347px] mb-[24px] max-w-[311px] text-neutral-700 text-[16px] leading-[30px] font-normal">
            This was a small project which mostly consisted of HTML and CSS. I
            built a fully-responsive landing page. The only JavaScript this
            project required was to enable the toggling of the mobile
            navigation.
          </p>
          <button className="desktop:mb-[103px] transform motion-safe:hover:scale-110 duration-200 hover:bg-black hover:text-white cursor-pointer mb-[24px] outline outline-2 py-[17px] pr-[36px] pl-[32px] text-neutral-700 text-[12px] leading-[14px] font-normal tracking-wider">
            VIEW PROJECT
          </button>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
        </div>
      </div>
      <div className="desktop:translate-x-[95px] desktop:gap-[125px] tablet:flex-row-reverse tablet:justify-center tablet:gap-[69px] mb-[80px] flex items-center flex-col">
        <img
          className="tablet:hidden mb-[32px]"
          src={PortfolioIndexImg04}
          alt="PortfolioIndexImg01"
        />
        <img
          className="hidden desktop:hidden tablet:flex"
          src={PortfolioIndexImg04Tablet}
          alt="PortfolioIndexImg01Tablet"
        />
        <img
          className="hidden desktop:flex"
          src={PortfolioIndexImg04Desktop}
          alt="PortfolioIndexImg01Desktop"
        />
        <div>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
          <h1 className="desktop:mt-[103px] desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] text-start max-w-[311px] text-[36px] mt-[24px] mb-[24px] font-bold tracking-tight">
            Fylo
          </h1>
          <p className="tablet:max-w-[347px] mb-[24px] max-w-[311px] text-neutral-700 text-[16px] leading-[30px] font-normal">
            This project was built in pure HTML and CSS. I had mobile and
            desktop designs to work to and built it so that it was
            fully-responsive. I took a mobile-first approach and used modern CSS
            like Flexbox and Grid for layout purposes.
          </p>
          <button className="desktop:mb-[103px] transform motion-safe:hover:scale-110 duration-200 hover:bg-black hover:text-white cursor-pointer mb-[24px] outline outline-2 py-[17px] pr-[36px] pl-[32px] text-neutral-700 text-[12px] leading-[14px] font-normal tracking-wider">
            VIEW PROJECT
          </button>
          <span className="opacity-25 flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
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

export default PortfolioIndex;
