import React from "react";

const Tips = ({ data }) => {
    return (
        <section className="tips mt-[54px] px-[20px] md:pr-[38px] md:pl-[45px] sm:px-0">
            <div className="grid w-full grid-cols-[280px] grid-rows-[min-content_286px_286px_286px] justify-center gap-[25px]
                md:grid-cols-[330px_330px] md:grid-rows-[min-content_354px_354px] md:gap-y-[0px] md:gap-x-[25px]
                lg:grid-cols-[440px_440px] lg:grid-rows-[min-content_389px_389px] lg:md:gap-x-[30px]">
                <h1 className="text-3xl text-center9 md:col-span-2 mx-auto font-bold mb-2 sm:text-left md:ml-0 md:text-[40px] leading-[52px] lg:text-5xl max-w-[280px] md:pr-14 md:max-w-[502px] md:mb-14 xl:mb-16">
                    {data.tipsTitle}
                </h1>
                {data.tipsTextBox.map(textBox => (
                    <div key={textBox.tipsTextBoxTitle} className="tips__text-box">
                        <picture>
                            <source media="(min-width: 900px)" srcSet={textBox.tipsTextBoxImageDesktop.sourceUrl}></source>
                            <source media="(min-width: 400px)" srcSet={textBox.tipsTextBoxImageTablet.sourceUrl}></source>
                            <img src={textBox.tipsTextBoxImageMobile.sourceUrl} alt="tips" />
                        </picture>
                        <h4 className="text-base font-semibold mb-[9px] mt-3 leading-5">{textBox.tipsTextBoxTitle}</h4>
                        <p className="text-sm leading-6">{textBox.tipsTextBoxText}</p>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Tips;