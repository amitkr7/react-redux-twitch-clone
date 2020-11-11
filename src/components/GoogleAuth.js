import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '834576056663-opgnr8hr2gn3pr0o1slph29rlngi10ts.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>Not Sure Signed In or Not</div>
        } else if(this.state.isSignedIn){
            return <div>Signed In</div>
        } else {
            return <div>Not Signed In</div>
        }
    }
  render() {
      return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
