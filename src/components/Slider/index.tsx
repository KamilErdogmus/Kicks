import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../Utils";
import Card from "../Card";
import { Link, useParams } from "react-router-dom";

const SliderComponent = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { id } = useParams();

  const { data = [] } = useQuery({
    queryKey: ["shoes", id],
    queryFn: () => getShoes(""),
  });
  const handleBeforeChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  const handleAfterChange = (current: number) => {
    if (current !== data.length - 4) {
      return setCurrentSlide(current / 4);
    }

    if (current === data.length - 4) {
      setCurrentSlide(4);
    }
  };

  const Arrow = () => {
    return <div className="hidden" />;
  };

  const settings = {
    dots: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    appendDots: (dots: string) => (
      <div className="flex justify-center items-center mt-4 max-w-[1320px] mx-auto">
        <ul className="flex gap-2 justify-center mx-auto w-10 h-[6px] rounded-lg">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="h-2 w-8 mx-1 cursor-pointer"
        style={{
          backgroundColor:
            i === currentSlide ? "#007bff" : "#d3d3d3",
          borderRadius: "8px",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[128px] mb-[60px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-dark text-[48px]">
          You may also like
        </h2>
        <div className="flex gap-4">
          <button
            disabled={currentSlide === 0}
            className={`w-10 h-10 text-white rounded-lg bg-gray-dark ${
              currentSlide === 0 ? "disabled:bg-opacity-50" : ""
            } hover:text-blue border border-gray-dark`}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            &lt;
          </button>
          <button
            disabled={currentSlide + 4 >= data.length}
            className={`w-10 h-10 text-white rounded-lg bg-gray-dark ${
              currentSlide + 4 >= data.length
                ? "disabled:bg-opacity-50"
                : ""
            } hover:text-blue hover:bg-gray border border-gray-dark`}
            onClick={() => sliderRef.current?.slickNext()}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="slider-container my-8">
        <Slider ref={sliderRef} {...settings}>
          {/* @ts-ignore */}
          {data?.map((shoe) => (
            <Link
              to={`/detail/${shoe.id}`}
              key={shoe.id}
              className="px-2 mb-12 flex"
            >
              <Card shoe={shoe} />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
