import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperProp, displyTotalSLide, beforeInit } from '../utils/swiperConfig'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Slider = ({ data }) => {

    console.log(data)
    return (
        < section className="track-health mt-[81px] md:mt-[80px] md:pl-[57px] xl:pl-0" >
            <div
                className="relative flex flex-col items-center overflow-x-hidden pl-[18px] pr-[22px] md:px-0 lg:pt-[96px] lg:pb-[100px] lg:flex-row">
                <div
                    className="track-health__text flex flex-col xl:max-w-[353px] text-center items-center md:mr-[160px] md:ml-[161px] lg:ml-[150px] lg:mr-[108px] lg:text-left lg:items-start">

                    <div className="track-health__stick w-7 h-[5px]"></div>
                    <h1 className="track-health__title leading-9 px-7 md:px-0 tracking-[0.2px] text-[20px] mb-[18px] mt-[26px] font-bold md:text-[40px] md:leading-[52px]">
                        {data.sliderTitle}
                    </h1>
                    <p className="track-health__description small-text px-1">
                        {data.sliderText}
                    </p>
                    <a href={data.sliderLink.url} target={data.sliderLink.target}
                        className="button-link mt-7 text-sm font-bold leading-5">{data.sliderLink.title} <AiOutlineArrowRight /></a>
                </div>
                <div
                    className="slider-container flex items-center overflow-hidden relative pl-[133px] w-[256px] ml-[64px] md:ml-0 h-[515px] md:w-[711px] md:h-[561px]  xl:w-[829px] xl:max-w-[829px] xl:h-[638px] md:pl-[26px] md:pr-[43.28px] lg:pl-[5px] lg:pr-[57px]">
                    <div className="absolute phone w-[212px] h-[426px] md:w-[231px] md:h-[464px] xl:w-[262px] xl:h-[527px]">
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={data.sliderIphoneImageDesktop.sourceUrl}></source>
                            <source media="(min-width: 768px)" srcSet={data.sliderIphoneImageTablet.sourceUrl}></source>
                            <img src={data.sliderIphoneImageMobile.sourceUrl} alt="iphone" />
                        </picture>
                    </div>
                    <Swiper className="w-[390px] md:ml-0 md:w-[646px] xl:w-[825px]" {...SwiperProp} onBeforeInit={beforeInit} onSlideChange={displyTotalSLide}>
                        <SwiperSlide>
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={data.sliderImage1Desktop.sourceUrl}></source>
                                <source media="(min-width: 768px)" srcSet={data.sliderImage1Tablet.sourceUrl}></source>
                                <img src={data.sliderImage1Mobile.sourceUrl} alt="slider 1" />
                            </picture>
                        </SwiperSlide>
                        <SwiperSlide>
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={data.sliderImage2Desktop.sourceUrl}></source>
                                <source media="(min-width: 768px)" srcSet={data.sliderImage2Tablet.sourceUrl}></source>
                                <img src={data.sliderImage2Mobile.sourceUrl} alt="slider 2" />
                            </picture>
                        </SwiperSlide>
                        <SwiperSlide>
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={data.sliderImage3Desktop.sourceUrl}></source>
                                <source media="(min-width: 768px)" srcSet={data.sliderImage3Tablet.sourceUrl}></source>
                                <img src={data.sliderImage3Mobile.sourceUrl} alt="slider 3" />
                            </picture>
                        </SwiperSlide>
                        <SwiperSlide>
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={data.sliderImage4Desktop.sourceUrl}></source>
                                <source media="(min-width: 768px)" srcSet={data.sliderImage4Tablet.sourceUrl}></source>
                                <img src={data.sliderImage4Mobile.sourceUrl} alt="slider 4" />
                            </picture>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div
                    className="flex lg:absolute lg:bottom-[20px] lg:left-[50%] xl:left-[150px] xl:bottom-[175px] flex-col md:flex-row-reverse md:max-w-[270px] justify-center grow-0 max-w-[134px] mt-[37px]">
                    <div id="totalSlide" className="text-center flex items-center text-base font-semibold leading-5 ml-[46px]">1/4
                        screens</div>
                    <div className="flex mt-2">
                        <div className="swiper-button-prevs mr-6 cursor-pointer"><AiOutlineArrowLeft /></div>
                        <div className="swiper-button-nexts cursor-pointer"><AiOutlineArrowRight /></div>
                    </div>
                </div>
            </div>
        </section >



    )
}

export default Slider;