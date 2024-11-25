import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.tsx';
import Footer from './Footer.tsx';

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  function handleCurrentTabUpdate(newCurrentTab: number) {
    setCurrentTab(newCurrentTab);
  }

  return (
    <>
      <Footer/>
      <div>
        <NavBar setCurrentTab={handleCurrentTabUpdate}/>
      </div>
      <div>hello world {currentTab}</div>
    </>
  );
}

export default App;
