import React, { useEffect, useState } from "react";

import TableCoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/pagination";
import Search from "../modules/Search";
import Boxcripto from "../modules/Boxcripto";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isloding, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [curency, setCurency] = useState("usd");
  const [boxcriopto, setBoxcriopto] = useState(null);
  useEffect(() => {
    setLoding(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page,curency));
      const json = await res.json();
      setCoins(json);
      setLoding(false);
    };
    getData();
  }, [page,curency]);
  return (
    <div>
      <Search setCurency={setCurency} curency={curency} />
      <TableCoin setBoxcriopto={setBoxcriopto} coins={coins} isloding={isloding} />
      <Pagination page={page} setPage={setPage} />
      {!!boxcriopto &&  <Boxcripto boxcriopto={boxcriopto} setBoxcriopto={setBoxcriopto} />}
      
    </div>
  );
}

export default HomePage;
