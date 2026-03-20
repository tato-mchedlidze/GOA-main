import Greeting from "./components/Greeting";
import Card from "./components/card";

function App() {
  return (
    <div>
      <Greeting name="tato" />
      <Greeting />

      <Card>
        <h3>This is inside the card</h3>
        <p>Any content can go here</p>
      </Card>
    </div>
  );
}

export default App;
