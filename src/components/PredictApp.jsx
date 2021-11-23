import React from "react";
import DjangoApiFetch from "./DjangoApiFetch";
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
      <div className="row px-5 pb-5 bg-dark justify-content-center">
        <div className="col-12 col-md-10 pt-5 text-white">
          <h2>競馬予想AI</h2>
          <p>netkeiba.comの中央競馬の出馬表のURLを入力してください</p>
          <p>それぞれの馬が３着以内に入る確率を予測します。</p>
          <p>※馬体重の計測が完了しているレースのみ予測が可能です。</p>
          <span>入力例：</span>
          <br />
          <a
            href="https://race.netkeiba.com/race/shutuba.html?race_id=202101010101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-break"
          >
            https://race.netkeiba.com/race/shutuba.html?race_id=202101010101
          </a>
          <DjangoApiFetch />
        </div>
        <div className="col-12"></div>
      </div>
    </MotionSimple>
  );
};
