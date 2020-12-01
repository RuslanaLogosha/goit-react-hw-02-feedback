import React from 'react';

class Section extends React.Component {
  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleGoodIncrement = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
        total: prevState.total + 1,
      }),
      () => {
        this.setState(prevState => ({
          positiveFeedback: (prevState.positiveFeedback = Math.round(
            (this.state.good /
              this.state.total) *
              100,
          )),
        }));
      },
    );
  };

  handleNeutralIncrement = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
      }),
      () => {
        this.setState(prevState => ({
          positiveFeedback: (prevState.positiveFeedback = Math.round(
            (this.state.good /
              this.state.total) *
              100,
          )),
        }));
      },
    );
  };

  handleBadIncrement = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
        total: prevState.total + 1,
      }),
      () => {
        this.setState(prevState => ({
          positiveFeedback: (prevState.positiveFeedback = Math.round(
            (this.state.good /
              this.state.total) *
              100,
          )),
        }));
      },
    );
  };

  render() {
    return (
      <div>
        <h3>
          Please leave your feedback
        </h3>
        <button
          type="button"
          onClick={
            this.handleGoodIncrement
          }
        >
          Good
        </button>
        <button
          type="button"
          onClick={
            this.handleNeutralIncrement
          }
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={
            this.handleBadIncrement
          }
        >
          Bad
        </button>

        <h3>Statistics</h3>
        <span>
          Good:{this.state.good}
        </span>
        <span>
          Neutral:{this.state.neutral}
        </span>
        <span>
          Bad:{this.state.bad}
        </span>
        <span>
          Total:{this.state.total}
        </span>
        <span>
          Positive feedback:
          {this.state.positiveFeedback}%
        </span>
      </div>
    );
  }
}

// function onPositiveFeedbackChange(){
//     let pF = Section.state.good / Section.state.total * 100;
//     return pF;
// }

export default Section;

//<FeedbackOptions options={ } onLeaveFeedback={ } />
//<Statistics good={} neutral={} bad={} total={} positivePercentage={}/>
