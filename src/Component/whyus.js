import React from "react";
import 'tailwindcss/tailwind.css';
import money from '../Images/money.svg';
import notes from '../Images/notes.svg';
import people from '../Images/people.svg';
import books from '../Images/books.svg';
import tools from '../Images/tools.svg';
import support from '../Images/support.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../index.css';

function WhyUs() {
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

    const features = [
        {
            img: notes,
            title: "Personalized Plan",
            description: "A well-structured curriculum tailored to industry demands ensures that learners acquire relevant skills. It focuses on practical knowledge and up-to-date content, preparing students for real-world challenges.",
            gradient: "from-[#FFDDDD80] to-[#E2E2E280]"
        },
        {
            img: people,
            title: "Expert Instructors",
            description: "Learning from experienced professionals who have worked in the field provides valuable insights. Expert instructors can share practical examples, industry best practices, and mentorship, enhancing the learning experience.",
            gradient: "from-[#DDFFEB80] to-[#E2E2E280]"
        },
        {
            img: books,
            title: "Hands-on Learning",
            description: "Theory alone isn’t sufficient. Hands-on projects allow learners to apply concepts, solve problems, and build a portfolio. Practical experience reinforces theoretical knowledge and boosts confidence.",
            gradient: "from-[#DDE7FF80] to-[#E2E2E280]"
        },
        {
            img: tools,
            title: "Access to Tools",
            description: "Exposure to tools and technologies commonly used in the industry is crucial. Access to software, platforms, and development environments ensures students are well-prepared for their future roles.",
            gradient: "from-[#FAFFDD80] to-[#E2E2E280]"
        },
        {
            img: money,
            title: "Affordable Options",
            description: "Learning should be accessible to all. Affordable pricing and flexible payment plans accommodate diverse learners, regardless of financial constraints.",
            gradient: "from-[#FFEBDD80] to-[#E2E2E280]"
        },
        {
            img: support,
            title: "Career Support",
            description: "Beyond learning, career outcomes matter. Job placement services, resume building, interview preparation, and networking opportunities help students transition successfully into the workforce.",
            gradient: "from-[#FFDDF580] to-[#E2E2E280]"
        }
    ];

    return (
        <div className="container mx-auto px-4 font-clash">
            <div className="text-center mb-8 mt-8">
                <label className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-10">
                    Why <span className="text-blue-600">us</span>?
                </label>
            </div>
            <div className='lg:block md:block sm:hidden hidden'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 sm:mt-20">
                    {features.map((feature, index) => (
                        <div key={index} className={`border-2 border-white border-opacity-50 shadow-xl overflow-hidden rounded-3xl p-4 bg-gradient-to-b ${feature.gradient} h-96 `}>
                            <div className="flex flex-col gap-4 h-full p-6">
                                <img src={feature.img} alt={feature.title} className="w-16 h-16 " />
                                <p className="font-semibold text-2xl sm:text-3xl lg:text-3xl  leading-snug">{feature.title}</p>
                                <p className="font-light text-custom-16 font-outfit text-gray-700 pb-8 ">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:hidden md:hidden sm:block block">
                <Slider {...settings}>
                    {features.map((feature, index) => (
                        <div key={index} className="p-2">
                            <div className={`border-2 border-white border-opacity-50 shadow-xl overflow-hidden rounded-3xl p-4 bg-gradient-to-b ${feature.gradient} h-96 `}>
                                <div className="flex flex-col gap-4 h-full p-6">
                                    <img src={feature.img} alt={feature.title} className="w-16 h-16" />
                                    <p className="font-semibold text-2xl sm:text-3xl lg:text-3xl leading-snug">{feature.title}</p>
                                    <p className="font-light text-custom-16 font-outfit text-gray-700 pb-8">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default WhyUs;
