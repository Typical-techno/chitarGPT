import React from "react";

function Footer() {
  return (
    <div className="px-8 py-12 bg-white space-y-4 items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 py-16 gap-5 md:gap-0">
        <div></div>
        <div className="text-left text-black w-full">
          <div className="space-y-6">
            <button className="text-5xl font-bold">
              <p className="flex items-center">
                <span>ChitraGPT</span>
              </p>
            </button>
            <div>
              <p>
                This is a user friendly Deep Fake Detection tool designed for
                efficient scanning of suspicious video/image files to find out
                any manipulation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-base  justify-center items-center flex flex-col text-black">
        <img
          src={
            "https://images.thequint.com/thequint%2F2016-01%2F5fe4b302-c270-4b8a-8c02-db7cf3ef93ed%2FMake-in-India.jpg?rect=0%2C0%2C1820%2C956"
          }
          height={100}
          width={100}
        />
        <p>
          &copy; Copyright <span className="font-bold">GPCSSI</span>. All Rights
          Reserved
        </p>
        <p>Developed with &#9829;</p>
      </div>
    </div>
  );
}
export default Footer;
