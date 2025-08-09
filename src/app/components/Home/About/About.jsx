import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* image content */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image
            src="/images/deliveryman.jpg"
            width={800}
            height={800}
            alt="image"
          />
        </div>

        {/* text content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            We deliver super fast
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            nostrum minima eveniet velit cum quibusdam labore fugiat
            voluptatibus quos hic blanditiis ullam aspernatur minus magnam fugit
            reprehenderit sunt assumenda quam!
          </p>

          {/* the list of stuffs */}
          <div className="mt-8">
            <div className="flex mt-8 items-center space-x-6 ">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">01</p>

              <div>
                <h1 className="text-base font-extrabold sm:text-lg ">
                  Easy to use website
                </h1>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-small sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  dolorem, ullam asperiores magnam alias repellendus?
                </p>
              </div>
            </div>

            <div className="flex mt-8 items-center space-x-6 ">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">02</p>

              <div>
                <h1 className="text-base font-extrabold sm:text-lg ">
                  Fast Delivery
                </h1>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-small sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  dolorem, ullam asperiores magnam alias repellendus?
                </p>
              </div>
            </div>

            <div className="flex mt-8 items-center space-x-6 ">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">03</p>

              <div>
                <h1 className="text-base font-extrabold sm:text-lg ">
                  Delicious Food options
                </h1>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-small sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  dolorem, ullam asperiores magnam alias repellendus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
