import chartdown from "../../assets/chart-down.svg";
import chartup from "../../assets/chart-up.svg";
import styles from "./TablCoin.module.css";
import { chartcoin } from "../../services/cryptoApi";
const TableRow = ({ coins, setBoxcriopto }) => {
  const {
    id,
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
  } = coins;
  const showhandeler = async () => {
    try {
      const res = await fetch(chartcoin(id));
      const json = await res.json();
      setBoxcriopto({... json,coins});
    } catch (error) {
      alert(error);
    }
  };
  return (
    <tr>
      <td>
        <div onClick={showhandeler} className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td
        className={
          price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {price_change_percentage_24h.toFixed(2)}
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartup : chartdown}
          alt={name}
        />
      </td>
    </tr>
  );
};
export default TableRow;
