import Message from "./components/Message";
import Header from "./veiws/layouts/Header";

function App() {
  const text = 'Hello, my name is Konstantin';

  return (
    <div className="App">
      <Header />
      <Message text={text} />
    </div>
  );
}

export default App;
