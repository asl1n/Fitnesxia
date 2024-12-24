import Navbar from "./components/Navbar";
import Herosection from "./Sections/Herosection";
import Partners from "./Sections/Partners";
import Trial from "./Sections/Trial";
import Programs from "./Sections/Features/Programs";
import Service from "./Sections/Features/Service";
import Prices from "./Sections/Prices";
import Review from "./Sections/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Partners />
      <Trial />
      <Programs />
      <Service />
      <Prices />
      <Review />
      <Footer />
    </>
  );
}

export default App;
