import React, { useState, useRef, useEffect } from "react";
import fetchWeather from "../services/fetchWeatherService";
import Button from "@mui/material/Button";
import { UilTemperature, UilSearch } from "@iconscout/react-unicons";
// import UitSearch from "@iconscout/react-unicons-thinline/icons/uit";
import * as Unicons from "@iconscout/react-unicons-thinline";

import { Input } from "antd";
import { color } from "@mui/system";
const { Search } = Input;

const Inputs = ({ handleButtonClick }) => {
  const inputEl = useRef(null);
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center justify-center space-x-2 overflow-hidden border-b-2 border-white">
          <Search //ant.design при кліці нормально не парсить, питання чому?
            className="bg-transparent"
            size={"large"}
            placeholder="Enter location"
            enterButton
            allowClear
            bordered={false}
            ref={inputEl}
            onSearch={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
