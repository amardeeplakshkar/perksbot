/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'; 

import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';
import Heading from './Heading';


const WelcomeSlider = () =>
{
    const router = useRouter();
    const sliderRef = useRef(null);
    const [, setAnimateProgress] = useState(false);
    const [randomValue, setRandomValue] = useState(0);
    const [user, setUser] = useState(null);
    const [, setError] = useState(null);
    const [, setLoading] = useState(true);

    useEffect(() =>
    {
        const value = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
        setRandomValue(value);
    }, []);

    useEffect(() =>
    {
        if (typeof window !== 'undefined' && window.Telegram?.WebApp)
        {
            const tg = window.Telegram.WebApp;
            tg.ready();

            const initDataUnsafe = tg.initDataUnsafe || {};

            if (initDataUnsafe.user)
            {
                fetch('/api/user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(initDataUnsafe.user),
                })
                    .then((res) => res.json())
                    .then((data) =>
                    {
                        if (data.error)
                        {
                            setError(data.error);
                        } else
                        {
                            setUser(data || {});
                        }
                        setLoading(false);
                    })
                    .catch((err) =>
                    {
                        setError('Failed to fetch user data: ' + err.message);
                        setLoading(false);
                    });
            } else
            {
                setError('No user data available');
                setLoading(false);
            }
        } else
        {
            setError('This app should be opened in Telegram');
            setLoading(false);
        }
    }, []);

    const handleClaimPoints = async () =>
    {
        const end = Date.now() + 3 * 1000;
        const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];
        const frame = () =>
        {
            if (Date.now() > end) return;
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });
            requestAnimationFrame(frame);
        };
        frame();
        try
        {
            const response = await fetch('/api/claim-points', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    telegramId: user?.telegramId,
                    points: randomValue + 527,
                }),
            });

            const data = await response.json();
            if (response.ok)
            {
                toast.success(`🎉 Points claimed! You now have ${data.user.points} points.`);
                router.push("/dashboard"), 3000; // Redirect after 3 seconds
            } else
            {
                router.push("/dashboard"), 3000; // Redirect after 3 seconds
                toast.error(data.error || 'Something went wrong.');
            }
        } catch (err)
        {
            router.push("/dashboard"), 3000; // Redirect after 3 seconds
            console.error('Error claiming points:', err);
            toast.error('Failed to claim points.');
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        beforeChange: (oldIndex, newIndex) =>
        {
            setAnimateProgress(newIndex === 1);
        },
    };

    const handleNext = () =>
    {
        sliderRef.current?.slickNext();
    };

    return (
        <div className="max-w-[100dvw]  bg-black text-white bg-[url('https://i.pinimg.com/originals/cf/ec/88/cfec8819d8376a57c86e3c6e53ed618e.gif')]">
            <Slider ref={sliderRef} {...settings}>
                {/* Slide 1 */}
                <div className="flex flex-col items-center justify-center relative h-[100dvh]">
                    <div className='p-4'>
                        <Heading title='wow' desc='for X empire you got 6900' />
                    </div>
                    <div className="absolute bottom-[2rem] w-full flex justify-center items-center">
                        <button
                            onClick={handleNext}
                            className="mt-6 px-6 py-3 w-[85%] bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
                        >
                            Wow, lets go!!!
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center relative h-[100dvh]">
                <div className='p-4'>
                        <Heading title='wow' desc='for Hamster you got 800' />
                    </div>
                    <div className="absolute bottom-[2rem] w-full flex justify-center items-center">
                        <button
                            onClick={handleNext}
                            className="mt-6 px-6 py-3 w-[85%] bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
                        >
                            Wow, lets go!!!
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="flex flex-col items-center justify-center h-screen py-[1rem] relative">
                    <div className="px-2">
                        <p className='uppercase text-muted-foreground/80 text-sm'>Congratulation</p>
                        <h2 className="text-3xl font-bold my-1 uppercase">LEGEND ⭐</h2>
                        <p className="text-xl font-bold uppercase">
                            <span className="text-muted-foreground/30">You&apos;re </span>
                            a top tier <br /> player <span className="text-muted-foreground/30">in telegram <br /> mini apps</span>
                        </p>
                    </div>
                    <div className="flex justify-center bg-blend-multiply">
                        <div className="w-[9rem] h-[9rem] bg-cover bg-[url('https://res.cloudinary.com/duscymcfc/image/upload/v1731592005/paws/paws.jpg')]" />
                    </div>
                    <h1 className="text-5xl font-bold text-center mb-4">{(randomValue + 527).toLocaleString()}</h1>
                    <p className='text-center uppercase text-muted text-xs font-semibold'>total rewards</p>
                    <div className="absolute flex justify-center bottom-[2rem] w-full">
                        <button
                            onClick={
                                handleClaimPoints
                            }
                            className="mt-6 px-6 py-3 w-[85%] bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
                        >
                            Gotcha!
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default WelcomeSlider;