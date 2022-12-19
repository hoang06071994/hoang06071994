import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import may1 from "../../../assest/imager/may1.png";
import may2 from "../../../assest/imager/may2.png";
import may3 from "../../../assest/imager/may3.png";
import "./registerUser.scss";

function RegisterUser() {
  const dispath = useDispatch();
  return (
    <>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>
          <div className="register_container">
            <div className="register_container--background">
              <div className="register_container--background--email">
                <input
                  type="text"
                  name=""
                  id="register_email"
                  placeholder=" "
                />
                <span className="register_container--background--email--text">
                  Email
                </span>
                <span className="register_container--background--email--error"></span>
              </div>
              <div className="register_container--background--password">
                <input
                  type="text"
                  name=""
                  id="register_password"
                  placeholder=" "
                />
                <span className="register_container--background--password--text">
                  Password
                </span>
                <span className="register_container--background--password--error"></span>
                <span className="register_container--background--password--show">
                  Hiện
                </span>
              </div>
              <div className="register_container--background--confimPassword">
                <input
                  type="text"
                  name=""
                  id="register_confimPassword"
                  placeholder=" "
                />
                <span className="register_container--background--confimPassword--text">
                  ConfimPassword
                </span>
                <span className="register_container--background--confimPassword--error"></span>
                <span className="register_container--background--confimPassword--show">
                  Hiện
                </span>
              </div>
              <button className="register_container--background--button">
                Đăng Ký
              </button>
              <div className="register_container--background--footter">
                <span className="register_container--background--footter--text">
                  Bạn đã có tài khoản ?
                </span>
                <span className="register_container--background--footter--login">
                  Đăng Nhập
                </span>
              </div>
            </div>
            <div className="register_container--wrap">
              <img
                src={may1}
                alt=""
                className="register_container--wrap--may1"
              />
              <img
                src={may1}
                alt=""
                className="register_container--wrap--may2"
              />
              <div className="register_container--wrap--may3">
                <img
                  src={may1}
                  alt=""
                  className="register_container--wrap--may3--img"
                />
                <span className="register_container--wrap--may3--text">
                  Register
                </span>
              </div>
              <img
                src={may2}
                alt=""
                className="register_container--wrap--may4"
              />
              <img
                src={may3}
                alt=""
                className="register_container--wrap--may5"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default RegisterUser;
