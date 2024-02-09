import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./hero.scss";
import db from "../../../../firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot, DocumentData } from "firebase/firestore";
import { HeroHomeSwiper } from "../../../../interfaces/interfaces";
import Link from "../../../../UI/Link/Link";
const Hero = () => {
  // const [heroSlide, setHeroSlide] = useState<DocumentData[]>([
  //   { name: "Loading", img: { default: "" } },
  // ]);

  // useEffect(() => {
  //   onSnapshot(collection(db, "heroHome"), (snapshot) => {
  //     setHeroSlide(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);
  // return (
  //   <div className="home-hero">
  //     <div className="home-hero__body">
  //       <Swiper
  //         pagination={true}
  //         modules={[Pagination]}
  //         className="mySwiper home-hero__swiper"
  //       >
  //         {heroSlide.map((documentData: DocumentData) => {
  //           const {
  //             name,
  //             img: { default: imgDefault },
  //           } = documentData as HeroHomeSwiper;
  //           return (
  //             <SwiperSlide className="home-hero__swiper-slide" key={name}>
  //               <div className="home-hero__wrap-info">
  //                 <div className="home-hero__info">
  //                   <h2 className="home-hero__title">{name}</h2>
  //                 </div>
  //                 <div className="home-hero__link-btn">
  //                   <Link text={"Хочу!"} />
  //                 </div>
  //                 <img
  //                   className="home-hero__swiper-img"
  //                   src={imgDefault}
  //                   alt=""
  //                 />
  //               </div>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>
  //     </div>
  //   </div>
  // );
  return <h1>Hero</h1>;
};

export default Hero;
