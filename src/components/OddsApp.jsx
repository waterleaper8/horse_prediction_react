import { SMv, STitle } from "./Styled";
import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import MotionSimple from "./MotionSimple";
import FetchOdds from "./FetchOdds";

export const OddsApp = () => {
  return (
    <MotionSimple>
      <div className="row">
        <SMv className="mv text-light text-center d-flex align-items-center justify-content-center">
          <STitle className="title px-3 py-2">
            <h1 className="mb-1">Odds</h1>
          </STitle>
        </SMv>
      </div>
      <div className="row bg-dark text-light p-5" id="detect">
        <h2 className="border-bottom mb-3 pb-2">馬券オッズランク比較</h2>
        {/* <p>サンプルイメージ</p>
        <FadeInSection>
          <figure className="mb-3">
            <Zoom>
              <img className="col-md-5 col-12" src={img_odds} alt="" />
            </Zoom>
          </figure>
        </FadeInSection>
        <a
          className="btn btn-primary col-md-5 col-10 ms-3"
          href="https://odds.waterleaper.net/"
        >
          デモページへ
        </a> */}
        <p>netkeiba.comの中央競馬の出馬表のURLを入力してください</p>
        <p>馬券の種類に応じたオッズの順位を表示します。</p>
        <p>縦軸は馬番、横軸は馬券の種類、セルは順位を表しています。</p>
        <p className="text-danger">
          ※データの取得に30秒ほどかかります。
          <br />
          また、賭博による利益を保証するものではありませんので、ご了承ください。
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
        <FetchOdds />
      </div>
    </MotionSimple>
  );
};
