import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <nav className="navTop">
        <div className="navTop__inner container">
          <div className="linksAbroad">
            <a href="https://tap.az/">Tap.az</a>
            <a href="https://bina.az/">Bina.az</a>
            <a href="https://boss.az/">Boss.az</a>
          </div>
          <div className="linkInside">
            <div className="numberLink">
              <p>Dəstək:</p>
              <Link to="#">
                <pre>(012) 599-08-01; (012) 505-77-55</pre>{" "}
              </Link>
            </div>
            <div className="settings">
              <Link className="yardim" to="/yardim">
                Yardım
              </Link>
              <Link className="ru" to="/ru">
                RU
              </Link>
              <Link className="secilmisler" to="/secilmisler">
                Seçilmişlər
              </Link>
              <Link className="maingiris" to="/maingiris">
                Giriş
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navBottom">
        <div className="navBottom_inner container">
          <div className="links">
            <Link className="homeLink" to="/">
              <img src="/assets/Header/logo-turbo.az logo.svg" alt="" />
            </Link>
            <Link className="contacts" to="/contacts">
              Bütün elanlar
            </Link>
            <Link className="autosalons" to="/autosalons">
              Avtosalonlar
            </Link>
            <Link className="contacts" to="#">
              Ehtiyat hisseler ve aksesuarlar
            </Link>
          </div>
          <Link to="/newelan">
            <button className="newAdBtn">Yeni elan</button></Link>
        </div>
      </nav>
    </div>
  );
}
