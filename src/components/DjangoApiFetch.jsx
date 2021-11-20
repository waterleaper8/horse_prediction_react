import axios from "axios";
import React, { useState } from "react";

const DjangoApiFetch = () => {
  const [results, setResults] = useState([]);
  const [raceUrl, setRaceUrl] = useState("");

  const inputRef = React.createRef();
  const predictHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    axios
      // .get(`http://localhost:8000/api/prediction/?race_url=${raceUrl}`)
      .get(
        `https://horse-api.waterleaper.net/api/prediction/?race_url=${raceUrl}`
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
    <div>
      <form className="input-group pb-5">
        <input
          type="text"
          className="form-control"
          placeholder="URLを入力してください"
          aria-describedby="button-addon2"
          ref={inputRef}
          onChange={(e) => setRaceUrl(e.target.value)}
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
  );
};

export default DjangoApiFetch;
