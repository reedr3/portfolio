import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.tsx';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  function handleCurrentTabUpdate(newCurrentTab: number) {
    setCurrentTab(newCurrentTab);
  }

  return (
    <>
      <Header setCurrentTab={handleCurrentTabUpdate}/>
      <div>hello world {currentTab}</div>
      <Footer/>
    </>
  );
}

export default App;
