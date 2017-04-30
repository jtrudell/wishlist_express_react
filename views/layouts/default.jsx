import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link href="node_modules/materialize-css/bin/materialize.css" rel="stylesheet" type="text/css" media="screen"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
          {this.props.children}
          <script src="node_modules/jquery/dist/jquery.js"></script>
          <script src="node_modules/materialize-css/bin/materialize.js"></script>
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout;

