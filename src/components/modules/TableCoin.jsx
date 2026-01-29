import React from "react";
import TableRow from "./TableRow";
import styles from './TablCoin.module.css'
import {FadeLoader } from "react-spinners";
function TableCoin({ coins, isloding ,setBoxcriopto}) {
  return (
    <div className={styles.container}>
      {isloding ? (
       <FadeLoader color="#777dff" />
      ) : (
        <div>
          <table className={styles.table}>
            <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr></thead>
            <tbody>
            {coins.map((coins) => (
              <TableRow key={coins.id} setBoxcriopto={setBoxcriopto} coins={coins} />
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TableCoin;
