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
  Notification,
  Stepper,
  Grid,
  GridCell,
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
            steps={[
              "Phase 0",
              "Phase 1",
              "Phase 2",
              "Phase 3",
              "New normality",
            ]}
            progress={100}
            spaceXL
          />

          <H1 id="end"> New normality</H1>

          <Grid>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>Since when?</H2>
                <Section>June 21st</Section>
              </Article>
            </GridCell>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>What is the current state?</H2>
                <Section>
                  Everything should be back to normal, but face masks will still be required in situtations where you cannot leave enough distance.
                  New quarantines can occur when numbers start to rise again...
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
