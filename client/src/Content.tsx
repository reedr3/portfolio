interface ContentProps {
    currentTab: number;
}

function Content({currentTab}: ContentProps) {
    return (
        <main id="content">
          <div className="container">
            <div>hello world {currentTab}</div>
          </div>
        </main>
      );
}

export default Content;