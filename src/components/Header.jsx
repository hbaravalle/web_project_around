import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo de Around The U.S." />
    </header>
  );
}

export default Header;
