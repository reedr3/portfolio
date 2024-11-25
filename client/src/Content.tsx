import About from "./content/About";

interface ContentProps {
    currentTab: number;
}

function Content({currentTab}: ContentProps) {
    return (
        <main id="content">
          <div className="container">
            <About/>
          </div>
        </main>
      );
}

export default Content;