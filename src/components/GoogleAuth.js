import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '834576056663-opgnr8hr2gn3pr0o1slph29rlngi10ts.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
