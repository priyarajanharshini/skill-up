import React from "react";

function Footer() {
    return (
        <footer className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-clash self-center text-3xl text-left font-semibold text-white leading-9">Logo</h3>
                        <p className="text-white pt-4 font-sans text-base font-light text-left">
                            Invest as a community, withdraw with<br /> trust, and repay with growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-28 sm:grid-cols-2">
                        <div>
                            <h2 className="font-clash mb-6 text-xl font-semibold  text-white leading-8">Explore</h2>
                            <ul className="text-white font-sans text-base font-light leading-6">
                                <li className="mb-4">
                                    <a className="">About</a>
                                </li>
                                <li className="mb-4">
                                    <a className="">Product</a>
                                </li>
                                <li className="mb-4">
                                    <a className="">Course</a>
                                </li>
                                <li className="mb-4">
                                    <a className="">Case Study</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-clash mb-6 text-xl font-semibold  text-white">Help</h2>
                            <ul className="text-white font-sans text-base font-light leading-6">
                                <li className="mb-4">
                                    <a className="">Contact</a>
                                </li>
                                <li className="mb-4">
                                    <a className="">Terms of Use</a>
                                </li>
                                <li className="mb-4">
                                    <a className="">Cookies</a>
                                </li>
                                <li className="mb-4">
                                    <a className="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto lg:my-6 border-custom-border" />

                <div className="flex w-full flex-col items-center justify-center  md:flex-row md:justify-between">
                    <span className="text-white font-sans text-base font-light leading-6">
                        © 2024 <a className="">Logo</a>. All Rights Reserved.
                    </span>

                    <div className="flex gap-4 sm:justify-center py-2">
                        <a href="#" className="text-white">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="text-white">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="text-white">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 9H2V21H6V9Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="text-white">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5932 15.1512 13.8416 15.5295C13.0901 15.9077 12.2385 16.0394 11.4078 15.9057C10.5771 15.7721 9.80977 15.3799 9.21485 14.785C8.61993 14.1901 8.22774 13.4227 8.09408 12.592C7.96042 11.7614 8.09208 10.9097 8.47034 10.1582C8.8486 9.40667 9.4542 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2649 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;