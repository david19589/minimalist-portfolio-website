import Logo from "/src/assets/logo.svg";
import MenuIcon from "/src/assets/icons/hamburger.svg";
import CloseIcon from "/src/assets/icons/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const [open, setOpen] = useState(false);

  const schema: ZodType<FormData> = z.object({
    name: z
      .string()
      .min(1)
      .max(30)
      .regex(/^[A-Za-z]+$/),
    email: z.string().email().max(40),
    message: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    if (errors) {
      location.reload();
    }
    return data;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="desktop:px-[165px] tablet:px-[40px] px-8 pt-[32px]"
    >
      <div className="tablet:mb-[94px] mb-[40px] flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <div className="desktop:right-[165px] hidden tablet:absolute tablet:right-[40px] tablet:flex tablet:flex-row">
          <Link to="/">
            <h1 className="mr-[40px] duration-200 hover:text-emerald-400 cursor-pointer text-neutral-700 font-[400] text-[12px] tracking-wider leading-[14px]">
              HOME
            </h1>
          </Link>
          <Link to="/PortfolioIndex">
            <h1 className="mr-[40px] duration-200 hover:text-emerald-400 cursor-pointer text-neutral-700 font-[400] text-[12px] tracking-wider leading-[14px]">
              PORTFOLIO
            </h1>
          </Link>
          <Link to="/Contact">
            <h1 className="duration-200 hover:text-emerald-400 cursor-pointer text-neutral-700 font-[400] text-[12px] tracking-wider leading-[14px]">
              CONTACT ME
            </h1>
          </Link>
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
                <Link to="/">
                  <li className="text-white cursor-pointer duration-200 hover:text-gray-300">
                    HOME
                  </li>
                </Link>
                <Link to="/PortfolioIndex">
                  <li className="text-white cursor-pointer duration-200 hover:text-gray-300">
                    PORTFOLIO
                  </li>
                </Link>
                <Link to="/Contact">
                  <li className="text-white cursor-pointer duration-200 hover:text-gray-300">
                    CONTACT ME
                  </li>
                </Link>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="desktop:mb-[109px] tablet:mb-[96px] mb-[32px] flex flex-col items-center">
        <div className="desktop:w-[1110px]">
          <span className="desktop:max-w-[1110px] desktop:mb-[48px] tablet:max-w-[706px] opacity-25 mb-[32px] flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
          <div className="desktop:flex">
            <h1 className="desktop:mt-0 desktop:mr-[125px] desktop:w-[350px] desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] max-w-[311px] text-[36px] mt-6 mb-8 font-bold tracking-tight">
              Get in Touch
            </h1>
            <div>
              <p className="desktop:max-w-[620px] tablet:max-w-[706px] mb-[24px] max-w-[314px] text-neutral-700 text-[16px] leading-[30px] font-normal">
                I’d love to hear about what you’re working on and how I could
                help. I’m currently looking for a new role and am open to a wide
                range of opportunities. My preference would be to find a
                position in a company in London. But I’m also happy to hear
                about opportunities that don’t fit that description. I’m a
                hard-working and positive person who will always approach each
                task with a sense of purpose and attention to detail. Please do
                feel free to check out my online profiles below and get in touch
                using the form.
              </p>
              <div className="mb-[32px] flex">
                <a
                  href="https://github.com/david19589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-[15px] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                  >
                    <path
                      fill="#000"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#000"
                      d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <span className="desktop:max-w-[1110px] desktop:mt-[48px] desktop:mb-[47px] tablet:max-w-[706px] opacity-25 mb-[32px] flex bg-neutral-700 max-w-[311px] h-[1px]"></span>
        </div>
        <div className="desktop:flex">
          <h1 className="desktop:mr-[125px] desktop:w-[350px] desktop:tracking-wide desktop:text-[50px] desktop:leading-[50px] tablet:max-w-[456px] max-w-[311px] text-[36px] mb-8 font-bold tracking-tight">
            Contact Me
          </h1>
          <div>
            <form onSubmit={handleSubmit(submitData)}>
              <div className="mb-[24px] flex flex-col">
                <label className="mb-[8px] font-bold text-[13px] leading-[30px]">
                  Name
                </label>
                <input
                  {...register("name")}
                  className={
                    errors.name
                      ? "border-[2px] border-b-red-600 desktop:max-w-[635px] tablet:max-w-[689px] tablet:w-[689px] max-w-[311px] outline-none tablet:py-[15px] py-[12px] pr-[40px] pl-[16px] bg-neutral-200"
                      : "desktop:max-w-[635px] tablet:max-w-[689px] tablet:w-[689px] max-w-[311px] outline-none tablet:py-[15px] py-[12px] pr-[40px] pl-[16px] bg-neutral-200"
                  }
                  placeholder="Jane Appleseed"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-600 text-[12px] mt-[5px]">
                    {errors.name?.message}
                  </span>
                )}
              </div>
              <div className="mb-[24px]  flex flex-col">
                <label className="mb-[8px] font-bold text-[13px] leading-[30px]">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  className={
                    errors.email
                      ? "border-[2px] border-b-red-600 desktop:max-w-[635px] tablet:max-w-[689px] tablet:w-[689px] max-w-[311px] outline-none tablet:py-[15px] py-[12px] pr-[40px] pl-[16px] bg-neutral-200"
                      : "desktop:max-w-[635px] tablet:max-w-[689px] tablet:w-[689px] max-w-[311px] outline-none tablet:py-[15px] py-[12px] pr-[40px] pl-[16px] bg-neutral-200"
                  }
                  placeholder="email@example.com"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-600 text-[12px] mt-[5px]">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mb-[8px] font-bold text-[13px] leading-[30px]">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className={
                    errors.message
                      ? "border-[2px] border-b-red-600 desktop:max-w-[635px] tablet:max-w-[689px] tablet:w-[689px] tablet:pb-[57px] max-w-[311px] outline-none tablet:py-[15px] py-[12px] pr-[40px] pl-[16px] bg-neutral-200"
                      : "desktop:max-w-[635px] tablet:max-w-[689px] tablet:w-[689px] tablet:pb-[57px] max-w-[311px] outline-none tablet:py-[15px] py-[12px] pr-[40px] pl-[16px] bg-neutral-200"
                  }
                  placeholder="How can I help?"
                />
                {errors.message && (
                  <span className="text-red-600 text-[12px] mt-[5px]">
                    {errors.message?.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="mt-[24px] transform motion-safe:hover:scale-110 duration-200 hover:bg-white hover:text-black cursor-pointer outline outline-2 py-[17px] pr-[36px] pl-[32px] text-white bg-slate-700 text-[12px] leading-[14px] font-normal tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
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
            <Link to="/">
              <h1 className="tablet:mb-0 tablet:mr-[40px] duration-200 hover:text-gray-300 text-center cursor-pointer text-white mb-[32px] font-[400] text-[12px] tracking-wider leading-[14px]">
                HOME
              </h1>
            </Link>
            <Link to="/PortfolioIndex">
              <h1 className="tablet:mb-0 tablet:mr-[40px] duration-200 hover:text-gray-300 text-center cursor-pointer text-white mb-[32px] font-[400] text-[12px] tracking-wider leading-[14px]">
                PORTFOLIO
              </h1>
            </Link>
            <Link to="/Contact">
              <h1 className="tablet:mb-0 duration-200 hover:text-gray-300 text-center cursor-pointer text-white mb-[32px] font-[400] text-[12px] tracking-wider leading-[14px]">
                CONTACT ME
              </h1>
            </Link>
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
    </motion.div>
  );
}

export default Contact;
