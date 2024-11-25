interface NavBarProps {
    setCurrentTab(tabNum: number): any;
}

function NavBar({setCurrentTab} : NavBarProps) {
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        let tabId = parseInt(e.currentTarget.id);
        setCurrentTab(tabId);
    }

    return (
        <div>
            <button id="0" onClick={(e) => {handleClick(e)}}>About</button>
            <button id="1" onClick={(e) => {handleClick(e)}}>Experience</button>
            <button id="2" onClick={(e) => {handleClick(e)}}>Projects</button>
            <button id="3" onClick={(e) => {handleClick(e)}}>Teaching</button>
            <button id="4" onClick={(e) => {handleClick(e)}}>Publications</button>
            <button id="5" onClick={(e) => {handleClick(e)}}>Hobbies</button>
            <button id="6" onClick={(e) => {handleClick(e)}}>Contact</button>
        </div>
    )
}

export default NavBar;