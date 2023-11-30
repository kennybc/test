import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";
import "./ready-to-play.css";

const ReadyToPlay = () => {
  const [explosion, setExplosion] = useState(false);
  useEffect(() => {
    setTimeout(() => setExplosion(true), 18000);
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-9px",
        }}
      >
        <div
          style={{
            width: "15rem",
            marginTop: "-15rem",
            // width: "100%",
          }}
        >
          <ReactSVG
            renumerateIRIElements={false}
            src="/images/medallion_pink.svg"
          />
        </div>
      </div>
      <div
        className={explosion ? "balloon-countdown explosion" : ""}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          flex: 1,
        }}
      >
        <ReactSVG
          className="right-column"
          style={{ margin: "2rem 0", position: "fixed", top: "25%", zIndex: 1 }}
          renumerateIRIElements={false}
          src="/images/phrase_fast-enough_PNH-POP-20.svg"
        />
        <div
          style={{
            animation:
              "17s cubic-bezier(0, 0.54, 0, 0.99) 1 normal forwards running go-up",
            opacity: 0,
            paddingTop: "100%",
          }}
        >
          <div
            className="bg-balloon-pop"
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              left: 0,
              right: 0,
              flexDirection: "column",
            }}
          >
            <div className="balloon-container" style={{ margin: "0 auto" }}>
              <img
                style={{ width: "19vw", animationDuration: "9s" }}
                className="balloon"
                src="./images/balloon.png"
                alt="balloon"
              />
            </div>
            <ReactSVG
              style={{ width: "100%" }}
              className="react-svg medallion"
              renumerateIRIElements={false}
              src="/images/medallion_pink.svg"
            />
            <img
              className="balloon-stripe"
              style={{ width: "15%" }}
              src="./images/balloon_string.png"
              alt="balloon"
            />
          </div>
        </div>{" "}
      </div>
      <div
        style={{
          color: "red",
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "white",
          paddingRight: "25px",
          borderRadius: "10rem",
          boxShadow: "0px 5px 4px #0000002e",
          margin: "20px",
          minWidth: "200px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "flex-start",
          zIndex: 1,
        }}
      >
        <ReactSVG
          className="star-points"
          renumerateIRIElements={false}
          src={`/images/balloon_hashtag-19.svg`}
        />
        <div
          style={{
            paddingLeft: "1rem",
          }}
        >
          <ReactSVG
            className="pnh-pop-leaderboard"
            renumerateIRIElements={false}
            src={`/images/phrase_title-hashtag_PNH-POP-11.svg`}
          />
        </div>
      </div>
    </>
  );
};
export default ReadyToPlay;
