import React,{useState}  from "react"
import './index.css'

export function Homepage (params) {

    const [countColor, setCountColor] = useState([]);

    const getColor = (event) => { // ฟังก์ชันที่เมื่อคลิกแล้วจะเก็บค่า id สีของปุ่มที่กดเก็บไว้ใน array countColor
        const id = event.target.id;
        setCountColor([...countColor,{color:id}]);
    }
    

    return (<>
        <div class="heder">
            <div>
                <h1>Color list</h1>
            </div>
            <div class="colorBar">
                <button class="button redButton" id="red" onClick={getColor}></button>
                <button class="button greenButton" id="green" onClick={getColor}></button>
                <button class="button blueButton" id="blue" onClick={getColor}></button>
            </div>
            <div class="table">
                <table>
                    <thead>
                        <th>#</th>
                        <th>Color</th>
                    </thead>
                    <thead>
                        {countColor.map((color, index) => ( // loop เขียนค่าใน array countColor ลงใน table และเปลี่ยนสี table ตามสี
                            <tr>
                            <th scope="row">{index + 1}</th>
                            <th style={{backgroundColor:color.color}}>{color.color} </th> 
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        </div>
    </>)
} 

export default Homepage;