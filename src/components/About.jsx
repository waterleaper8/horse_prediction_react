import styled from "styled-components";
import goro from "../assets/gorogoro_neet.png";
import { FadeInSection } from "./FadeInImg";
import { SMv, STitle } from "./Styled";
import MotionSimple from "./MotionSimple";

export const About = () => {
  return (
    <MotionSimple>
      <div className="row">
        <SMv className="mv text-light text-center d-flex align-items-center justify-content-center">
          <STitle className="title px-3 py-2">
            <h1 className="mb-1">About</h1>
          </STitle>
        </SMv>
      </div>
      <div className="row bg-dark text-light p-5">
        <h2 className="border-bottom mb-3 pb-2">誕生秘話</h2>
        <FadeInSection>
          <SGoro className="mb-3"></SGoro>
        </FadeInSection>
        <p>
          毎日、わたしはつまらない仕事に追われていました。
          この状況を脱するために、ゴロゴロしてても収入を得る方法はないか考えていました。
          数々の試行錯誤を重ねた末についに競馬予想AIを完成させることができました。
          これにより、わたしは仕事を辞めても大金を稼ぎ続けることが可能になりました。
          皆さまにも、ぜひ黄金体験を味わっていただきたくサイトを開設しました。
        </p>
      </div>
    </MotionSimple>
  );
};

const SGoro = styled.div`
  height: 300px;
  background-image: url(${goro});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
