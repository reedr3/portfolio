import { NavBarProps } from './App';

function NavBar({setCurrentTab} : NavBarProps) {
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // let tabId = parseInt(e.target.name);
        e.preventDefault();
        console.log("I was clicked");
        setCurrentTab(0);
    }

    return (
        <button name="0" onClick={(e) => {handleClick(e)}}>About</button>
    )
}

export default NavBar;