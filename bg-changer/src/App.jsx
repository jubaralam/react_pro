import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("purple");
  const colorName = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "black",
    "gray",
  ];

  const colorChanger = (e) => {
    setColor(e.target.id);
  };
  const colorPicker = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className="w-full h-screen m-0 pt-10" style={{ backgroundColor: color }}>
        <h2 className="bg-white w-fit mx-auto py-1 px-2 rounded flex  ">
          The Color is :- <span className="text-blue-700">{color}</span>{" "}
        </h2>

        <div className="flex justify-center pt-10 items-center  mt-10 flex-col  border-none">
          <p className="py-2 px-5 mb-2  bg-white rounded">Color Picker</p>
          <input
            className="w-[150px] h-[150px] rounded"
            type="color"
            onChange={colorPicker}
          />
        </div>
        <div className=" fixed flex justify-center bottom-12 flex-wrap inset-x-0 py-2 ">
          <div
            onClick={colorChanger}
            className="justify-center flex flex-wrap gap-3 shadow-lg bg-white py-2 px-5 rounded-3xl"
          >
            {colorName.map((e, i) => {
              return (
                <>
                  <button
                    className="py-2 px-3 rounded-2xl text-gray-400"
                    style={{ backgroundColor: e }}
                    key={i}
                    id={e}
                  >
                    {e}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
