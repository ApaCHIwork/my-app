import React, { useState, useRef, useEffect } from 'react';
import fetchWeather from '../services/fetchWeatherService';
import Button from "@mui/material/Button";
import { UilTemperature, UilSearch } from '@iconscout/react-unicons'
// import UitSearch from "@iconscout/react-unicons-thinline/icons/uit";
import * as Unicons from "@iconscout/react-unicons-thinline";


import { Input } from "antd";
import { color } from '@mui/system';
const { Search } = Input;

const Inputs = () => {
    const inputEl = useRef(null);
    const[inputValue, setInputValue] = useState("")
    const handleButtonClick = (value) => {
        fetchWeather(value)
        setInputValue(value)
    }


    return (
      <div>
        <div className="flex ">
          <div className="flex items-center justify-center space-x-2 overflow-hidden border-b-2 border-white">
            {/* <UilTemperature
              size={30}
              className="  text-white cursor-pointer transition ease-out hover:scale-125 mr-2"
            />

            <input
              type="text"
              className=" text-xl p-2 bg-transparent text-white
               placeholder:text-gray-400 outline-none first-letter:capitalize w-4/6"
              ref={inputEl}
              placeholder="Enter location"
            />

            <UilSearch
              onClick= {handleButtonClick}
              size={25}
              className=" text-white cursor-pointer transition ease-out hover:scale-125 ml-2"
            /> */}
            <Search  //ant.design при кліці нормально не парсить, питання чому?
              className="bg-transparent"
              size={'large'}
              placeholder="Enter location"
              enterButton
              allowClear
              bordered={false}
              ref={inputEl}
              onSearch={handleButtonClick}
            />

            {/* <Button // mui
              variant="contained"
              className=" text-white"
              onClick={handleButtonClick}
            >
              Get Weather
            </Button> */}
          </div>
        </div>

        <div className="text-white text-lg font-medium">
          <h2 className="location">
            Location: {inputValue}
            <span id="location"></span>
          </h2>
          <p>
            Temperature: <span id="temperature"></span>
          </p>
          <p>
            Conditions: <span id="conditions"></span>
          </p>
        </div>
      </div>
    );

}

export default Inputs;