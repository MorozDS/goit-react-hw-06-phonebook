import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistic';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const getKeys = () => Object.keys(feedback);

  const countTotalFeedback = () =>
    feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedbackPercentage = () => {
    if (!feedback.good && !feedback.neutral && !feedback.bad) return 0;
    else {
      return Math.round(
        (feedback.good / (feedback.good + feedback.neutral + feedback.bad)) *
          100
      );
    }
  };

  const handleClick = event => {
    const { name } = event.target;
    setFeedback(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className="main__header">Expresso Cafe Feedback Page</h1>
      <Section title="Please Leave Feedback">
        <FeedbackOptions options={getKeys()} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
