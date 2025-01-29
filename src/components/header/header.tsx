import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import HeaderNavUser from './header-nav-user';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getAuthorizationStatus } from '../../storage/slice/user-slice-catalog/user-selectors';


type HeaderProps = {
  isLoginPage? : boolean;
}

function Header({isLoginPage}: HeaderProps) {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            {!isLoginPage && <HeaderNavUser authorizationStatus = {authorizationStatus}/>}
          </nav>
        </div>
      </div>
    </header>
  );
}


export default Header;
