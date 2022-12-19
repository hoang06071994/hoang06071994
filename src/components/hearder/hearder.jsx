import { useState } from "react";
import background from "../../assest/imager/background3.jpg";
import LoginUser from "../info/user/loginUser.jsx";
import RegisterUser from "../info/user/registerUser";
import "./hearder.scss";

function Hearder() {
  const [checkToken, setCheckToken] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  function showLogin() {
    setLogin(true);
    setRegister(false);
  }
  function showRegister() {
    setRegister(true);
    setLogin(false);
  }
  return (
    <>
      <div className="hearder_container">
            <div className="hearder_container--content">
              <img src={background} alt="background" />
              <span>My Book</span>
            </div>
            <div className="hearder_container--user">
              {checkToken ? (
                <div className="hearder_container--user--login">
                  <img src="" alt="" />
                  <span>name</span>
                  <span>Đăng xuất</span>
                </div>
              ) : (
                <div className="hearder_container--user--notLogin">
                  <span
                    className="hearder_container--user--notLogin--login"
                    onClick={showLogin}
                  >
                    {" "}
                    Đăng Nhập{" "}
                  </span>
                  <span
                    className="hearder_container--user--notLogin--register"
                    onClick={showRegister}
                  >
                    {" "}
                    Đăng Ký{" "}
                  </span>
                </div>
              )}
            </div>
          </div>
      {login && <LoginUser></LoginUser>}
      {register && <RegisterUser></RegisterUser>}
    </>
  );
}
export default Hearder;
