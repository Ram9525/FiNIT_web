import React, { useEffect } from 'react';
import './Events.css';
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const Event = () => {
    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        let isThrottled = false;

        const throttle = (func, delay) => {
            if (isThrottled) return;
            isThrottled = true;
            func();
            setTimeout(() => {
                isThrottled = false;
            }, delay);
        };

        const handleNext = () => {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        };

        const handlePrev = () => {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        };

        // Attach throttled event listeners
        next.addEventListener('click', () => throttle(handleNext, 500));
        prev.addEventListener('click', () => throttle(handlePrev, 500));

        // Cleanup event listeners on component unmount
        return () => {
            next.removeEventListener('click', () => throttle(handleNext, 500));
            prev.removeEventListener('click', () => throttle(handlePrev, 500));
        };
    }, []); 

    return (
        <>
            <section>
                <div className="flex flex-col items-center overflow-hidden py-20 bg-black">
                    <h2 className="text-center text-green-400 text-4xl font-bold mb-6">EVENTS</h2>
                    <div className="flex items-center justify-center w-full mb-10">
                        <hr className="w-1/3 border-t border-gray-300" />
                        <span className="mx-4 text-gray-500">***</span>
                        <hr className="w-1/3 border-t border-gray-300" />
                    </div>
                    <div className="container-box">
                        <div className="slide">
                            <div className="item">
                                <div className="content">
                                    <div className="name">Switzerland</div>
                                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                    <button>See More</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="name">Finland</div>
                                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                    <button>See More</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="name">Iceland</div>
                                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                    <button>See More</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="name">Australia</div>
                                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                    <button>See More</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="name">Netherlands</div>
                                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                    <button>See More</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="name">Ireland</div>
                                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                    <button>See More</button>
                                </div>
                            </div>
                        </div>

                        <div className="button">
                            <button className="prev font-extrabold text-white text-4xl"><HiArrowSmLeft /></button>
                            <button className="next font-extrabold text-white text-4xl"><HiArrowSmRight /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;
