import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coinData, setCoinData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setCoinData(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = coinData.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  function handleOnChange(event) {
    // event.preventDefault();
    const searchWord = event.target.value;

    return setSearch(searchWord);
  }
  console.log(search);
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input onChange={handleOnChange} type="text" placeholder="Search..." />
      </div>

      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
