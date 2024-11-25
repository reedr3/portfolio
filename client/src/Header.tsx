import Logo from "./Logo";
import NavBar from "./NavBar";

interface HeaderProps {
    setCurrentTab(tabNum: number): any;
    currentTab: number;
}

function Header({setCurrentTab, currentTab}: HeaderProps) {
    return (
        <header id="header">
          <div className="container">
            <Logo />
            <NavBar setCurrentTab={setCurrentTab} currentTab={currentTab} />
          </div>
        </header>
      );
}

export default Header;