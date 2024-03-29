import React from 'react';
import './Detail.css';
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';

const Detail = ({ weather, unit }) => {


    const tempUnit = unit === "metric" ? "°C" : "°F";
    const windUnit = unit === "metric" ? "m/s" : "mph";
    const card = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: weather.temp_min.toFixed(),
            unit: windUnit,
        },
    ];

   

    return (
        <div className='content content_detail'>
            {
                card.map(({ id, icon, title, data, unit }) => (
                    <div  className="cards" key={id}>
                        <div className="detail">
                            {icon}
                            <h4>{title}</h4>
                        </div>
                        <h2>{`${data} ${unit}`}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Detail

