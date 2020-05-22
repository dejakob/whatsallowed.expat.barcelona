const React = require("react");
const {
  A,
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
  Li,
  Ul,
} = require("react-alegrify-ui");

const Head = require("../../components/lib/head");
const Header = require("../../components/lib/header");
const Footer = require("../../components/lib/page-footer");

function Index() {
  return (
    <html lang="en" dir="ltr">
      <Head title="What is allowed?" />
      <Body>
        <Header />

        <Main spaceXL>
          <Stepper
            steps={["Phase 0", "Phase 1", "Phase 2", "Phase 3", "Phase 4"]}
            progress={20}
            spaceXL
          />

          <H1>Current phase (0.5)</H1>

          <Grid reverse>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>Update May 22nd, 2020</H2>
                <Section>
                  <P spaceL>
                    Health minister Salvador Illa confirmed that Barcelona will
                    move to phase 1 on Monday May 25th.
                  </P>
                  <P spaceL>
                    In this phase, some terraces can open for a limited amount
                    of people and social gatherings are allowed up till ten
                    people.
                  </P>
                </Section>
                <H2 textStart>Update May 21st, 2020</H2>
                <Section>
                  <P spaceL>
                    As of Thursday May 21st, face masks will be required when
                    going outside and inside in public places. There are of
                    course some exceptions if you cannot wear a face mask for
                    health reasons or if you&acute;re doing intense sports such
                    as running or if you can keep a 2m distance at all times.
                  </P>
                </Section>
                <H2 textStart>Update May 20th, 2020</H2>
                <Section>
                  <P spaceL>
                    According to{" "}
                    <A
                      title="Article regarding walking on the beach"
                      target="_blank"
                      href="https://www.elperiodico.com/es/barcelona/20200516/barcelona-abrira-playas-pasear-miercoles-6-20-horas-7964091"
                    >
                      El Periodico
                    </A>
                    , walking on the beach will be allowed from May 20th (but
                    only between 6am and 8pm). Surfing would be allowed as well,
                    but only between 20h and 23h.
                  </P>
                  <P spaceL>
                    All city parks will reopen. Some of them will even open
                    sooner, so you can walk during the permitted timeframes.
                  </P>
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

                <H2 textStart>Face masks</H2>
                <Section>
                  <Dl>
                    <Dt>Do I have to wear a face mask?</Dt>
                    <Dd>
                      As of Thursday May 21st, you are required to wear a face
                      mask when walking outside
                    </Dd>
                    <Dt>
                      Do I need to wear a face mask when doing intense sport
                      (e.g. running)?
                    </Dt>
                    <Dd>
                      According to the Health minister not. This would be an
                      exception where wearing a face mask is incompatible with
                      carrying out activities.
                      <br />
                      However, it is always recommended to wear a face mask
                    </Dd>
                    <Dt>Where can I get a face mask?</Dt>
                    <Dd>
                      You can get one face mask for free when going to the
                      pharmacy by showing your blue card of the public health
                      insurance. Amazon is also selling face masks, but their
                      delivery times can take up to a month.
                    </Dd>
                    <Dt>Do I need to wear a mask when I&acute;m alone?</Dt>
                    <Dd>
                      No. Masks are only required when you cannot preserve a
                      distance of 2 meter between yourself and other people.
                      However, it&acute;s better to always have a mask with you
                      for when you cannot preserve this distance.
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

          <H1>Phase 1: (Monday May 25th)</H1>

          <Grid reverse>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>When?</H2>
                <Section>
                  Barcelona metropolitan area will be able to move to phase one
                  on Monday May 25th (confirmed on May 22nd, 2020)
                </Section>
              </Article>
            </GridCell>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>What will change? (most probably)</H2>
                <Section>
                  <Ul spaceL>
                    <Li>Social gatherings of up to 10 people</Li>
                    <Li className="alegrify-ul__li">
                      Some terraces and restaurants might open with limited
                      spaces
                    </Li>
                  </Ul>
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
              <A
                className="alegrify-a"
                href="https://m.me/alegrify"
                title="Contact us"
              >
                reach out
              </A>
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
