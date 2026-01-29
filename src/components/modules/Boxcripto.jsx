import React, { useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts";

import style from "./Boxcripto.module.css";
import { convertData } from "../../helpers/convertData";


function Boxcripto({ setBoxcriopto, boxcriopto }) {
  
  const [type, setType] = useState("prices");
 
  return (
    <div className={style.continer}>
      <span onClick={() => setBoxcriopto(null)} className={style.exit}>
        X
      </span>
      <div className={style.chart}>
        <div className={style.name}>
          <img src={boxcriopto.coins.image} alt="" />
          <h2>{boxcriopto.coins.name}</h2>
        </div>
        <div className={style.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={400}
              data={convertData(boxcriopto, type)}
            >
              <Line
                type="monotone"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto","auto"]}/>
              <XAxis dataKey="data" hide />
              <Legend />
              <Tooltip/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={style.butems}>
          <button className={type=="prices" ? style.activ : ""} onClick={()=>setType("prices")}>Prices</button>
          <button  className={type=="market_caps" ? style.activ : ""} onClick={()=>setType('market_caps')}>Market Caps</button>
          <button  className={type=="total_volumes" ? style.activ : ""} onClick={()=>setType('total_volumes')}>Total Volumes</button>
        </div>

        
      </div>
    </div>
  );
}

export default Boxcripto;
