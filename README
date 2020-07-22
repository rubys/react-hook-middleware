Converts your express web server into a React Application Server

### QuickStart

    yarn add @rubys/react-hook-middleware

    const middleware = require('@rubys/react-hook-middleware');

    app.use(middleware(appDir));

Start your web server, and `.js` files dropped into the `appDir` directory
will be served as web applications.

The requirements for application files to be served:

    - they must import 'React'
    - they must export a default function
    - this function must either return a result (typically a JSX element)
      or send a response or call the next function.

To run the demo:

    git clone https://github.com/rubys/react-hook-middleware.git
    cd react-hook-middleware
    yarn install
    yarn demo
