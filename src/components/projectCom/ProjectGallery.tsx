"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

import Image from "next/image";

const ProjectGallery = ({ images } : {images: string[]}) => {
  return (
    <div className="App">
      <LightGallery elementClassNames="custom-wrapper-class" selector="[data-gallery]">
        {images.length === 4 && <p className=" text-center text-3xl my-3">Desktop View</p> }
        <div className=" flex flex-col gap-5">
          {images.map((imageUrl: string, index: number) => (
            <>
              {index < 2 && imageUrl !== "" && (
                <Image
                  key={index}
                  alt="Project image"
                  src={imageUrl}
                  width={1000}
                  height={500}
                  className=" rounded-lg border border-white"
                  data-gallery
                />
              )}
            </>
          ))}
          <p className=" text-center text-3xl my-3">Mobile View</p>
          <div className=" grid sm:grid-cols-2 gap-6 justify-center mx-auto">
            {images.map((imageUrl: string, index: number) => (
              <>
                {index > 1 && (
                  <Image
                    key={index}
                    alt="Project image"
                    src={imageUrl}
                    width={250}
                    height={400}
                    className=" rounded-lg"
                    data-gallery
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </LightGallery>
    </div>
  );
};

export default ProjectGallery;
