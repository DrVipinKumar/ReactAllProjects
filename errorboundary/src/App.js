import "./App.css";
import ChangeColorOnClick from "./component/ChangeColorOnClick";
import ChangeColorProps from "./component/ChangeColorProps";

function App() {
  return (
    <div className="App">
      <ChangeColorProps
        render={(color, changeColor) => {
          return <ChangeColorOnClick color={color} changeColor={changeColor} />;
        }}
      />
    </div>
  );
}

export default App;
