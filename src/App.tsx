import "./styles.css";
import "../index.js";

export default function App() {
  return (
    <div className="App">
      <h1>MEAL FINDER</h1>
      <div className="container">
        <input type="search" className="search_bar" placeholder="mealnames" />
        <button className="search">SEARCH</button>
      </div>
    </div>
  );
}
