const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = path => async (request, response, next) => {
  let app = null;

  // load the app; otherwise skip to next in chain
  try {
    app = require(`${path}${request.path}.js`).default;
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      return next();
    } else {
      return next(error);
    }
  }

  // run the app
  let output = app(request, response, next);

  // optionally render and send the response
  if (output && !response.writableEnded) {
    if (React.isValidElement(output)) {
      output = ReactDOMServer.renderToString(output);
    }

    response.send(output);
  }
}
