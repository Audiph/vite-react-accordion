import React from 'react';
import questions from '../data';
import Question from './Question';

const Questions = ({ toggleQuestion, activeId }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        );
      })}
    </>
  );
};

export default Questions;
