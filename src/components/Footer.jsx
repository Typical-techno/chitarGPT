import React from "react";
import { socialLink } from "../data/footer";

function Footer() {
  return (
    <div className="px-8 py-12 bg-white space-y-4 items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 py-16 gap-5 md:gap-0">
        <div></div>
        <div className="text-left text-black w-full">
          <div className="space-y-6">
              <button className="text-5xl font-bold">
                <p className="flex items-center">
                  <span>Chitargupt</span>
                </p>
              </button>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                maiores minus eaque sequi, quo voluptas harum totam nostrum et
                eveniet dignissimos suscipit ullam id cum.
              </p>
            </div>
            <div className="flex items-center text-black">
              {socialLink.map((items, index) => (
                <div key={index} className="flex flex-row">
                  <a href={`${items.link}`}>
                    <button className="px-2">
                      <p className="text-3xl text-black">
                        <i className={`fi ${items.icon}`}></i>
                      </p>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-base text-black">
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
