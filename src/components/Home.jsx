import { FadeInSection } from "./FadeInImg";
import { Link } from "react-router-dom";
import { SMv, STitle, SLinkHover, SProduct1, SProduct2 } from "./Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MotionSimple from "./MotionSimple";

export const Home = () => {
  return (
    <MotionSimple>
      <div className={"row"}>
        <SMv
          className={
            "mv text-light text-center d-flex align-items-center justify-content-center"
          }
        >
          <STitle className={"title px-4 py-3"}>
            <h1>Horse Prediction</h1>
            <p className={"fs-6 mb-1"}>競馬予想のためのWebアプリケーション</p>
          </STitle>
        </SMv>
      </div>
      <div className={"row"}>
        <div className={"col-md-6 bg-dark text-light p-5"}>
          <SLinkHover>
            <Link
              to="/product/predict-app"
              className={"text-dark text-decoration-none"}
            >
              <h2 className={"bg-light mb-3 p-2"}>
                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                競馬予想ＡＩ
              </h2>
            </Link>
          </SLinkHover>
          <p className={"fs-6 my-4"}>
            過去10年のレースデータをもとにAIが競馬を予想する。
            3着以内に入りそうな馬を予想するのが得意。
          </p>
          <FadeInSection>
            <SProduct1
              className={"m-target ratio ratio-4x3 product1"}
            ></SProduct1>
          </FadeInSection>
        </div>
        <div className={"col-md-6 bg-dark text-light p-5"}>
          <SLinkHover>
            <Link
              to="/product/odds-app"
              className={"text-dark text-decoration-none"}
            >
              <h2 className={"bg-light mb-3 p-2"}>
                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                異常オッズ検知
              </h2>
            </Link>
          </SLinkHover>
          <p className={"fs-6 my-4"}>
            馬券のそれぞれの賭け方をオッズで比較、
            異常に賭けが集中している馬から、高配当馬券を見つけ出す。
          </p>
          <FadeInSection>
            <SProduct2
              className={"m-target ratio ratio-4x3 product2"}
            ></SProduct2>
          </FadeInSection>
        </div>
      </div>
    </MotionSimple>
  );
};
