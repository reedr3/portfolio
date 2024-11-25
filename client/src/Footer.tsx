import Icon from "./Icon";

interface FooterProps {
    setCurrentTab(tabNum: number): any;
}

function Footer() {
    return (
        <footer id="footer">
        <div className="container">
          <div id="icons">
            <Icon href="https://www.linkedin.com/in/ryker-reed/" className="fa fa-linkedin"/>
            <Icon href="https://github.com/reedr3" className="fa fa-github"/>
            <Icon href="https://www.facebook.com/rebecca.reed.5667" className="fa fa-facebook"/>
          </div>
          <p>Copyright &copy; 2024 Ryker Reed</p>
        </div>
      </footer>
    );
}

export default Footer;