import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function FiveDay({fiveDayWetherData}) {

    console.log(fiveDayWetherData)
  return (
    <>
    {fiveDayWetherData && (
        <div className="items-center justify-between px-6 py-14 rounded-xl bg-violet-500/30">
            <h3 className='text-violet-200 text-2xl'>Five day weather</h3>
            <Splide className='mt-5'
                options={ {
                    autoWidth: true,
                    rewind: true,
                    width : 800,
                    gap   : '1rem',
                    pagination: false,
                    arrows: false
                  } }
            >
                {fiveDayWetherData.list.map((day, index) => (
                    <SplideSlide key={index} className='text-center bg-violet-300/60 p-3 rounded-xl w-4/12'>
                        <div className='flex'>
                            <img
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                alt="test"
                                className="mr-3"
                            />
                            <div className="text-white">
                                <div >{formatDate(day.dt_txt)}</div>
                                <p className="text-center">
                                    <span className="text-1xl text-white mr-2">
                                    {Math.round(day.main.temp_max)}
                                    <sup>o</sup>
                                    </span>
                                    <span className="text-1xl text-violet-200">
                                    {Math.round(day.main.temp_min)}
                                    <sup>o</sup>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )}
    </>
  )
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('uk-UA', options);
  };

export default FiveDay