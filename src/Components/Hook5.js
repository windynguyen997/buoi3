import React, { useState } from 'react';

const Hook5 = () => {
    const [A, setA]=useState('')
    const [B, setB]=useState('')
    const [kq, setKq] = useState(0)
    const Cong = () => {
        setKq(A*1+B*1)
    }
    const Tru = () => {
        setKq(A-B)
    }
    const Nhan = () => {
        setKq(A*B)
    }
    const Chia = () => {
        setKq(A/B)
    }
    console.log(Cong)
    return (
        <div>
            <label>Nhập A </label><input placeholder='nhập A' value={A} onChange={(e)=>setA(e.target.value)} ></input> <br></br>
            <label>Nhập B </label><input placeholder='nhập B'value={B} onChange={(e)=>setB(e.target.value)}></input><br></br>
            <button onClick={Cong}>Cộng</button>
            <button onClick={Tru}>Trừ</button>
            <button onClick={Nhan}>Nhân</button>
            <button onClick={Chia}>Chia</button>
            <p>kết quả: {kq} </p>
        </div>
    );
}

export default Hook5;
