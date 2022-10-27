import "./App.css";
import Form from "./Form";
import Thing from "./Thing";
import { AuthProvider } from "./store";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <Form />
          <Thing />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
