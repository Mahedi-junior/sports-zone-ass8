import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Games from "./components/Games/Games";
import Question from "./components/Question/Question";

function App() {
  return (
    <div>
      <Header></Header>
      <Games></Games>
      <Question></Question>
    </div>
  );
}

export default App;
