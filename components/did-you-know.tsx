import { ReactSVG } from "react-svg";

const DidYouKnow = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "30%",
          right: "2%",
        }}
      >
        <p
          style={{
            color: "#707070",
            backgroundColor: "rgb(214 227 235 / 45%)",
            backdropFilter: "blur(2px)",
            padding: ".5rem",
            borderRadius: ".5rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              overflow: "hidden",
              display: "block",
            }}
          >
            <span
              style={{
                display: "block",
                transform: "translateY(100%)",
                animation: ".6s grow-up 1s ease-in-out forwards",
              }}
            >
              Emma, a real
            </span>
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "block",
            }}
          >
            <span
              style={{
                display: "block",
                transform: "translateY(100%)",
                animation: ".6s grow-up 1.4s ease-in-out forwards",
              }}
            >
              EMPAVELI patient.
            </span>
          </span>
        </p>
      </div>
      <div
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
          style={{}}
          renumerateIRIElements={false}
          src="/images/phrase_did-you-know_PNH-POP-21.svg"
        />
        <div
          className="left-column"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            alignSelf: "flex-start",
            width: "60%",
            marginTop: "3vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flex: 1,
              width: "100%",
            }}
          >
            <div
              style={{
                borderRadius: "25px",
                border: "8px solid white",
                backgroundColor: "white",
                width: "100%",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  alignItems: "flex-start",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  border: "5px solid #D7335E",
                  textAlign: "left",
                  padding: "0 1.5rem",
                  fontSize: "1.6rem",
                  fontFamily: "raleway",
                  fontWeight: 400,
                }}
              >
                <p>There are more than</p>
                <ul style={{ marginTop: "0" }}>
                  <li>
                    100 patients currently on EMPAVELI<sup>®</sup>{" "}
                    (pegcetacoplan) in the United States
                    <sup style={{ marginTop: "-.9rem" }}>1,</sup>*
                  </li>
                  <li>
                    84 prescribers with commercial-use experience<sup>1,</sup>*
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                maxWidth: "36rem",
              }}
            >
              <ReactSVG
                style={{
                  padding: "1.5rem 1.5rem 1.5rem 0",
                  animation: "ring 4s 3s ease-in-out 1",
                }}
                className="bubble"
                renumerateIRIElements={false}
                src={`/images/bubble.svg`}
              />
              <h2
                style={{
                  color: "#5E6C85",
                }}
              >
                Talk to us to learn about how EMPAVELI has helped Emma and other
                patients with PNH
              </h2>
            </div>
            <div
              style={{
                padding: "0 1.7rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h2
                style={{
                  color: "#5E6C85",
                  // maxWidth: "53rem",
                  alignSelf: "flex-start",
                  fontSize: "1.3rem",
                }}
              >
                Please see Important Safety Information, including Boxed WARNING
                regarding risk of serious infections caused by encapsulated
                bacteria, and provided full{" "}
                <a href="https://pi.apellis.com/files/PI_Empaveli.pdf">
                  Prescribing Information
                </a>{" "}
                and{" "}
                <a href="https://pi.apellis.com/files/MedGuide_Empaveli.pdf">
                  Medication Guide
                </a>
                .
              </h2>
              <p style={{ margin: "0", color: "#5E6C85" }}>
                *As of 01/31/2022.
              </p>
              <p style={{ margin: "0", color: "#5E6C85" }}>
                <strong>Reference: 1.</strong> Data on file. Apellis
                Pharmaceuticals, Inc. Waltham, MA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DidYouKnow;
