import AboutUsSection from "./AboutUsSection/AboutUsSection.js";
import GallerySecion from "./GallerySection/GallerySecion.js";
import HeroSection from "./HeroSection/HeroSection.js";
import ReliefGoodsSection from "./ReliefGoodsSection/ReliefGoodsSection.js";
import TestimonialSection from "./TestimonialSection/TestimonialSection.js";
const Home = () => {
  return (
    <>
      <HeroSection />
      <ReliefGoodsSection />
      <TestimonialSection />
      <GallerySecion />
      <AboutUsSection />
    </>
  );
};

export default Home;
