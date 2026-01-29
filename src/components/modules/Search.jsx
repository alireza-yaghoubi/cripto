import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";
import style from "./Search.module.css";
import BoxSearch from "./BoxSearch";
function Search({ curency, setCurency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [isloding, setLoding] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setCoins([])
    if (!search) return;
    setLoding(true);
    const getData = async () => {

      try {
        const res = await fetch(searchCoin(search), {
          signal: controller.signal,
        });
        const json = await res.json();

        if (json.coins) {setCoins(json.coins); setLoding(false)}else{
          alert(json.status.error_message);
        }

      } catch (error) {
        if(error.name != "AbortError"){
          alert(error.message)
        }
      }

    };
    getData();
    setLoding(true);
    return () => controller.abort();
  }, [search]);
  return (
    <div className={style.continer}>
      <input
        className={style.searchinput}
        type="text"
        value={search}
        placeholder="Search Your Favorite Coin"
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className={style.targetserch}
        value={curency}
        onChange={(e) => setCurency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {search ? <BoxSearch search={search} isloding={isloding} coins={coins} /> : ""}
    </div>
  );
}

export default Search;
