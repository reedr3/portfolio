import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.tsx';

export interface NavBarProps {
  setCurrentTab(tabNum: number): any;
};

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div>
        <NavBar setCurrentTab={() => {setCurrentTab}}/>
      </div>
      <div>hello world</div>
    </>
  );
}

export default App;
