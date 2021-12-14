import axios from "axios";
import React, { useState } from "react";
import $ from "jquery";
import { useEffect } from "react";

const FetchPredict = () => {
  const [results, setResults] = useState([]);
  const [raceUrl, setRaceUrl] = useState("");

  const inputRef = React.createRef();

  const fadeIn = () => {
    $(".js-fadeIn").each(function (i) {
      let delay = 200; // 0.1秒ずつずれます。好きな秒数に調整してください。
      $(this)
        .delay(i * delay)
        .queue(function (next) {
          $(this).addClass("show");
          next();
        });
    });
  };

  useEffect(() => {
    fadeIn();
  }, [results]);

  const predictHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    setResults([]);
    axios
      // .get(`http://localhost:8000/api/prediction/?race_url=${raceUrl}`)
      .get(
        `https://horse-api.waterleaper.net/api/prediction/?race_url=${raceUrl}/`
      )
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
    <div className="pt-3 col-12 col-lg-8">
      <form className="input-group pb-5">
        <input
          type="text"
          className="form-control col-12 col-md-9 rounded"
          placeholder="URLを入力してください"
          aria-describedby="button-addon2"
          ref={inputRef}
          onChange={(e) => setRaceUrl(e.target.value)}
        />
        <button
          className="mt-3 mt-md-0 btn btn-outline-secondary text-white col-12 col-md-3 rounded"
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
              <tr key={index} className="js-fadeIn">
                <th scope="row">{result.number}</th>
                <td>{result.name}</td>
                <td>{Math.round(result.percentage * 100) / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx="true">
        {`
          .js-fadeIn {
            opacity: 0;
            transform: translateX(200px);
            transition: 0.4s;
          }
          .js-fadeIn.show {
            transition-duration: 0.8s;
            opacity: 1;
            transform: translate(0);
          }
        `}
      </style>
    </div>
  );
};

export default FetchPredict;
