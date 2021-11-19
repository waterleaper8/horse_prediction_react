import { SMv, STitle } from "./Styled";
import img_odds from "../assets/odds.png"
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FadeInSection } from "./FadeInImg";

export const Odds = () => {
  return (
    <>
      <div className="row">
        <SMv className="mv text-light text-center d-flex align-items-center justify-content-center">
          <STitle className="title px-3 py-2">
            <h1 className="mb-1">Odds</h1>
          </STitle>
        </SMv>
      </div>
      <div className="row bg-dark text-light p-5" id="detect">
        <h2 className="border-bottom mb-3 pb-2">馬券オッズランク比較</h2>
        <p>サンプルイメージ</p>
        <FadeInSection>
        <figure className="mb-3">
          <Zoom>
            <img className="col-md-5 col-12" src={img_odds} alt="" />
          </Zoom>
        </figure>
        </FadeInSection>
        <p>
          馬券の種類に応じたオッズの順位を表示します。
          <br />
          これをもとに賭け方を考えれば一攫千金間違いなし！？
        </p>
        <a className="btn btn-primary col-md-5 col-10 ms-3" href="https://odds.waterleaper.net/">
          デモページへ
        </a>
      </div>
    </>
  );
};
