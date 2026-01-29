import React from "react";
import style from "./Searchbox.module.css";
import { FadeLoader } from "react-spinners";

function BoxSearch({ coins, isloding ,search}) {
  return (
    <div className={style.continerSearch}>
      {isloding ? (
        <div className={style.loding}>
         <FadeLoader color="#777dff" />
        </div>
      ) : coins && coins.length > 0 ? (
        coins.map((i) => (
          <div className={style.calemsCoine} key={i.id}>
            <img src={i.large} alt={i.id} />
            <p>{i.name}</p>
          </div>
        ))
      ) : (
        <p>Is Not Difaind : {search}</p>
      )}
    </div>
  );
}

export default BoxSearch;
