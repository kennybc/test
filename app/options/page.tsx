"use client";

import { useContext } from "react";
import GameContext from "../../context/GameContext";
import ButtonLink from "../../components/ButtonLink";

export default () => {
  const { leaders, archive } = useContext(GameContext);

  const clearData = () => {
    fetch("/api/database/archive", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const downloadArchive = () => {
    fetch("/api/database/archive")
      .then((response) => response.json())
      .then((json) => console.log(json));
    /*let csv: string = "";

    for (let row = 0; row < archive.length; row++) {
      let keysAmount = Object.keys(archive[row]).length;
      let keysCounter = 0;

      if (row === 0) {
        for (let key in archive[row]) {
          csv += key + (keysCounter + 1 < keysAmount ? "," : "\r\n");
          keysCounter++;
        }
      } else {
        for (let key in archive[row]) {
          if (key === "answers") {
            csv +=
              archive[row][key].join("|") +
              (keysCounter + 1 < keysAmount ? "," : "\r\n");
            keysCounter++;
          } else {
            csv +=
              archive[row][key] + (keysCounter + 1 < keysAmount ? "," : "\r\n");
            keysCounter++;
          }
        }
      }

      keysCounter = 0;
    }
    let link = document.createElement("a");
    link.id = "download-csv";
    link.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
    );
    link.setAttribute("download", "history.csv");
    document.body.appendChild(link);
    link.click();*/
  };

  const downloadLeaders = () => {
    fetch("/api/database/active")
      .then((response) => response.json())
      .then((json) => console.log(json));
    /*let csv: string = "";

    for (let row = 0; row < leaders.length; row++) {
      let keysAmount = Object.keys(leaders[row]).length;
      let keysCounter = 0;

      if (row === 0) {
        for (let key in leaders[row]) {
          csv += key + (keysCounter + 1 < keysAmount ? "," : "\r\n");
          keysCounter++;
        }
      } else {
        for (let key in leaders[row]) {
          if (key === "answers") {
            csv +=
              leaders[row][key].join("|") +
              (keysCounter + 1 < keysAmount ? "," : "\r\n");
            keysCounter++;
          } else {
            csv +=
              leaders[row][key] + (keysCounter + 1 < keysAmount ? "," : "\r\n");
            keysCounter++;
          }
        }
      }

      keysCounter = 0;
    }
    let link = document.createElement("a");
    link.id = "download-csv";
    link.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
    );
    link.setAttribute("download", "leaders.csv");
    document.body.appendChild(link);
    link.click();*/
  };

  return (
    <>
      <div
        className="content leaderboard-ss"
        style={{ backgroundImage: "url(./images/leaderboard_BG.jpg)" }}
      >
        <div
          style={{
            position: "absolute",
            top: "6rem",
            zIndex: 3,
          }}
        >
          <div onClick={clearData}>
            <ButtonLink page="#">RESET LEADERBOARD</ButtonLink>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "15rem",
            zIndex: 3,
          }}
        >
          <div onClick={downloadLeaders}>
            <ButtonLink page="#">DOWNLOAD LEADERBOARD</ButtonLink>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "24rem",
            zIndex: 3,
          }}
        >
          <div onClick={downloadArchive}>
            <ButtonLink page="#">DOWNLOAD HISTORY</ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
};
