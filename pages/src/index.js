const React = require("react");
const {
  Article,
  Body,
  Main,
  H1,
  H2,
  H3,
  P,
  Section,
  Dl,
  Dt,
  Dd,
  Notification,
  Stepper,
} = require("react-alegrify-ui");

const Head = require("../../components/lib/head");
const Footer = require("../../components/lib/page-footer");

function Index() {
  return (
    <html lang="en" dir="ltr">
      <Head title="What is allowed?" />
      <Body>
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
          <div style={{ background: "radial-gradient(#ffffff, transparent)" }}>
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

        <Main spaceXL>
          <Stepper
            steps={["Phase 0", "Phase 1", "Phase 2", "Phase 3", "Phase 4"]}
            progress={20}
          />

          <H2 textStart spaceL>
            Latest updates
          </H2>
          <Article spaceXL>
            <H3 textStart>Update May 17th, 2020</H3>
            <P spaceL>Face masks will be mandatory when you go outside</P>
            <H3 textStart>Changes effective on May 18th (Phase 0.5)</H3>
            <ul className="alegrify-ul">
              <li className="alegrify-ul__li">Funerals will be allowed for up to 10 people</li>
              <li className="alegrify-ul__li">
                More shops will open and reservation won&acute;t be needed
              </li>
              <li className="alegrify-ul__li">
                Social services will start to reopen
              </li>
              <li className="alegrify-ul__li">
                Some musea, cultural and scientific centers will open, but for a limited amount of visitors
              </li>
              <li className="alegrify-ul__li">
                Regligious activities, but with limited capacity (1/3rd)
              </li>
            </ul>
          </Article>

          <H2 textStart spaceL>
            Frequently Asked Questions
          </H2>
          <Article spaceXL>
            <H3 textStart>Food, supermarket and pharmacy</H3>
            <Section>
              <Dl>
                <Dt>Can I go to the supermarket?</Dt>
                <Dd>Yes, you can, as well as to the pharmacy</Dd>
                <Dt>During what time can I go for sport?</Dt>
                <Dd>
                  Every morning between 6am and 10am and every evening between
                  8pm and 11pm
                </Dd>
                <Dt>At what time can I go buy my groceries?</Dt>
                <Dd>Any time, as long as the store is open.</Dd>
              </Dl>
            </Section>

            <H3 textStart>Sport</H3>
            <Section>
              <Dl>
                <Dt>Can I go for a run?</Dt>
                <Dd>
                  Yes, but only between 6am and 10am in the morning or between
                  8pm and 11pm in the evening
                </Dd>
                <Dt>How far can I walk?</Dt>
                <Dd>
                  For recreational purposes, you can walk only up till 1km away
                  from your home
                </Dd>
              </Dl>
            </Section>

            <H3 textStart>Pets</H3>
            <Section>
              <Dl>
                <Dt>Can I walk my dog?</Dt>
                <Dd>
                  Yes, you can walk the dog and you do not have to do it during
                  the fixed time slots, those are only for sporting.
                </Dd>
              </Dl>
            </Section>

            <H3 textStart>Social</H3>
            <Section>
              <Dl>
                <Dt>Can I meet with my friends?</Dt>
                <Dd>
                  No, that is not allowed at this time. Unless of course it is a
                  virtual meeting.
                </Dd>
              </Dl>
            </Section>
          </Article>

          <Notification info title="About this page">
            <P>
              This website is a summary for all expats stranded in Barcelona
              during the COVID-19 pandemic. We&acute;re collecting all
              information and trying hard to write it in a human readable way.
              The information is based on reliable sources like news sites,
              articles, etc. However, the owner of this website cannot be held
              accountable if any information is incorrect or out of date. If you
              find any information that is incorrect, feel free to{" "}
              <a
                className="alegrify-a"
                href="https://m.me/alegrify"
                title="Contact us"
                target="_blank"
                rel="noreferrer noopener"
              >
                reach out
              </a>
              .
            </P>
          </Notification>
        </Main>
        <Footer />
      </Body>
    </html>
  );
}

module.exports = Index;
