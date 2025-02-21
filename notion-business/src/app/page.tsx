"use client";

import {useEffect} from 'react'
import Image from "next/image";
import AnimationOnScroll from "./components/animationOnScroll";
import SectionHeadingOrange from "./components/headings/headingOrange";

// Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const removeClassesFromImage = (img: HTMLImageElement, removeClasses: string[]) => {  
  removeClasses.forEach((value: string) => {
        img.classList.remove(value);
    });
  };
  
const HomePage = () => {

  // Pics
  const leavesPic:string = "/pencil.png";
  const motherPic:string = "/Designer.png";
  const carerDoorPic:string = "/collab.jpg";
  const carerKneelingPic:string = "/notion.jpg";

  useEffect(() => {
    }, []);

    return (
        <>
            {/* Landing Hero */}
            <section className="relative h-[calc(100svh-60px)] py-10 z-0">
                {/* Tree */}
                <div className="absolute -top-10 w-7/12 md:w-6/12 lg:-top-40 right-0 lg:w-[50vw] h-auto z-20">
                    <Image
                        className="brightness-125 transition-all duration-1000 opacity-0 translate-x-6"
                        src={leavesPic}
                        alt="Autumn Leaves"
                        priority
                        width={900}
                        height={200}
                        unoptimized
                        onLoad={(img) => {
                            removeClassesFromImage(img.currentTarget, [
                                "opacity-0",
                                "translate-x-6",
                            ]);
                        }}
                        placeholder="empty"
                    />
                </div>

                {/* Hero */}
                <div className="container p-0 bg-cyan-600 mx-auto h-full z-10 overflow-hidden">
                    {/* Flex Columns - 2 rows */}
                    <div className="h-full flex flex-col">
                        {/* --- Top row --- */}
                        <div className="flex flex-row md:shrink basis-0">
                            {/* Company Name */}
                            <div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row font-sans pt-2 lg:pt-10 ">
                                {/* Logo */}


                                {/* Flexbox break line on mobile*/}
                                <div className="basis-[100%] h-10"></div>

                                {/* Coloured letters */}
                                <div className="transition-all duration-200 flex-col ml-4 basis-full md:basis-0 space-y-4 lg:space-y-8 text-xl md:shrink md:text-5xl text-white text-spacing-4 tracking-[1rem] lg:tracking-[2rem]">
                                    <div>
                                        <span className="text-orange-400 animate-fadeIn1" data-animate="ocr" data-animate-id="1">D</span>
                                        <span className=' animate-fadeIn4' data-animate="ocr-text" >ALE</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400  animate-fadeIn2" data-animate="ocr" data-animate-id="2" >M</span>
                                        <span className=' animate-fadeIn4' data-animate="ocr-text">ORGAN</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400  animate-fadeIn3" data-animate="ocr" data-animate-id="3" >D</span>
                                        <span className=' animate-fadeIn4' data-animate="ocr-text">ESIGNS</span>
                                    </div>
                                </div>

                                <div className="basis-[100%] h-10"></div>
                            </div>

                            {/* Empty space to avoid tree on desktop*/}
                            <div className=" hidden lg:flex-auto"></div>
                        </div>

                        {/* --- Bottom row --- */}
                        <div className="flex lg:flex-row flex-col-reverse flex-grow">
                            {/* Image */}
                            <div className="relative flex-grow items-end flex flex-row lg:flex-shrink-0">
                                <Image
                                    className="bottom-0 left-0 transition-all duration-1000 opacity-0 -translate-x-6"
                                    src={motherPic}
                                    alt="Caring for parent"
                                    priority
                                    unoptimized
                                    width={600}
                                    height={100}
                                    placeholder="empty"
                                    onLoad={(img) => {
                                        removeClassesFromImage(img.currentTarget, [
                                            "opacity-0",
                                            "-translate-x-6",
                                        ]);
                                    }}
                                />
                            </div>

                            {/* Subtext */}
                            <div className="animate-fadeIn5 lg:grow flex-auto flex flex-col items-end justify-end mr-10 lg:mr-20 lg:mb-20 font-serif text-lg lg:text-2xl text-white lg:min-w-[200px]">
                                <div>Helping small businesses</div>
                                <u className="underline underline-offset-8 decoration-orange-400">
                                    get {" "}
                                    <span className="font-bold text-orange-400">organised</span>
                                </u>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company description */}
            <SectionHeadingOrange>
                <AnimationOnScroll
                    classNameInView="transition-opacity ease-in duration-300 opacity-100"
                    classNameNotInView="transition-opacity ease-in duration-300 opacity-0"
                    triggerThreshold={0.1}
                >
                    <p className="font-sans text-black text-justify ">
                        Streamline your small business with our tailored tech solutions. 
                        We help you get organized, boost efficiency, and free up your time to focus on what matters most – growing your business.
                    </p>
                </AnimationOnScroll>                
            </SectionHeadingOrange>

            {/* Call to actions */}
            <section>
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-20">
                    <div className="relative lg:w-6/12">
                        <AnimationOnScroll
                            classNameInView="transition-all ease-in duration-300 opacity-100"
                            classNameNotInView="transition-all ease-in duration-300 opacity-0"
                            triggerThreshold={0.1}>

                            <Image
                                src={carerDoorPic}
                                alt="Care Worker standing in front of door"
                                width={1500}
                                height={1500}
                                unoptimized
                                />
                        </AnimationOnScroll>
                    </div>
                    <div className="lg:w-6/12 flex flex-col justify-center justify-items-center mt-8 pl-10 pr-10 lg:pr-20 text-left">
                         <AnimationOnScroll
                            classNameInView="transition-opacity ease-in duration-300 opacity-100"
                            classNameNotInView="transition-opacity ease-in duration-300 opacity-0"
                            triggerThreshold={0.1}>

                            <h3 className="font-serif font-semibold text-xl mb-4 text-center">
                              Get Organised, Get Growing
                            </h3>
                            <p className="font-sans text-justify text-base">
                              Your business is unique, and so are your challenges. 
                              We offer hands-on support to understand your current workflow and tailor our tech solutions for maximum impact.
                            </p>
                            <div className="flex flex-row justify-center mt-4"></div>
                        </AnimationOnScroll>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-0">
                    <div className="lg:w-6/12 flex flex-col justify-center justify-items-center pr-10 pl-10 lg:pl-20">

                        <AnimationOnScroll
                            classNameInView="transition-opacity ease-in duration-700 opacity-100"
                            classNameNotInView="transition-opacity ease-in duration-700 opacity-0"
                            triggerThreshold={0.1}>

                            <h3 className="mt-8 font-serif font-semibold text-xl mb-4 text-center">
                              Streamline Your Business with Notion
                            </h3>
                            <p className="text-base text-justify font-sans">
                              From project management and CRM to knowledge bases and internal wikis, 
                              we harness the flexibility of Notion to design custom solutions that perfectly fit your small business needs
                            </p>
                            <div className="flex flex-row justify-center mt-4">
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="relative lg:w-6/12">
                        <AnimationOnScroll
                            classNameInView="transition-all ease-in duration-300 opacity-100"
                            classNameNotInView="transition-all ease-in duration-300 opacity-0"
                            triggerThreshold={0.1}>

                            <Image
                                src={carerKneelingPic}
                                alt="Careworker holding hands with elderly resident"
                                width={1500}
                                height={1500}
                                unoptimized
                                />
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>

            {/* Company History */}
            <div className="mt-10">
                <SectionHeadingOrange>
                    <AnimationOnScroll
                        classNameInView="transition-opacity ease-in duration-700 opacity-100"
                        classNameNotInView="transition-opacity ease-in duration-700 opacity-0"
                        triggerThreshold={0.1}>
                        <p className="lg:px-20 lg:py-10 text-base font-sans text-black text text-justify">
                          With expertise in software development and finance allows us to provide comprehensive support for your business. 
                          We can help you develop custom software solutions, improve financial reporting, and streamline workflows.
                          We can provide a direct, hands-on approach to businesses in the UK. Get in touch to find out if we can help you
                        </p>
                    </AnimationOnScroll>
                </SectionHeadingOrange>
            </div>
        </>
    );
};
export default HomePage;
