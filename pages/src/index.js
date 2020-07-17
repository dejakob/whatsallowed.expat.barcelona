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
  Ul,
  Li,
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
          <H1 id="end">COVID-19 in summer</H1>

          <Grid>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>Current status</H2>
                <Section>
                  <Ul>
                    <Li>You are required to wear a mask when going outside or to any public place.</Li>
                    <Li>Gyms, clubs and some other activities will probably close again</Li>
                    <Li>Bars and restaurants can only allow limited capacity</Li>
                  </Ul>
                </Section>
              </Article>
            </GridCell>
            <GridCell six>
              <Article spaceXL>
                <H2 textStart>Update July 17th</H2>
                <Section>
                  The Catalan government <strong>recommends</strong> to stay inside again. <br />
                  They will apply more restrictions due to recent increases on the number of infections.
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
