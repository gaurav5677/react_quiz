// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialStates{
  questions : [],
  status: "loading ",
};
 



export default function App() {

  const [state , dispatch] = useReducer(reducer , initialStates);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data.json()))
      .catch((err) => console.error("Error"));
  }, []);

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
