import React from "react";
import Logo from "../assets/img/logo.svg";
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white pb-4">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-8 mb-7">
          <a className="mb-6 lg:mb-0" href="#">
            <img src={Logo} alt="" />
          </a>
          <div className="flex gap-x-4">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition"
                  key={index}
                >
                  <a href="">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center pb-4">
          <p className="flex flex-col justify-center sm:flex-row">
            <span>&copy; Luxture 2025 - All rights reserved.{" "}</span>
            <span>
              Made with ❤️ by{" "}
              <a
                className="text-sky-300 font-semibold underline hover:no-underline transition-all"
                href="https://pulkitkrverma.tech"
                target="_blank"
              >
                Pulkit Kumar Verma
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
