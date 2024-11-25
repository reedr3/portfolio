import Logo from "./Logo";
import NavBar from "./NavBar";

interface HeaderProps {
    setCurrentTab(tabNum: number): any;
}

function Header({setCurrentTab}: HeaderProps) {
    return (
        <header id="header">
          <div className="container">
            <Logo />
            <NavBar setCurrentTab={setCurrentTab}/>
          </div>
        </header>
      );
}

export default Header;