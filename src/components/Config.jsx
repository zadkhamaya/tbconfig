"use client";
import React from "react";

export const Config = ({ color1, color2 }) => {
  return (
    <div className="absolute bottom-20 left-20 z-10 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col space-y-10">
      <div className="flex flex-col ">
        <label className="text-3xl font-black">
          Tasblock Color Configurator
        </label>
        <label className="text-xs italic">Alpha Ver/Dec 2023</label>
      </div>
      <div className="space-y-2">
        <div className="flex flex-col">
          <label className="font-bold text-xl">
            Tasblock Bench with Separator
          </label>
          <label className="text-s italic">TAS BK01.2-150-S</label>
        </div>
        <div className="flex space-x-2">
          <label>Legs Color: </label>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
          <label>Planks Color: </label>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
