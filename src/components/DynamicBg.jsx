import React from "react";

const DynamicBg = () => {
  return (
    <div>
      <svg
        className="background--custom"
        id="demo"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#d54529"
          fill-opacity="0.1"
          d="M-100 -100L200 -100L200 30L-100 30Z"
          id="path0"
        />
        <path
          fill="#539cb4"
          fill-opacity="0.3"
          d="M-100 -100L200 -100L200 20L-100 20Z"
          id="path1"
        />
        <path
          fill="#fa6bc9"
          fill-opacity="0.3"
          d="M-100 -100L200 -100L200 90L-100 90Z"
          id="path2"
        />
      </svg>
      <style jsx="true">{`
        path {
          transform-origin: 50% 0%;
        }
        #path0 {
          animation: path0 25s linear infinite alternate;
        }
        #path1 {
          animation: path1 9.433962264150944s linear infinite alternate;
        }
        #path2 {
          animation: path2 62.5s linear infinite alternate;
        }
        .background--custom {
          background-color: #ffffff;
          position: absolute;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          top: 0;
          left: 0;
        }
        @keyframes path0 {
          0% {
            transform: rotate(-30deg);
          }
          100% {
            transform: rotate(30deg);
          }
        }
        @keyframes path1 {
          0% {
            transform: rotate(-60deg);
          }
          100% {
            transform: rotate(60deg);
          }
        }
        @keyframes path2 {
          0% {
            transform: rotate(20deg);
          }
          100% {
            transform: rotate(-20deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DynamicBg;
