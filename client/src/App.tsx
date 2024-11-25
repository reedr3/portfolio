import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.tsx';

export interface NavBarProps {
  setCurrentTab(tabNum: number): any;
};

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  function handleCurrentTabUpdate(newCurrentTab: number) {
    setCurrentTab(newCurrentTab);
  }

  return (
    <>
      <div>
        <NavBar setCurrentTab={handleCurrentTabUpdate}/>
      </div>
      <div>hello world {currentTab}</div>
    </>
  );
}

export default App;
