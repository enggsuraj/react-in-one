import "./App.css";
import { MovieList } from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
