import { SMv, STitle } from "./Styled";
import img_predict from "../assets/predict.png";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FadeInSection } from "./FadeInImg";
import MotionSimple from "./MotionSimple";
// import { Link } from "react-router-dom";

export const Predict = () => {
  return (
    <MotionSimple>
      <div className="row">
        <SMv className="mv text-light text-center d-flex align-items-center justify-content-center">
          <STitle className="title px-3 py-2">
            <h1 className="mb-1">Prediction</h1>
          </STitle>
        </SMv>
      </div>
      <div className="row bg-dark text-light p-5" id="horsep">
        <h2 className="border-bottom mb-3 pb-2">競馬予想ＡＩ</h2>
        <p>サンプルイメージ</p>
        <FadeInSection>
          <figure className="mb-3">
            <Zoom>
              <img className="col-md-5 col-12" src={img_predict} alt="" />
            </Zoom>
          </figure>
        </FadeInSection>
        <p>
          レースIDを入力すると、マシンラーニングで学習したモデルにより3着以内に入る馬を予想します。
        </p>
        <a
          className="btn btn-primary col-md-5 col-10 ms-3"
          href="https://predict.waterleaper.net/"
        >
          デモページへ
        </a>
        {/* <Link
          className="btn btn-primary col-md-5 col-10 ms-3"
          to="/product/predict-app"
        >
          デモページへ
        </Link> */}
      </div>
    </MotionSimple>
  );
};
