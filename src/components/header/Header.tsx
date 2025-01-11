import { HeaderLayout } from "../layout/Layout";
import "./header.scss";
import MBTIDLogo from "../../assets/mbtidLogo.svg";
import { NavLink } from "react-router";

type MenuItemType = {
  name: string;
  path: string;
};
const MenuItem = ({ name, path }: MenuItemType) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        "menu-item body1-medium" + (isActive ? " active" : "")
      }
    >
      {name}
    </NavLink>
  );
};
const Header = () => {
  return (
    <HeaderLayout>
      <div className="header-container">
        <NavLink to="/">
          <img className="header-logo" src={MBTIDLogo} alt="MBTiD 로고" />
        </NavLink>

        <div className="menu-container">
          <MenuItem name="홈" path="/" />
          <MenuItem name="보관함" path="/rank" />
          <MenuItem name="MY" path="/event" />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
