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

const reviews = [
  {
    reviewTitle: "Fastest delivery ever!",
    review: "I ordered during my lunch break and the food arrived before I even sat back down. Hot, fresh, and exactly what I wanted.",
    userName: "Jane Doe",
    role: "Regular Customer",
  },
  {
    reviewTitle: "So easy to use",
    review: "The website is super clean and straightforward. Found my favourite restaurant, ordered, and tracked it in real time. Love it.",
    userName: "Sarah Johnson",
    role: "Food Lover",
  },
  {
    reviewTitle: "Never disappoints",
    review: "Been using this service for months now. Every order has been on time and the food always arrives in great condition.",
    userName: "Michael Lee",
    role: "Loyal Customer",
  },
];

const ClientReview = () => {
  return (
    <div className="pb-26 pt-16">
      <h1 className="text-xl sm:text-2xl font-extrabold text-center">
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
          {reviews.map((review) => (
            <ReviewCard key={review.userName} {...review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
