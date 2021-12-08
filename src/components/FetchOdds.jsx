import axios from "axios";
import React, { useState } from "react";
import $ from "jquery";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const FetchOdds = () => {
  const [results, setResults] = useState([]);
  const [raceUrl, setRaceUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const oddsHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    setResults([]);
    setIsLoading(true);
    axios
      // .get(`http://localhost:8000/api/odds/?race_url=${raceUrl}`)
      .get(`https://horse-api.waterleaper.net/api/odds/?race_url=${raceUrl}/`)
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
      })
      .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="pt-3">
      <form className="input-group pb-5">
        <input
          type="text"
          className="form-control col-12 col-md-8 rounded"
          placeholder="URLを入力してください"
          aria-describedby="button-addon2"
          ref={inputRef}
          onChange={(e) => setRaceUrl(e.target.value)}
        />
        <button
          className="mt-3 mt-md-0 btn btn-outline-secondary text-white col-12 col-md-2 rounded"
          type="submit"
          id="button-addon2"
          onClick={oddsHandler}
        >
          データ取得開始
        </button>
      </form>
      <div id="table">
        <table className="table table-dark table-striped  table-bordered">
          <thead>
            <tr>
              <th>馬番</th>
              <th>馬名</th>
              <th colSpan="6" className="text-center">
                順位
              </th>
            </tr>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">単勝</th>
              <th scope="col">馬連</th>
              <th scope="col">ワイド</th>
              <th scope="col">馬単</th>
              <th scope="col">3連単</th>
              <th scope="col">3連複</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="js-fadeIn">
                <td>{result.umaban}</td>
                <td>{result.umamei}</td>
                <td>{result.tansho}</td>
                <td>{result.umaren}</td>
                <td>{result.wide}</td>
                <td>{result.umatan}</td>
                <td>{result.santan}</td>
                <td>{result.sanpuku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isLoading && (
        <div className="text-center">
          <CircularProgress />
        </div>
      )}
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

export default FetchOdds;
