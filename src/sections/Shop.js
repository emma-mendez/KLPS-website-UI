import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { motion } from "framer-motion";

import img1 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archFirstUnderwear.webp";
import img2 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archTeenager.webp";
import img3 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archCollegeAge.webp";
import img4 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archYoungAdult.webp";
import img5 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archYoungParents.webp";
import img6 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archFathers.webp";
import img7 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archNaturalFibres.webp";
import img8 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archSexy.webp";
import img9 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archGrownWoman.webp";
import img10 from "/Users/emmamendez/Source/Klippies/KLPS Website/wibe-studio-product-files/src/assets/Images/archLeavingRoom.png";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,

          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Explore
      </Title>
      <Left>
        <p>
          Imagine a space where every choice, every preference,
          and every opinion you share shapes the future of comfort and wellness.
          The KLPS platform invites you to go beyond simple feedback;
          you’ll be part of an interactive journey that adapts and responds to your unique perspective.
          Through our intelligent, conversational model,
          you’ll experience a fully personalised exploration—one that
          remembers what you care about and grows along with you.
          Every interaction you have with KLPS adds to a larger vision,
          one that ultimately reflects what you and others value most.
          <br />
          <br />
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="First Underwear" />
        <Product img={img2} title="Teenager" />
        <Product img={img3} title="College Age" />
        <Product img={img4} title="Young Adult" />
        <Product img={img5} title="Young Parents" />
        <Product img={img6} title="Fathers Raising Girls" />
        <Product img={img7} title="Natural Fibres" />
        <Product img={img8} title="Sexy" />
        <Product img={img9} title="Grown Women" />
        <Product img={img10} title="Counselling with ChatGPT" />
      </Right>
    </Section>
  );
};

export default Shop;
