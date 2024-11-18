import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CookieBanner from "react-cookie-banner";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  acceptCookies() {
    console.log("acceptCookies");
    document.getElementById("cookie-banner").style.display = "none";

    // Create a new script element
    var script = document.createElement("script");

    // Set the async attribute
    script.async = true;

    // Set the data-id attribute
    script.setAttribute("data-id", "101428403");

    // Set the src attribute
    script.src = "//static.getclicky.com/js";

    // Append the script element to the body
    document.body.appendChild(script);

    // Create a new anchor element
    var a = document.createElement("a");

    // Set the title attribute
    a.title = "Web Analytics";

    // Set the href attribute
    a.href = "https://clicky.com/101428403";

    // Create a new img element
    var img = document.createElement("img");

    // Set the alt attribute
    img.alt = "Clicky";

    // Set the src attribute
    img.src = "//static.getclicky.com/media/links/badge.gif";

    // Append the img element to the anchor element
    a.appendChild(img);

    // Append the anchor element to the body
    document.body.appendChild(a);
  }

  render() {
    return (
      <div>
        <div
          id="cookie-banner"
          style={{
            display: "static",
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "#f5f5f5",
            padding: "20px 0",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <p style={{ margin: 0, padding: "0 20px" }}>
            This website uses cookies to ensure you get the best experience.
            <a href="/privacy-policy">Learn more</a>
          </p>
          <button
            onClick={this.acceptCookies}
            style={{
              backgroundColor: "#4caf50",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "15px 2px",
              cursor: "pointer",
            }}
          >
            Got it!
          </button>
        </div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-france"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
