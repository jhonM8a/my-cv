import React from "react";
import NavBar from "../components/NavBar";
import ContentTrayectory from "../components/ContentTrayectory";

class Trayectory extends React.Component {
  state = {
    showCollpase: false,
    count: 1,
  };

  handleOnclick = (e) => {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count % 2 === 0) {
      this.setState({
        showCollpase: true,
      });
    } else {
      this.setState({ showCollpase: false });
    }
  };
  render() {
    return (
      <div>
        <NavBar
          showCollpase={this.state.showCollpase}
          handleOnclick={this.handleOnclick}
        ></NavBar>
        <ContentTrayectory></ContentTrayectory>
      </div>
    );
  }
}

export default Trayectory;
