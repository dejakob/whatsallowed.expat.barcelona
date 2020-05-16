const React = require("react");
const PropTypes = require("prop-types");

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};

function Head({ title, children }) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes"
      />
      <meta name="keywords" content="covid, coronavirus, barcelona, expat" />
      <meta
        name="description"
        content="What am I allowed to do in Barcelona during the state of Alarm? This website gives relevant information on what is and is not allowed during these weird times."
      />
      <meta
        property="og:description"
        content="What am I allowed to do in Barcelona during the state of Alarm? This website gives relevant information on what is and is not allowed during these weird times."
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="" />
      <meta name="theme-color" content="#4e4cc1" />
      <meta name="msapplication-TileColor" content="#4e4cc1" />
      {children}
      <link
        rel="stylesheet"
        href="https://dejakob.com/alegrify-ui/alegrify-ui--article.min.css"
      />
      <link id="favicon" rel="icon" type="image/x-icon" href="/favicon.ico" />

      <title>{title}</title>
    </head>
  );
}

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

module.exports = Head;
