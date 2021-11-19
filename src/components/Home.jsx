import { FadeInSection } from "./FadeInImg";
import { Link } from "react-router-dom";
import { SMv, STitle, SLinkHover, SProduct1, SProduct2 } from "./Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <div className={"row"}>
        <SMv className={"mv text-light text-center d-flex align-items-center justify-content-center"}>
          <STitle className={"title px-3 py-2"}>
            <h1>Horse Prediction</h1>
            <p className={"fs-6 mb-1"}>
              世界で唯一の<span className={"text-warning"}>80%</span>を超える回収率を生み出す競馬予想AI
            </p>
          </STitle>
        </SMv>
      </div>
      <div className={"row"}>
        <div className={"col-md-6 bg-dark text-light p-5"}>
          <SLinkHover>
            <Link to="/product/predict" className={"text-dark text-decoration-none"}>
              <h2 className={"bg-light mb-3 p-2"}>
                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                競馬予想ＡＩ
              </h2>
            </Link>
          </SLinkHover>
          <p className={"fs-6"}>過去20年のレースデータをもとにずば抜けた的中率を叩き出す。 3着以内に入りそうな馬を予想するのが得意。</p>
          <FadeInSection>
            <SProduct1 className={"m-target ratio ratio-4x3 product1"}></SProduct1>
          </FadeInSection>
        </div>
        <div className={"col-md-6 bg-dark text-light p-5"}>
          <SLinkHover>
            <Link to="/product/odds" className={"text-dark text-decoration-none"}>
              <h2 className={"bg-light mb-3 p-2"}>
                <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                異常オッズ検知
              </h2>
            </Link>
          </SLinkHover>
          <p className={"fs-6"}>直前のレースデータをもとにそれぞれの賭け方をオッズで比較、 異常に賭けが集中している馬から、高配当馬券を見つけ出す。</p>
          <FadeInSection>
            <SProduct2 className={"m-target ratio ratio-4x3 product2"}></SProduct2>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};
