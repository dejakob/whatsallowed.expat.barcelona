const React = require("react");
const { Footer, Grid, GridCell, Dl, Dt, Dd } = require("react-alegrify-ui");

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
                <a
                  className="alegrify-a"
                  href="https://www.pexels.com/photo/city-spain-dense-17658/"
                  title="Check out her pictures on Pexels.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Adrianna
                </a>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Built with</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://dejakob.com/alegrify-ui"
                    title="Alegrify User Interface"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Alegrify UI
                  </a>
                </div>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://dejakob.com/react-alegrify-ui"
                    title="React implementation of Alegrify UI"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    React Alegrify UI
                  </a>
                </div>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Get in touch</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://m.me/alegrify"
                    title="Is something missing?"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Contact
                  </a>
                </div>
              </Dd>
            </Dl>
          </GridCell>
          <GridCell three textCenter>
            <Dl>
              <Dt>Other projects</Dt>
              <Dd>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://alegrify.com"
                    title="Your personal guide to a happier lifestyle"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Alegrify
                  </a>
                </div>
                <div className="alegrify-space--small">
                  <a
                    className="alegrify-a"
                    href="https://coronafreehug.com/"
                    title="Share Coronafree hug"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Coronafreehug.com
                  </a>
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
