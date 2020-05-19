const React = require("react");
const {
  Article,
  Body,
  Main,
  H1,
  H2,
  P,
  Section,
  Dl,
  Dt,
  Dd,
  Notification,
  Stepper,
  Grid,
  GridCell,
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

        <Main spaceXL>
          <div className="alegrify-space--extra-large">
            <Stepper
              steps={["Phase 0", "Phase 1", "Phase 2", "Phase 3", "Phase 4"]}
              progress={20}
            />
          </div>

          <H1>Current phase (0.5)</H1>

          <Grid reverse>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>Update May 20th, 2020</H2>
                <Section>
                  <P spaceL>
                    According to{" "}
                    <a
                      title="Article regarding walking on the beach"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="alegrify-a"
                      href="https://www.elperiodico.com/es/barcelona/20200516/barcelona-abrira-playas-pasear-miercoles-6-20-horas-7964091"
                    >
                      El Periodico
                    </a>
                    , walking on the beach will be allowed from May 20th (but
                    only between 6am and 8pm). Surfing would be allowed as well,
                    but only between 20h and 23h.
                  </P>
                  <P spaceL>
                    All city parks will reopen. Some of them will even open
                    sooner, so you can walk during the permitted timeframes.
                  </P>
                </Section>
                <H2 textStart>Update May 17th, 2020</H2>
                <Section>
                  <P>
                    According to{" "}
                    <a
                      href="https://www.lavanguardia.com/vida/20200517/481215986115/coronavirus-gobierno-aprobara-uso-obligatorio-mascarilla-lugares-publicos.html"
                      title="Article regarding facemasks"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="alegrify-a"
                    >
                      La Vanguardia
                    </a>
                    , face masks will be mandatory when you go outside. If you
                    don&acute;t have a face mask, you can get one for free at
                    the pharmacy, when you show your blue card (of the public
                    health insurance).
                  </P>
                </Section>
                <H2 textStart>Changes effective on May 18th (Phase 0.5)</H2>
                <Section>
                  <ul className="alegrify-ul">
                    <li className="alegrify-ul__li">
                      Funerals will be allowed for up to 10 people
                    </li>
                    <li className="alegrify-ul__li">
                      More shops will open and reservation won&acute;t be needed
                    </li>
                    <li className="alegrify-ul__li">
                      Social services will start to reopen
                    </li>
                    <li className="alegrify-ul__li">
                      Some musea, cultural and scientific centers will open, but
                      for a limited amount of visitors
                    </li>
                    <li className="alegrify-ul__li">
                      Education centers, universities and libraries will also
                      reopen
                    </li>
                    <li className="alegrify-ul__li">
                      Regligious activities, but with limited capacity (1/3rd)
                    </li>
                  </ul>
                </Section>
              </Article>
            </GridCell>

            <GridCell six>
              <Article spaceXL>
                <H2 textStart>Food, supermarket and pharmacy</H2>
                <Section>
                  <Dl>
                    <Dt>Can I go to the supermarket?</Dt>
                    <Dd>Yes, you can, as well as to the pharmacy</Dd>
                    <Dt>During what time can I go for sport?</Dt>
                    <Dd>
                      Every morning between 6am and 10am and every evening
                      between 8pm and 11pm
                    </Dd>
                    <Dt>At what time can I go buy my groceries?</Dt>
                    <Dd>Any time, as long as the store is open.</Dd>
                    <Dt>Can I go to a restaurant?</Dt>
                    <Dd>
                      You can go to a restaurant to take away a meal. You cannot
                      eat inside a restaurant (yet)
                    </Dd>
                  </Dl>
                </Section>

                <H2 textStart>Sport</H2>
                <Section>
                  <Dl>
                    <Dt>Can I go for a run?</Dt>
                    <Dd>
                      Yes, but only between 6am and 10am in the morning or
                      between 8pm and 11pm in the evening
                    </Dd>
                    <Dt>How far can I walk?</Dt>
                    <Dd>
                      For recreational purposes, you can walk only up till 1km
                      away from your home
                    </Dd>
                    <Dt>Can I walk on the beach?</Dt>
                    <Dd>Yes, but only during morning hours.</Dd>
                  </Dl>
                </Section>

                <H2 textStart>Pets</H2>
                <Section>
                  <Dl>
                    <Dt>Can I walk my dog?</Dt>
                    <Dd>
                      Yes, you can walk the dog and you do not have to do it
                      during the fixed time slots, those are only for sporting.
                    </Dd>
                  </Dl>
                </Section>

                <H2 textStart>Social</H2>
                <Section>
                  <Dl>
                    <Dt>Can I meet with my friends?</Dt>
                    <Dd>
                      No, that is not allowed at this time. Unless of course it
                      is a virtual meeting.
                    </Dd>
                  </Dl>
                </Section>
              </Article>
            </GridCell>
          </Grid>

          <H1>Upcoming phase (phase 1)</H1>

          <Grid reverse>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>When?</H2>
                <Section>
                  Hopefully the city of Barcelona will be able to move to phase
                  one on Monday May 25th
                </Section>
              </Article>
            </GridCell>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>What will change? (most probably)</H2>
                <Section>
                  <ul className="alegrify-ul alegrify-space--large">
                    <li className="alegrify-ul__li">
                      Social gatherings of up to 10 people
                    </li>
                    <li className="alegrify-ul__li">
                      Face masks required when going out
                    </li>
                    <li className="alegrify-ul__li">
                      Some terraces and restaurants might open with limited
                      spaces
                    </li>
                  </ul>
                  <P>
                    It is at this time unclear whether or not the fixed
                    timetables for walking/exercising will be removed.
                  </P>
                </Section>
              </Article>
            </GridCell>
          </Grid>

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
