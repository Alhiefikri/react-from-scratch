import { Component } from "react";

class classBasedComponent extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
  };

  handleClick = () => {
    console.log("button clicked");

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  // componentDidMount
  // componentDidUpdate
  // componentwillUnmount

  componentDidMount() {
    console.log("this is called first time on page load");

    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log("component is getting unmounted");
  }

  render() {
    const { showText, changeColor, count, changeCountStyle } = this.state;

    console.log(changeCountStyle);

    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "red" : "green" }}>
            Class based Component
          </h3>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3
          style={{
            color: changeCountStyle ? "red" : "green",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {count}
        </h3>
      </div>
    );
  }
}

export default classBasedComponent;
