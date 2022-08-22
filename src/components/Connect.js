import React from "react";

const Connect = ({ data }) => {

    return (

        <section className="connect mt-24 sm:px-5 md:px-10 lg:px-0 flex flex-col items-center">
            <div className="connect__text text-center order-1 self-start flex flex-col md:w-full sm:text-left lg:flex-row">
                <h1 className="connect__title text-[28px] px-10  leading-9 font-bold mb-7 xl:mr-[83px] md:text-[40px] sm:text-[40px] sm:px-0 sm:leading-[52px] xl:text-5xl xl:leading-[60px]">
                    {data.connectTitle}
                </h1>
                <p className="connect__description small-text md:pr-[7.6rem] lg:pr-0 xl:max-w-[390px] lg:text-justify">
                    {data.smallText}
                </p>
            </div>
            <div className="connect__dashboard flex justify-center mt-6  order-2 md:order-last lg:order-2 lg:mt-[72px] md:mt-9">
                <picture>
                    <source media="(min-width: 900px)" srcSet={data.connectImageDesktop.sourceUrl}></source>
                    <source media="(min-width: 400px)" srcSet={data.connectImageTablet.sourceUrl}></source>
                    <img src={data.connectImageMobile.sourceUrl} alt="dashboard" />
                </picture>
            </div>

            <div className="connect__text-box mt-[23.38px] px-[3.47px] md:px-0 order-3 grid gap-x-2.5 md:order-2 lg:order-last sm:gap-x-5 grid-cols-1 sm:grid-cols-3  md:mt-6 lg:mt-14">

                {
                    data.textBox.map(textBox => (

                        <div key={textBox.textBoxTitle} className="text-box pl-6 pr-5 pt-4 pb-5 md:pt-5 lg:pt-4">
                            <h2 className=" text-box__title lg:text-[2rem] text-[24px] leading-8 lg:leading-10 font-bold">
                                {textBox.textBoxTitle}
                            </h2>

                            <h4 className="text-base font-semibold mb-[9px] mt-3 leading-5">
                                {textBox.textBoxSubTitle}
                            </h4>
                            <p className="text-sm leading-6"> {textBox.textBoxText}</p>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Connect;