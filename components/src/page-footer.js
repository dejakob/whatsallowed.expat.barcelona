const React = require("react");
const { A, Footer, Grid, GridCell, Dl, Dt, Dd } = require("react-alegrify-ui");

const propTypes = {};
const defaultProps = {};

function PageFooter() {
  return (
    <Footer>
      <div className="alegrify-main">
        <Grid>
          <GridCell three textCenter>
            <Dl>
              <Dt>Made with</Dt>
              <Dd>❤</Dd>
              <Dt>Pictures by</Dt>
              <Dd>
                <A
                  href="https://www.pexels.com/photo/city-spain-dense-17658/"
                  title="Check out her pictures on Pexels.com"
                  target="_blank"
                >
                  Adrianna
                </A>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Built with</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <A
                    href="https://dejakob.com/alegrify-ui"
                    title="Alegrify User Interface"
                    target="_blank"
                  >
                    Alegrify UI
                  </A>
                </div>
                <div className="alegrify-space--small">
                  <A
                    href="https://dejakob.com/react-alegrify-ui"
                    title="React implementation of Alegrify UI"
                    target="_blank"
                  >
                    React Alegrify UI
                  </A>
                </div>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Get in touch</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <A
                    className="alegrify-a"
                    href="https://m.me/alegrify"
                    title="Is something missing?"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Contact
                  </A>
                </div>
                <div className="alegrify-space--small">
                  <A
                    href="https://github.com/dejakob/whatsallowed.expat.barcelona"
                    title="Contribute via GitHub"
                    target="_blank"
                  >
                    Contribute
                  </A>
                </div>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Other projects</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <A
                    href="https://alegrify.com"
                    title="Your personal guide to a happier lifestyle"
                    target="_blank"
                  >
                    Alegrify
                  </A>
                </div>
                <div className="alegrify-space--small">
                  <A
                    href="https://coronafreehug.com/"
                    title="Share Coronafree hug"
                    target="_blank"
                  >
                    Coronafreehug.com
                  </A>
                </div>
              </Dd>
            </Dl>
          </GridCell>
        </Grid>
      </div>
    </Footer>
  );
}

PageFooter.propTypes = propTypes;
PageFooter.defaultProps = defaultProps;

module.exports = PageFooter;
