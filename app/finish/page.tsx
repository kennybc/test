"use client";

import { useState } from "react";
import useGame from "../../hooks/game";
import { ReactSVG } from "react-svg";
import ButtonLink from "../../components/ButtonLink";

const Finish = () => {
  const [anim, setAnim] = useState(true);

  const { name, place, points } = useGame();

  return (
    <div>
      <div className={`content`} style={{ filter: "blur(0px)" }}>
        <div
          className="confetti"
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 0,
          }}
        ></div>

        <div className="two-columns">
          <div
            className="left-column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ReactSVG
              renumerateIRIElements={false}
              src="/images/phrase_title-one-line-star_PNH-POP-04.svg"
            />
            <div
              style={{
                borderRadius: "25px",
                border: "8px solid white",
                backgroundColor: "white",
                marginTop: "3rem",
                width: "100%",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  border: "5px solid #D7335E",
                  textAlign: "center",
                  padding: "2rem 1rem",
                }}
              >
                <ReactSVG
                  className="star-ribbons-gj"
                  renumerateIRIElements={false}
                  src={`/images/star_badge_ribbons-16.svg`}
                />
                <div
                  style={{
                    padding: "4rem 0 8rem",
                  }}
                >
                  <h1>
                    <p onClick={() => setAnim(false)}>
                      Great job{name ? " " + name : ""}!
                    </p>{" "}
                    You came in {place} place and earned {points} points!
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column" style={{ padding: "0 3rem 3rem" }}>
            <div
              style={{
                padding: "02rem",
                backgroundColor: "white",
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              <h1>LEADERBOARD</h1>
              <div style={{ fontSize: "2rem" }}>XeXe</div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <ButtonLink page="/leaderboard">GO TO LEADERBOARD</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
