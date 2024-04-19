import { Link } from "react-router-dom";
import switchLogo from "../../assets/images/switchLogo.png";

export const LogoImg = () => {
  return (
    <div>
      <Link to="/">
      <img src={switchLogo} alt="logo image" />
      </Link>
    </div>
  );
};
