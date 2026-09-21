import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
