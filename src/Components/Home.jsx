import { useState } from "react";

export default function Home() {
    const [temp, setTemp] = useState(0)
    const [res, setRes] = useState(0)
    const [c,setC] = useState(0)
    const [f, setF] = useState(0)
    const[main,setMain] = useState(0)
    const ConvFromCToF = (temp) => {
        const res = (temp * 1.8) + 32;
        setRes(res)
    }
    const ConvFromFToC = (temp) => {
        const res = (temp -32) /1.8;
        setRes(res)
    }
    return (
        <>  {!main ?
            <div className="buttons">
                <button onClick={() => { setC(1); setMain(1) }}>°C To °F</button>
                <button onClick={() => { setF(1); setMain(1) }}> °F To °C</button>
            </div> : ""
        }
            {c ?
                <div className="C-converter">
                    <div className="inputDiv">
                        <input
                            type="number"
                            placeholder="Enter Temp in °C"
                            onChange={(e) => setTemp(e.target.value)}
                        />
                        <button onClick={() => ConvFromCToF(temp)}>Convert</button>
                    </div>
                    <h2 className="res"> {res.toFixed(1)} °F</h2>
                </div>:""
            }
            {f ?
                <div className="F-converter">
                    <div className="inputDiv">
                        <input
                            type="number"
                            placeholder="Enter Temp in °F"
                            onChange={(e) => setTemp(e.target.value)}
                        />
                        <button onClick={() => ConvFromFToC(temp)}>Convert</button>
                    </div>
                    <h2 className="res"> {res.toFixed(1)} °C</h2>
                </div>:""
            }
            {main ? <button className="back" onClick={() => { setMain(0); setF(0); setC(0); setRes(0)}}>Back</button>:""}
      </>
    );
}
