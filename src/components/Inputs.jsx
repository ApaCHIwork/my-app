import React, { useState, useRef, useEffect } from "react";

import { Input } from "antd";
const { Search } = Input;

const Inputs = ({ handleButtonClick }) => {
  const inputEl = useRef(null);
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center justify-center space-x-2 overflow-hidden border-b-2 border-white">
          <Search //ant.design при кліці нормально не парсить, питання чому?
            className="bg-transparent text-white"
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
