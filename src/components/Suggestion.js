import React from "react";

const Suggestion = ({ data }) => {


    return (
        <section className="suggestion mt-[72.5px] md:mt-[80.5px] lg:mt-[100px] md:px-[63px] lg:px-[230px]">
            <div className="grid w-full grid-cols-[280px] justify-center gap-[64px]
                md:grid-cols-2 md:grid-rows-[min-content_max-content_max-content] md:gap-x-[64px] md:gap-y-[0px]
                lg:grid-cols-2 lg:grid-rows-[min-content_max-content_max-content] lg:gap-x-[136px]">
                <h1 className="text-3xl text-center tracking-[0.2px] md:col-span-2 mx-auto font-bold mb-[-9px] px-5 sm:text-left md:ml-0 md:text-[40px] leading-[52px] lg:text-5xl max-w-[280px] md:pl-0  md:max-w-[522px] md:mb-[72px] xl:mb-[81px]">
                    {data.suggestionTitle}
                </h1>

                {data.suggestionTextBox.map((textBox, index) => (
                    <div key={index} className={`suggestion__text-box  ${index % 2 !== 0 ? 'md:pt-[72px] lg:pt-[135px]' : ''} flex flex-col items-center justify-start text-center min-h -[405px] sm:text-left`}>
                        <picture>
                            <source media="(min-width: 768px)" srcSet={textBox.suggestionTextBoxImageDesktop.sourceUrl}></source>
                            <source media="(min-width: 640px)" srcSet={textBox.suggestionTextBoxImageTablet.sourceUrl}></source>
                            <img src={textBox.suggestionTextBoxImageMobile.sourceUrl} alt="suggestion" />
                        </picture>
                        <div>
                            <h4 className="text-[22px] leading-8 mb-3.5 mt-8 font-semibold md:mb-3 lg:text-[24px] lg:mb-4">
                                {textBox.suggestionTextBoxTitle}
                            </h4>
                            <p className="text-sm sm:text-base mx-5 leading-6 sm:mx-0 sm:leading-7 sm:max-w-[266px] lg:max-w-[346px] sm:self-start">
                                {textBox.suggestionTextBoxText}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Suggestion;