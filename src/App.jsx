import Nav from "./components/nav";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Blog from "./components/blog";
const App = () => {
  return (
    <>
      <div className="container">
        <div id="home" className="heading">
          <Nav />
          <Hero />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="skills">
          <Skills />
        </div>
        <div id="skills">
          <Blog />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
