interface NavBarProps {
    setCurrentTab(tabNum: number): any;
    currentTab: number;
}

function NavBar({setCurrentTab, currentTab} : NavBarProps) {
    function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        let tabId = parseInt(e.currentTarget.id);
        setCurrentTab(tabId);
    }

    function isCurrentTab(tabId: number) {
        if(tabId == currentTab) {
            return ("current-category");
        }
        else {
            return ("not-current-category");
        }
    }

    let tabsList = [
        {
            id: 0,
            title: "About"
        },
        {
            id: 1,
            title: "Experience"
        },
        {
            id: 2,
            title: "Projects"
        },
        {
            id: 3,
            title: "Teaching"
        },
        {
            id: 4,
            title: "Publications"
        },
        {
            id: 5,
            title: "Hobbies"
        },
        {
            id: 6,
            title: "Contact"
        },
    ]

    return (
        <div>
            <nav id="nav">
                <ul>
                    {tabsList.map(function(tab) {
                        return <li key={tab.id.toString()}> <a id={tab.id.toString()} className={isCurrentTab(tab.id)} onClick={(e) => {handleClick(e)}}> {tab.title} </a> </li>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;