import React from "react";
import Logo from '../Icons/logo.svg';
import Fb from '../Icons/Fb.svg';
import Twit from '../Icons/Twit.svg';
import Link from '../Icons/Link.svg';
import Ins from '../Icons/Ins.svg';

function Footer() {
  return (
    <footer className="bg-black mt-14">
      <div className="mx-auto  max-w-screen-xl p-14 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between  sm:flex sm:justify-between">

          <div className="mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="self-center w-auto h-9 text-white" />

            <div className="text-white pt-4 font-outfit text-base font-light leading-6 ">
              <span className="sm:hidden">
                Invest as a community, withdraw with trust, and repay with growth.
              </span>
              <span className="hidden sm:block">
                <div> Invest as a community, withdraw with</div>
                <div> trust, and repay with growth.</div>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-center lg:flex lg:flex-col-2 lg:gap-x-28 sm:flex sm:flex-row  sm:gap-x-20">
            <div className="mb-6 md:mb-0 md:mr-14 lg:mr-0 ">
              <h2 className="font-clash mb-6 text-xl font-semibold text-white leading-8">Explore</h2>
              <ul className="text-white font-outfit text-base font-light leading-6   "  >

                <li className="mb-4">
                  <a href="#">About</a>
                </li>
                <li className="mb-4">
                  <a href="#">Product</a>
                </li>
                <li className="mb-4">
                  <a href="#">Course</a>
                </li>
                <li className="mb-4">
                  <a href="#">Case Study</a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 ">
              <h2 className="font-clash mb-6 text-xl font-semibold text-white leading-8">Help</h2>
              <ul className="text-white font-outfit text-base font-light leading-6 ">
                <li className="mb-4">
                  <a href="#">Contact</a>
                </li>
                <li className="mb-4">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="mb-4">
                  <a href="#">Cookies</a>
                </li>
                <li className="mb-4">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <hr className="my-6 sm:mx-auto lg:my-6 border-custom-gray" />

        <div className="flex w-full flex-col items-center justify-center  md:flex-row md:justify-between">
          <span className="text-white font-outfit text-base font-light leading-6">
            © 2024 <a className="">Logo</a>. All Rights Reserved.
          </span>

          <div className="flex gap-4 sm:justify-center py-2">
            <a href="https://www.facebook.com" className="text-white">
              <img src={Fb} alt="Facebook" className="w-6 h-6 filter invert" />
            </a>
            <a href="https://www.twitter.com" className="text-white">
              <img src={Twit} alt="Twitter" className="w-6 h-6 filter invert" />
            </a>
            <a href="https://www.linkedin.com" className="text-white">
              <img src={Link} alt="LinkedIn" className="w-6 h-6 filter invert" />
            </a>
            <a href="https://www.instagram.com" className="text-white">
              <img src={Ins} alt="Instagram" className="w-6 h-6 filter invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



