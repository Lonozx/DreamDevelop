import "./Header.css";
import "./Font.css";
import logo from "./images/logo.png";
import wa from "./images/wa.png";
import ins from "./images/ins.png";
import fb from "./images/fb.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logoside">
          <div className="left">
            <img className="logo" src={logo} alt="Logo" />
            <p className="roboto-bold h3"> We work alongside your dreams</p>
          </div>
          <div className="right">
            <button className="roboto-regular contactB h3">Take a break</button>
            <div className="socials">
              <p className="roboto-regular">You can easily find us here</p>
              <div className="icons">
                <a href="facebook.com" className="socials_icon">
                  <img src={fb} alt="fb" />
                </a>
                <a href="facebook.com" className="socials_icon">
                  <img src={wa} alt="wa" />
                </a>
                <a href="facebook.com" className="socials_icon">
                  <img src={ins} alt="ins" />
                </a>
              </div>
            </div>
            <div className="contacts">
              <span className="roboto-regular"> Пн-Пт: 9:00 - 18:00</span>
              <span className="roboto-bold h3">+7 (999) 999-99-99</span>
              <span className="roboto-regular">Call us if you can :D</span>
            </div>
          </div>
        </div>

        <ul className="menu">
          <li className="roboto-regular">
            <a href="#">Menu point</a>
          </li>
          <li className="roboto-regular">
            <a href="#">Menu point</a>
          </li>
          <li className="roboto-regular">
            <a href="#">Menu point</a>
          </li>
          <li className="roboto-regular">
            <a href="#">Menu point</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
