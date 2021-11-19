import axios from "axios";
import React from "react";
import { useState } from "react";
import { SMv, STitle } from "./Styled";

export const PredictApp = () => {
  const [results, setResults] = useState([]);

  const inputRef = React.createRef();
  const predictHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    const inputUrl = inputRef.current.value;
    axios
      // .get(`http://localhost:8000/api/prediction/?race_url=${inputUrl}`)
      .get(`https://waterleaper.net/api/prediction/?race_url=${inputUrl}`)
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
      })
      .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        console.log(error);
      });
  };

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
        <form className="input-group pb-5">
          <input
            type="text"
            className="form-control"
            placeholder="URLを入力してください"
            aria-describedby="button-addon2"
            ref={inputRef}
          />
          <button
            className="btn btn-outline-secondary text-white"
            type="submit"
            id="button-addon2"
            onClick={predictHandler}
          >
            予想開始
          </button>
        </form>
        <div id="table">
          <table className="table text-white">
            <thead>
              <tr>
                <th scope="col">馬番</th>
                <th scope="col">馬名</th>
                <th scope="col">確率（％）</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <th scope="row">{result.number}</th>
                  <td>{result.name}</td>
                  <td>{result.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
