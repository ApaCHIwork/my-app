import React from 'react'

function FiveDay({fiveDayWetherData}) {

    console.log(fiveDayWetherData)
  return (
    <div className="items-center justify-between p-6 mt-6 rounded-xl bg-violet-400">
        <h3 className='text-violet-200 text-xl'>Five day wether</h3>
        <ul className="weather-list flex">
            {fiveDayWetherData && fiveDayWetherData.list.map((day, index) => (
                <li key={index}>
                    <div className="weather-day">{formatDate(day.dt_txt)}</div>
                    <p className="text-center">
                    <span className="text-1xl mr-2" id="temperature">
                      {Math.round(day.main.temp_max)}
                      <sup>o</sup>
                    </span>
                    <span className="text-1xl text-violet-200" id="temperature">
                      {Math.round(day.main.temp_min)}
                      <sup>o</sup>
                    </span>
                  </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('uk-UA', options);
  };

export default FiveDay