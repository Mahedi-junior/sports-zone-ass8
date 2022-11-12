import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question">
      <p className="answer1">
        <h2>1..How does React Work</h2>
        <small>Answer: </small> React was originally created for Facebook
        development,it's not a library,it's a framework. ..When the developer
        was working with Dom they realized Dom was very slow, so they started
        using React. React basically creates a virtual DOM in the browser and
        its job is to find out how to change something in the browser's DOM the
        fastest. Then React changes the main Dom immediately. React can only
        send data to one side. It sends data from the top to the bottom
        component.
      </p>

      <div className="answer2">
        <h2>2..State Vs Props</h2>
        <p>
          <small>Answer: </small> State is like localstroge because it stores
          the data of the component. It can be changed or changed depending on
          the user. What will be in the state component and what will be shown
          to the user, how it will change in case of any event is controlled by
          the user's UI state. The state is basically called the hart of the
          react component.
        </p>

        <p>
          <small>Answer: </small>Props are basically used to send data from one
          component to another. Props are immutable which means its data cannot
          be sent to any other component. Props are sent to component like HTML
          attributes.
        </p>
      </div>
      <div className="">
        <h2>3..useEffect is used for any purpose other than loading data?</h2>
        <h3>6 use cases of the useEffect ReactJS hook</h3>
        <p>
          <li>1. Side Effect Runs After Every Render</li>
          <li>2. Side Effect Runs Only Once After Initial Render</li>
          <li>3. Side Effect Runs After State Value Changes</li>
          <li>4. Side Effect Runs After Props Value Change</li>
          <li>5. Side Effect Runs After Props and State Value Change</li>
          <li>6. Side EffectCleanup</li>
        </p>
      </div>
    </div>
  );
};

export default Question;
