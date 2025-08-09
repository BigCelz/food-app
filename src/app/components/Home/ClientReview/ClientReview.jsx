"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ClientReview = () => {
  return (
    <div className="pb-26 pt-16">
      <h1 className="text-xl sm:text-2xl font-extrabold text-center ">
        What people say about us
      </h1>

      <div className="mt-16 w-[80%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard
            reviewTitle="Great work!"
            userName="Jane Doe"
            role="UI/UX Designer"
            userImage="/images/user1.png"
          />
          <ReviewCard
            reviewTitle="Amazing support!"
            userName="Sarah Johnson"
            role="Frontend Developer"
            userImage="/images/user2.png"
          />
          <ReviewCard
            reviewTitle="Highly recommend!"
            userName="Michael Lee"
            role="Product Manager"
            userImage="/images/user3.jpg"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
