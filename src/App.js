import React from "react";
import LoginForm from "./component/login_form";
import "./App.scss";

const App = () => {
  return (
    <div>
      <div className="title">
        <h1 className="title__header">Choose a data range</h1>
        <p className="title__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing <br />
          elit. Sed voluptatibus ex eveniet optio tempora est
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default App;
