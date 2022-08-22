import React from "react";
import { graphql } from 'gatsby';
import { getBlockData } from '../utils/getBlockData'
import Hero from "../components/Hero";
import Connect from "../components/Connect";
import Suggestion from "../components/Suggestion";
import Tips from "../components/Tips";
import Slider from "../components/Slider";
import { haveValue } from '../utils/checkHaveValue'
import Contact from "../components/Contact";

export default function Home({ data }) {

  const hero = getBlockData(data.wpPage.blocks, 'hero');
  const connect = getBlockData(data.wpPage.blocks, 'connect');
  const tips = getBlockData(data.wpPage.blocks, 'tips');
  const suggestion = getBlockData(data.wpPage.blocks, 'suggestion');
  const slider = getBlockData(data.wpPage.blocks, 'slider');
  return <main>
    {haveValue(hero) && <Hero data={hero} />}
    {haveValue(connect) && <Connect data={connect} />}
    {haveValue(tips) && <Tips data={tips} />}
    {haveValue(suggestion) && <Suggestion data={suggestion} />}
    {haveValue(slider) && <Slider data={slider} />}
    <Contact />
  </main>
}


export const query = graphql`
  query {
    wpPage(databaseId: {eq: 15}) {
      id
      blocks {
        ... on WpAcfHeroBlock {
          hero {
            heroTitle
            subTitle
            text
            heroImageDesktop {
              sourceUrl
            }
            heroImageMobile {
              sourceUrl
              uri
            }
            buttonText
            formAction
          }
        }
        ... on WpAcfConnectBlock {
          connect {
            connectImageDesktop {
              sourceUrl
            }
            connectImageMobile {
              sourceUrl
            }
            connectImageTablet {
              sourceUrl
            }
            smallText
            textBox {
              textBoxSubTitle
              textBoxText
              textBoxTitle
            }
            connectTitle
          }
        }
        ... on WpAcfTipsBlock {
          tips {
            tipsTextBox {
              tipsTextBoxImageDesktop {
                sourceUrl
              }
              tipsTextBoxImageMobile {
                sourceUrl
              }
              tipsTextBoxImageTablet {
                sourceUrl
              }
              tipsTextBoxText
              tipsTextBoxTitle
            }
            tipsTitle
          }
        }
        ... on WpAcfSuggestionBlock {
          suggestion {
            suggestionTextBox {
              suggestionTextBoxImageDesktop {
                sourceUrl
              }
              suggestionTextBoxImageMobile {
                sourceUrl
              }
              suggestionTextBoxImageTablet {
                sourceUrl
              }
              suggestionTextBoxText
              suggestionTextBoxTitle
            }
            suggestionTitle
          }
        }
        ... on WpAcfSliderBlock {
          slider {
            sliderImage1Desktop {
              sourceUrl
            }
            sliderImage1Mobile {
              sourceUrl
            }
            sliderImage1Tablet {
              sourceUrl
            }
            sliderImage2Desktop {
              sourceUrl
            }
            sliderImage2Mobile {
              sourceUrl
            }
            sliderImage2Tablet {
              sourceUrl
            }
            sliderImage4Desktop {
              sourceUrl
            }
            sliderImage4Mobile {
              sourceUrl
            }
            sliderImage4Tablet {
              sourceUrl
            }
            sliderIphoneImageDesktop {
              sourceUrl
            }
            sliderIphoneImageMobile {
              sourceUrl
            }
            sliderIphoneImageTablet {
              sourceUrl
            }
            sliderText
            sliderTitle
            sliderLink {
              target
              title
              url
            }
            sliderImage1Mobile {
              sourceUrl
            }
            sliderImage3Mobile {
              sourceUrl
            }
            sliderImage3Tablet {
              sourceUrl
            }
            sliderImage3Desktop {
              sourceUrl
            }
          }
        }
      }
    }
  }
`
