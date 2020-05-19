const React = require("react");
const { Main, H1, P } = require("react-alegrify-ui");

const propTypes = {};

function Header() {
  return (
    <div
      style={{
        backgroundImage: "url(/barcelona.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        marginTop: "-32px",
        paddingTop: "32px",
      }}
      className="alegrify-space--extra-large"
    >
      <div
        style={{
          background: "radial-gradient(#000000, transparent)",
          paddingTop: "1px",
        }}
      >
        <Main>
          <H1 textCenter>
            <span
              className="alegrify-align-child--center"
              role="img"
              aria-label="Virus icon"
              style={{
                fontSize: "9rem",
                display: "block",
                lineHeight: "12rem",
              }}
            >
              🦠
            </span>
            What&acute;s allowed?
          </H1>
          <P spaceXL textCenter>
            Your guide through insane times in Barcelona
          </P>
        </Main>
      </div>
    </div>
  );
}

Header.propTypes = propTypes;

module.exports = Header;
