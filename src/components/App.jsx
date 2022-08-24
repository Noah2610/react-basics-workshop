import Header from "./Header";
import Button from "./Button";
import ShoppingList from "./ShoppingList";
import Person from "./Person";

function App() {
  return (
    <>
      <Header title="Hello Props!" />
      <Button />
      <ShoppingList />
      <Person />
      <Person />
      <Person />
    </>
  );
}

export default App;