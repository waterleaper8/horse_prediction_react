import React from "react";
import DjangoApiFetch from "./DjangoApiFetch";
import { SMv, STitle } from "./Styled";

export const PredictApp = () => {
  return (
    <div>
      <div className="row">
        <SMv className="mv text-light text-center d-flex align-items-center justify-content-center">
          <STitle className="title px-3 py-2">
            <h1 className="mb-1">Prediction</h1>
          </STitle>
        </SMv>
      </div>
      <div className="main row px-5 pb-5 bg-dark">
        <div className="row pt-5 text-white">
          <h2>競馬予想AI</h2>
          <p>
            netkeiba.comの中央競馬の出馬表のURLを入力してください
            <br />
            例：
            <a href="https://race.netkeiba.com/race/shutuba.html?race_id=202101010101">
              https://race.netkeiba.com/race/shutuba.html?race_id=202101010101
            </a>
            <br />
            それぞれの馬が３着以内に入る確率を予測します。
            <br />
            ※馬体重の計測が完了しているレースのみ予測が可能です。
          </p>
        </div>
        <DjangoApiFetch />
      </div>
    </div>
  );
};
