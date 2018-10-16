import React, { Component } from "react";
import mydata from "./data.json";
import "./App.css";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";
import ScrollTop from "./components/ScrollTop";
import Snow from "./components/snow";
//import SnowStorm from "react-snowstorm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: mydata.color.textColor,

      backgroundColor: [
        mydata.color.backgroundColor[0].bgColor,
        mydata.color.backgroundColor[1].bgColor,
        mydata.color.backgroundColor[2].bgColor
      ]
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.textColor === "blue") {
      this.setState({
        textColor: "rgb(73, 124, 247)",
        backgroundColor: [
          "rgba(250, 250, 250, 1)",
          "rgba(242, 242, 242, 0.85)",
          "rgba(250, 250, 250, 1)"
        ]
      });
    }
    if (this.state.textColor === "rgb(73, 124, 247)") {
      this.setState({
        textColor: "rgb(73,174, 227)",
        backgroundColor: [
          "rgba(242, 242, 242, 0.85)",
          "rgba(250, 252, 250, 1)",
          "rgba(241, 241, 241, 1)"
        ]
      });
    }
    if (this.state.textColor === "rgb(73,174, 227)") {
      this.setState({
        textColor: "white",
        backgroundColor: [
          "rgba(0,120,255,0.8)",
          "blue",
          "rgba(21,151, 252, 0.5)"
        ]
      });
    }
    if (this.state.textColor === "white") {
      this.setState({
        textColor: "blue",
        backgroundColor: [
          "rgba(252, 255, 252, 0.85)",
          "rgba(244, 254, 252, 0.85)",
          "rgba(252, 252, 242, 0.85)"
        ]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[1]}
          func={this.changeColor}
        />
        <Snow color={this.state.textColor} />

        {/* <SnowStorm  snowColor={this.state.textColor} /> */}
        {/* به صورت script خارج از <div id='root'></div> اجرا میشه propش تغییر نمی کنه  چون  */}

        <TitlesSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[0]}
        />

        <AboutSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[1]}
        />
        <SkillSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[2]}
          bgColorCard={this.state.backgroundColor[0]}
        />

        <ScrollTop color={this.state.textColor} />
      </div>
    );
  }
}

export default App;
