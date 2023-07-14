import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { minutes: 0 };
  }

  tick() {
    this.setState((state) => ({
      minutes: state.minutes + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Minutes: {this.state.minutes}</div>
    )
  }
}

export default Timer;