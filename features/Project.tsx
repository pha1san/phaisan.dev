// "use client";

import HeaderBox from "@/components/HeaderBox";
import SectionContainer from "@/components/SectionContainer";

// // Import Swiper React components
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const PROJECT = [
  {
    img: "FWX Website",
    title: "FWX Website",
    desc: "FWX: A Decentralized Derivatives Platform on EVM chains, enabling users to predict price moves or hedge risks via its cutting-edge protocol.",
    link: "https://fwx.finance/",
  },
  {
    img: "",
    title: "FWX DeFi App",
    desc: "FWX's main application",
    link: "https://app.fwx.finance/",
  },
  {
    img: "",
    title: "FWX Blog",
    desc: "Expand your knowledge of FWX through our diverse blog, covering DeFi, trading, lending, and more.",
    link: "https://fwx.finance/blog",
  },
  {
    img: "",
    title: "FWX Wallet",
    desc: "FWX The FWX Wallet is a bridge between ecosystems, storing assets and enabling easy interaction. Its user-centric design, like a mobile banking app, ensures effortless daily use.",
    link: "https://wallet.fwx.finance",
  },
  {
    img: "https://intnode.com/assets/images/advisory.png",
    title: "Intnode",
    desc: "Crypto investment advice, insights and anaysis",
    link: "https://intnode.com/",
  },
];

const Project = () => {
  return (
    <SectionContainer className="flex items-center justify-center py-32" id="project" name="project">
      <div className="mr-5 text-[96px]">🖥</div>
      <HeaderBox title={"Project"} desc={"Each project is a unique piece of development"} className="mr-auto" />
      <div className="grid  grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div></div>
      </div>
      {/* Project{" "}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
    </SectionContainer>
  );
};

export default Project;
