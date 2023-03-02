import Image from "next/image";
import { useRouter } from "next/router";
import OurWorkItem from "./OurWorkItem";
import bgImage from "../../assets/ourwork/design.png";
import styles from "../../styles/Blogs.module.css";
import Idea from "./Idea";
import img1 from "../../assets/ourwork/img1.png";
import img2 from "../../assets/ourwork/img2.png";
import img3 from "../../assets/ourwork/img3.png";
import img4 from "../../assets/ourwork/img4.png";
import img5 from "../../assets/ourwork/img5.png";
import img6 from "../../assets/ourwork/img6.png";

const DATA = [
    { id: "d1", img: img1, title: "The Project Title", type: "SaaS Solutions" },
    { id: "d2", img: img2, title: "The Project Title", type: "AI & ML" },
    { id: "d3", img: img3, title: "The Project Title", type: "EdTech" },
    { id: "d4", img: img4, title: "The Project Title", type: "Heallth Tech" },
    { id: "d5", img: img5, title: "The Project Title", type: "Ecommerce" },
    { id: "d6", img: img6, title: "The Project Title", type: "Crypto" },
  ];




const OurWorks = ({ className, padding }) => {
  const { route } = useRouter();
  return (
    <>
      <section
        className={`w-full h-full linear-grad  relative pb-[180px]`}
      >
        <div className={`w-full ${padding}`}>
          <div className={`img-container absolute top-0 `}>
            <Image src={bgImage} alt="img" />
          </div>
          <div
            className={`relative z-[21] w-full flex flex-col gap-y-[32px] items-cen ter justify-center px-[30px] md:px-[40px] lg:px-[80px]  ${className}`}
          >
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white text-center">
              Our Works
            </h1>
            <div className="relative flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass absolute left-[3%] md:left-[16.5%] top-3 text-[16px]"></i>
              <input
                type="text"
                placeholder="Search industry or name"
                className="w-full md:w-[70%] h-[40px] outline-none text-[14px] font-jakarta text-[#000000] text-opacity-[50%] px-[56px] py-[11px]"
              />
            </div>
            <div>
              <ul className="text-[16px] font-oswald font-bold flex gap-x-[14px] gap-y-[8px] flex-wrap lg:gap-x-[86px] lg:justify-center items-center">
                <li className="text-black bg-white px-[16px] py-[8px] cursor-pointer">
                  ALL CATEGORIES
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  HEALTH TECH
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  FINTECH
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  E-COMMERCE
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  EDTECH
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  AI/BIG DATA
                </li>
                <li className="text-white hover:bg-white hover:text-black px-[16px] py-[8px] cursor-pointer">
                  CRYPTO
                </li>
              </ul>
            </div>
            <div className="flex gap-x-[80px] flex-wrap justify-center gap-y-[24px] lg:gap-y-[40px] mt-[30px]">
              {DATA.map((data) => {
                return (
                  <div className=" flex flex-col gap-y-[21px]" key={data.id}>
                    <OurWorkItem data={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {route == "/portfolio" && (
          <>
            <div
              className={`${styles.box}  linear-grad  hidden md:block`}
            ></div>
            <Idea title="Start a Project" />
          </>
        )}
      </section>
    </>
  );
};

export default OurWorks;
