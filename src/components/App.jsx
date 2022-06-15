// import { Component } from 'react';
import { useState } from 'react';
import Section from './Section/section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
export const App = () => {
  const [feedbackOptions, setFeedbackoption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const leaveFeedback = option =>
    setFeedbackoption(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackOptions;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackOptions;
    if (countTotalFeedback() === 0) {
      return 0;
    } else return Math.round((good / countTotalFeedback()) * 100);
  };
  const { good, neutral, bad } = feedbackOptions;
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={leaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
