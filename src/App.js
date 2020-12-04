import React, { Component } from 'react';
import Section from './components/Section/section';
import Statistics from './components/Statistics/statistics';
import FeedbackOptions from './components/FeedbackOptions/feedbackOptions';
import Notification from './components/Notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  handleFeedback = ({ target }) => {
    const type = target.dataset.action;
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'bad', 'neutral'];
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackCount}
              positiveFeedbackPercentage={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
