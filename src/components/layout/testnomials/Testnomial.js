import React, { useState, useEffect, useRef } from "react";
import "./testnomial.css";
import { FaQuoteRight } from "react-icons/fa";
import TestnimialCard from "./TestnimialCard";
import { useSelector } from "react-redux";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./styles.css";

function Testnomial() {
  const [swiper, setSwiper] = useState();
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.testinomial.testinomial;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  const prevRef = useRef();
  const nextRef = useRef();

  React.useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
      <section>
        <div className="wrapper testnomialContainer">
          <div className="testnomialTitleContainer">
            <div className="testnomialTitle">
              <h2>What they say about us</h2>
              <p>Our beloved customer testnomial about our service</p>
            </div>
            <div className="">
              <FaQuoteRight className="testnomialQoute" />
            </div>
          </div>

          <div className="testnomialCardWrapper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current,
              }}
              updateOnWindowResize
              observer
              observeParents
              initialSlide={2}
              onSwiper={setSwiper}
              modules={[Pagination, Navigation, Scrollbar, A11y, Controller]}
              className="mySwiper"
            >
              {data &&
                data.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <TestnimialCard
                        key={index}
                        content={item.fields.content}
                        authorName={item.fields.authorName}
                        authorStatus={item.fields.authorStatus}
                        author={item.fields.author}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testnomial;
