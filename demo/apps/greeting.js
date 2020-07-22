import React from 'react';

export default request => {
  let { name } = request.body;

  return <html>
    <head>
      <title>Greeting demo</title>
    </head>

    <body>
      <h1>Greeting Demo</h1>

      {request.method === 'GET' ?
        <>

          <form method="post">
            <label htmlFor="name">Enter your name: </label>
            <input id="name" name="name"/>
          </form>

        </> : <>

          <p>Hello {name}!</p>

        </>}
    </body>
  </html>
}
