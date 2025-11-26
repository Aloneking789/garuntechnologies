"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Rajesh Kumar",
        profession: 'Founder, TechStart Solutions',
        comment: 'Garun Technologies delivered our mobile app on time with exceptional quality. Their AI integration capabilities transformed our business operations completely.',
        imgSrc: 'https://cdn.jsdelivr.net/gh/Aloneking789/garuntechnologies@main/public/images/testimonial/blu.png',
    },
    {
        name: "Priya Sharma",
        profession: 'CEO, Digital Innovations Pvt Ltd',
        comment: 'The team at Garun Technologies is highly professional. They developed our React Native app with smooth deployment and excellent post-launch support.',
        imgSrc: 'https://cdn.jsdelivr.net/gh/Aloneking789/garuntechnologies@main/public/images/testimonial/red.png',
    },
    {
        name: "Amit Verma",
        profession: 'CTO, NextGen Enterprises',
        comment: 'Outstanding work on our web application! Their expertise in full-stack development and AI automation helped us scale our platform efficiently.',
        imgSrc: 'https://cdn.jsdelivr.net/gh/Aloneking789/garuntechnologies@main/public/images/testimonial/blck.png',
    },
    {
        name: "Neha Gupta",
        profession: 'Product Manager, StartupHub',
        comment: 'Working with Garun Technologies was a great experience. They understood our vision and delivered a feature-rich mobile application that our users love.',
        imgSrc: 'https://cdn.jsdelivr.net/gh/Aloneking789/garuntechnologies@main/public/images/testimonial/chair.png',
    },
    {
        name: "Sanjay Patel",
        profession: 'Director, CloudTech Systems',
        comment: 'Their AI-based solutions are cutting-edge. The automation they implemented saved us countless hours and significantly improved our workflow efficiency.',
        imgSrc: 'https://cdn.jsdelivr.net/gh/Aloneking789/garuntechnologies@main/public/images/testimonial/db.png',
    },
    {
        name: "Kavita Singh",
        profession: 'Founder, EduConnect India',
        comment: 'Garun Technologies built our educational platform with amazing attention to detail. Their backend expertise and API development skills are top-notch.',
        imgSrc: 'https://cdn.jsdelivr.net/gh/Aloneking789/garuntechnologies@main/public/images/testimonial/brown.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
