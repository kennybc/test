"use client"

import ButtonLink from "../components/ButtonLink";
import Button from "../components/Button";
import Cloud from "../components/cloud";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import useGame from "../hooks/game";

const Start = () => {
  const [frame, setFrame] = useState(false);
  const { stop } = useGame();
  useEffect(() => {
    stop();
  });
  return (
    <>
      <div
        className="content"
        style={{
          backgroundImage: "url(./images/background.jpg)",
          filter: frame ? "blur(5px)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            width: "100%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              aspectRatio: "628/492",
            }}
          >
            <ReactSVG
              renumerateIRIElements={false}
              src="/images/phrase_title-two-lines-star_PNH-POP.svg"
            />
          </div>
          <div
            style={{
              width: "60%",
              padding: "0 4rem 0 5rem",
            }}
          >
            <Cloud>
              <h1
                style={{
                  textAlign: "center",
                  maxWidth: "25rem",
                }}
              >
                Can you answer all the questions correctly before the balloon
                pops?
              </h1>
            </Cloud>

            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                minHeight: "100px",
              }}
            >
              <ButtonLink page="/intro">START</ButtonLink>
              <ButtonLink page="/leaderboard">LEADERBOARD</ButtonLink>
            </div>
          </div>
        </div>
        <h2
          style={{
            color: "#707070",
            maxWidth: "53rem",
            alignSelf: "flex-start",
          }}
        >
          Please see Important Safety Information, including Boxed WARNING
          regarding risk of serious infections caused by encapsulated bacteria,
          and provided full{" "}
          <a
            target="display-frame"
            onClick={() => setFrame(true)}
            href="https://pi.apellis.com/files/PI_Empaveli.pdf#view=fitH"
          >
            Prescribing Information
          </a>{" "}
          and{" "}
          <a
            target="display-frame"
            onClick={() => setFrame(true)}
            href="https://pi.apellis.com/files/MedGuide_Empaveli.pdf#view=fitH"
          >
            Medication Guide
          </a>
          .
        </h2>
        <div
          className="credits"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: ".6rem",
              maxWidth: "45%",
            }}
          >
            <div>
              APELLIS, EMPAVELI, and their respective logos are trademarks of
              Apellis Pharmaceuticals, Inc. Other trademarks referenced herein
              are the property of their respective owners.
            </div>
            <br></br>
            <div>
              © 2023 Apellis Pharmaceuticals, Inc. All rights reserved. 12/23
              US-PEGPNH-2200337 v2.0
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Sponsored by:
            <img
              style={{
                maxHeight: "4rem",
                marginLeft: "1.5rem",
                width: "200px",
              }}
              width={200}
              height={57}
              src="./images/empaveli-logo.svg"
              alt="Empaveli logo"
            />
          </div>
        </div>
        <link rel="preload" href="./images/how_to_play_BG.jpg" as="image" />
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background: "rgb(0 0 0 / 41%)",
          display: frame ? "flex" : "none",
        }}
      >
        <iframe
          style={{
            width: "50%",
            height: "90%",
            margin: "2% auto 3% auto",
          }}
          name="display-frame"
          title="Additional Information"
        ></iframe>
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "5%",
          }}
        >
          <Button onClick={() => setFrame(false)}>✘</Button>
        </div>
      </div>
    </>
  );
};

export default Start;
