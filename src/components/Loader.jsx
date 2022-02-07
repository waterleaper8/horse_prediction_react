import React, { useEffect } from "react"
import gsap from "gsap"

const Loader = (props) => {
  const loaded = props.loaded
  const tween = gsap.timeline({})
  tween.fromTo(
    ".loader",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      display: "none",
      ease: "Power4.out",
    }
  )
  tween.fromTo(
    ".top_title",
    {
      display: "block",
      opacity: 0,
      scale: 0.2,
    },
    {
      display: "block",
      opacity: 1,
      scale: 1,
      ease: "Power4.out",
    }
  )
  tween.to(".top_title_innerLeft", {
    x: -1000,
    delay: 0.3,
  })
  tween.to(
    ".top_title_innerRight",
    {
      x: 1000,
    },
    "<"
  )
  tween.to("#loader", {
    opacity: 0,
    display: "none",
  })

  useEffect(() => {
    console.log(loaded)
    if (loaded) {
      tween.play()
      setTimeout(() => {
        document.body.classList.remove("hide")
      }, 2000)
    } // eslint-disable-next-line
  }, [loaded])

  return (
    // <div
    //   id="loader"
    //   className={`d-flex align-items-center w-100 vh-100 position-fixed top-0 left-0 bg-dark ${props.className}`}
    // >
    <div
      id="loader"
      className={`align-items-center w-100 h-100 position-fixed top-0 left-0 bg-dark`}
    >
      <div className="loader"></div>
      <div className="top_title">
        <span className="top_title_innerLeft">Horse</span>
        <span className="top_title_innerRight">Prediction</span>
      </div>

      <style jsx="true">{`
        .top_title {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -webkit- transform: translateY(-50%) translateX(-50%);
          display: none;
          font-size: 9rem;
          color: #fff;
          font-family: "EB Garamond", serif;
        }
        @media screen and ( max-width : 1023px ) {
          .top_title {
            font-size: 7.2rem;
          }
        }
        @media screen and ( max-width : 767px ) {
          .top_title {
            font-size: 4.2rem;
          }
        }
        .top_title_innerLeft,
        .top_title_innerRight {
          display: inline-block;
        }
        #loader {
          z-index: 9999;
          display: flex;
          justify-content: center;
        }
        .fadeOut {
          opacity: 0;
          transition: all 1s;
          z-index: -1 !important;
        }
        .loader,
        .loader:before,
        .loader:after {
          background: #ffffff;
          -webkit-animation: load1 1s infinite ease-in-out;
          animation: load1 1s infinite ease-in-out;
          width: 1em;
          height: 4em;
        }
        .loader {
          color: #ffffff;
          text-indent: -9999em;
          position: relative;
          font-size: 11px;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
        }
        .loader:before,
        .loader:after {
          position: absolute;
          top: 0;
          content: "";
        }
        .loader:before {
          left: -1.5em;
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
        }
        .loader:after {
          left: 1.5em;
        }
        @-webkit-keyframes load1 {
          0%,
          80%,
          100% {
            box-shadow: 0 0;
            height: 4em;
          }
          40% {
            box-shadow: 0 -2em;
            height: 5em;
          }
        }
        @keyframes load1 {
          0%,
          80%,
          100% {
            box-shadow: 0 0;
            height: 4em;
          }
          40% {
            box-shadow: 0 -2em;
            height: 5em;
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
