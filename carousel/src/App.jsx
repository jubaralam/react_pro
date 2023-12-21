import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "./Data";
const App = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-3/4 m-auto">
      <h1 className="">Hey</h1>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => {
          return (
            <>
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div className=" h-56 rounded-t-xl bg-indigo-500 flex  justify-center items-center">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  {console.log(d.name)}
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.review}</p>
                  <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounde-xl">Read More</button>
                </div>
              </div>
            </>
          );
        })}
        </Slider>
      </div>
    </div>
  );
};

export default App;
