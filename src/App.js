import "./App.css";
import Body from "./component/Body/Body";
import "./component/Header/Header";
import Header from "./component/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <div>
        <div>
          <h5>1. Difference between props and state?</h5>
          <p>
            Ans: Propsare a Component's configuration. They are received from
            above and immutable as far as the Component receiving them is
            concerned. Props can not be modified. This is read only. On the
            otherhand The state is a data structure that starts with a default
            value when a Component mounts.It can be modified. State changes acn
            be asynchronous.
          </p>
        </div>
        <div>
          <h5>2. How useState works?</h5>
          <p>
            Ans: useState is a Hook that allows you to have state variables in
            functional components. You pass the initial state to this function
            and it returns a variable with the current state value and another
            function to update this value.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
