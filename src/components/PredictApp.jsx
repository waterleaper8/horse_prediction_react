import React from "react";
import FetchPredict from "./FetchPredict";
import MotionSimple from "./MotionSimple";
import { SMv, STitle } from "./Styled";

export const PredictApp = () => {
  return (
    <MotionSimple>
      <div className="row">
        <SMv className="mv text-light text-center d-flex align-items-center justify-content-center">
          <STitle className="title px-3 py-2">
            <h1 className="mb-1">Prediction</h1>
          </STitle>
        </SMv>
      </div>
      <div className="row px-md-5 pb-5 bg-dark justify-content-center">
        <div className="col-12 pt-5 text-white">
          <h2 className="border-bottom mb-3 pb-2">競馬予想AI</h2>
          <p>netkeiba.comの中央競馬の出馬表のURLを入力してください</p>
          <p>それぞれの馬が３着以内に入る確率を予測します。</p>
          <p>※馬体重の計測が完了しているレースのみ予測が可能です。</p>
          <p className="text-danger">
            ※この予測モデルの回収率は80%程度です。
            <br />
            賭博による利益を保証するものではありませんので、ご了承ください。
          </p>
          <span>入力例：</span>
          <br />
          <a
            href="https://race.netkeiba.com/race/shutuba.html?race_id=202101010101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-break text-white"
          >
            https://race.netkeiba.com/race/shutuba.html?race_id=202101010101
          </a>
          <FetchPredict />
        </div>
      </div>
    </MotionSimple>
  );
};
