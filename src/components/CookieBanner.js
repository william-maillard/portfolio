import React, { Component } from "react";

class CookieBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanner: true,
      acceptedCookies: false,
    };
  }

  acceptCookies = () => {
    this.setState({ acceptedCookies: true });
  };

  componentDidUpdate(prevProps, prevState) {
    // Check if the acceptedCookies state has changed to true
    if (this.state.acceptedCookies && !prevState.acceptedCookies) {
      // Load your data analytics script here
      this.loadAnalyticsScript();
    }
  }

  loadAnalyticsScript() {
    // add the script to the page
    var script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-id", "101428403");
    script.src = "//static.getclicky.com/js";
    document.body.appendChild(script);

    // display a link to the analytics page
    var a = document.createElement("a");
    a.title = "Web Analytics";
    a.href = "https://clicky.com/101428403";

    var img = document.createElement("img");
    img.alt = "Clicky";
    img.src = "//static.getclicky.com/media/links/badge.gif";
    a.appendChild(img);

    document.body.appendChild(a);
  }

  render() {
    const { showBanner, acceptedCookies } = this.state;

    if (!showBanner || acceptedCookies) {
      return null; // Do not render the banner if it's closed or cookies are accepted.
    }

    return (
      <div
        id="cookie-banner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Glass pane effect
          zIndex: 1000,
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p>
            This website uses cookies to ensure you get the best experience on
            our website. <a href="/privacy-policy">Learn more</a>
          </p>
          <button
            onClick={this.acceptCookies}
            style={{
              backgroundColor: "#4caf50",
              border: "none",
              color: "white",
              padding: "15px 32px",
              fontSize: "16px",
              margin: "15px 10px",
              cursor: "pointer",
            }}
          >
            Accept
          </button>
          <button
            onClick={this.rejectCookies}
            style={{
              backgroundColor: "#f44336",
              border: "none",
              color: "white",
              padding: "15px 32px",
              fontSize: "16px",
              margin: "15px 10px",
              cursor: "pointer",
            }}
          >
            Reject
          </button>
        </div>
      </div>
    );
  }
}

export default CookieBanner;
