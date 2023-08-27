import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/auth.slice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {
    user,
    _signIn: { isLoading },
  } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!isLoading && !user) {
      history.push("/signin");
    }
  }, [user]);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="sidebar">
        <div className="brand-logo">
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/0sMXWD1/android-chrome-192x192.png"
              alt=""
            />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to={"/"} title="Home">
                <span>
                  <i className="icofont-ui-home"></i>
                </span>
              </Link>
            </li>
            {/* <li><Link to={"/trade"} title="Trade">
                            <span><i className="icofont-stack-exchange"></i></span>
                        </Link>
                        </li>
                        <li><Link to={"/wallet"} title="Wallet">
                            <span><i className="icofont-wallet"></i></span>
                        </Link>
                        </li>
                        <li><Link to={"/price"} title="Price">
                            <span><i className="icofont-price"></i></span>
                        </Link>
                        </li> */}
            <li>
              <Link to={"/settings-profile"} title="Settings">
                <span>
                  <i className="icofont-ui-settings"></i>
                </span>
              </Link>
            </li>
            {/* <li className="logout">
              <Link to={"/signin"} title="Signout">
                <span>
                  <i className="icofont-power"></i>
                </span>
              </Link>
            </li> */}
            <li className="logout">
              <div className="signout-btn" onClick={logoutHandler}>
                <span>
                  <i className="icofont-power"></i>
                </span>
              </div>
            </li>
          </ul>

          <p className="copyright">
            &#169; <Link to={"/#"}>SteamX</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
