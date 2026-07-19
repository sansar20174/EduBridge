import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularCourses from "../components/PopularCourses";
import LearningJourney from "../components/LearningJourney";
import Mentors from "../components/Mentors";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Features />
      <PopularCourses />
      <LearningJourney />
      <Mentors />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;