import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
          {this.props.children}
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>=
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout;

