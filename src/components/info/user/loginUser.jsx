import "./loginUser.scss";
import { Col, Row } from "react-bootstrap";
import background2 from "../../../assest/imager/background2.jpeg";
import background3 from "../../../assest/imager/background3.jpg";

function LoginUser() {
  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="login_container">
            <div className="login_container--title">
              <img src={background2} alt="" />
              <span>Login</span>
              <p>
                Một cuốn sách hay cho ta một điều tốt, một người bạn tốt cho ta
                một điều hay.
              </p>
            </div>
            <div className="login_container--modal">
              <div className="login_container--modal--body">
                <div className="login_container--modal--body--email">
                  <input
                    type="text"
                    id="email"
                    placeholder=" "
                    className="login_container--modal--body--email--input"
                  />
                  <span className="login_container--modal--body--email--span">
                    Email
                  </span>
                  <span className="login_container--modal--body--email--text"></span>
                </div>
                <div className="login_container--modal--body--password">
                  <input
                    type="text"
                    id="password"
                    placeholder=" "
                    className="login_container--modal--body--password--input"
                  />
                  <span className="login_container--modal--body--password--span">
                    Password
                  </span>
                  <span className="login_container--modal--body--password--show">
                    Hiện
                  </span>
                  <span className="login_container--modal--body--password--notShow">
                    Ẩn
                  </span>
                  <span className="login_container--modal--body--password--text"></span>
                </div>
                <div className="login_container--modal--body--submit">
                  <button className="login_container--modal--body--submit--button">
                    ĐĂNG NHẬP
                  </button>
                </div>
              </div>
              <div className="login_container--modal--footer">
                <span>Bạn muốn đăng ký tài khoản ?</span>
                <span className="login_container--modal--footer--login">
                  Đăng Ký
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default LoginUser;
