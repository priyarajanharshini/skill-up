import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../index.css';
import pic1 from '../Images/pic 1.svg';
import pic2 from '../Images/pic 2.svg';
import pic3 from '../Images/pic 3.svg';

function Howwestarted() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <div className="mx-auto mt-16 mb-8">
        <h1 className="font-clash text-3xl lg:text-5xl font-bold text-center">
          How<span className="text-blue-600"> we started</span>
        </h1>
      </div>
      <div className='lg:block md:hidden sm:hidden hidden '>
        <div className="flex flex-wrap pt-6 -mt-10 lg:mt-0 md:-mt-8 sm:-mt-8 ">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg h-auto flex flex-col">
              <img src={pic1} alt="2020" className="w-full h-80 object-cover rounded-t-lg" />
              <div className="p-4 flex-grow">
                <p className="font-clash font-semibold text-start text-2xl leading-8 text-blue-600">2020</p>
                <p className="font-outfit font-light text-base text-start leading-6 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Fringilla fermentum ut at malesuada volutpat nullam scelerisque mauris enim.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4 lg:mt-64 ">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg h-auto flex flex-col ">
              <img src={pic2} alt="2021" className="w-full h-80 object-cover rounded-t-lg" />
              <div className="p-4 flex-grow">
                <p className="font-clash font-semibold text-start text-2xl leading-8 text-blue-600">2021</p>
                <p className="font-outfit font-light text-base text-start leading-6 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Fringilla fermentum ut at malesuada volutpat nullam scelerisque mauris enim.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg h-auto flex flex-col">
              <img src={pic3} alt="2022" className="w-full h-80 object-cover rounded-t-lg" />
              <div className="p-4 flex-grow">
                <p className="font-clash font-semibold text-start text-2xl leading-8 text-blue-600">2022</p>
                <p className="font-outfit font-light text-base text-start leading-6 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Fringilla fermentum ut at malesuada volutpat nullam scelerisque mauris enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden md:block sm:block block">
        <Slider {...settings}>
          <div className="p-4">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg h-auto flex flex-col">
              <img src={pic1} alt="2020" className="w-full h-80 object-cover rounded-t-lg" />
              <div className="p-4 flex-grow">
                <p className="font-clash font-semibold text-start text-2xl leading-8 text-blue-600">2020</p>
                <p className="font-outfit font-light text-base text-start leading-6 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Fringilla fermentum ut at malesuada volutpat nullam scelerisque mauris enim.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg h-auto flex flex-col lg:mt-60">
              <img src={pic2} alt="2021" className="w-full h-80 object-cover rounded-t-lg" />
              <div className="p-4 flex-grow">
                <p className="font-clash font-semibold text-start text-2xl leading-8 text-blue-600">2021</p>
                <p className="font-outfit font-light text-base text-start leading-6 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Fringilla fermentum ut at malesuada volutpat nullam scelerisque mauris enim.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-lg h-auto flex flex-col">
              <img src={pic3} alt="2022" className="w-full h-80 object-cover rounded-t-lg" />
              <div className="p-4 flex-grow">
                <p className="font-clash font-semibold text-start text-2xl leading-8 text-blue-600">2022</p>
                <p className="font-outfit font-light text-base text-start leading-6 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Fringilla fermentum ut at malesuada volutpat nullam scelerisque mauris enim.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Howwestarted;