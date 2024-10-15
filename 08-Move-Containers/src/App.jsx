import React, { useState } from "react";

const initialItems = [
  { name: "one", id: 1 },
  { name: "two", id: 2 },
  { name: "three", id: 3 },
  { name: "four", id: 4 },
];

export default function App() {
  const [itemsInLeft, setItemsInLeft] = useState(initialItems);
  const [itemsInRight, setItemsInRight] = useState([]);

  function handleMove(item, direction) {
    if (direction === "right") {
      setItemsInLeft((items) =>
        items.filter((curItem) => curItem.id !== item.id)
      );
      setItemsInRight((itemsInRight) => [...itemsInRight, item]);
    } else {
      setItemsInRight((items) =>
        items.filter((curItem) => curItem.id !== item.id)
      );
      setItemsInLeft((itemsInLeft) => [...itemsInLeft, item]);
    }
  }

  return (
    <div className="w-4/5  m-auto mt-16 flex  justify-between">
      <LeftContainer itemsInLeft={itemsInLeft} handleMove={handleMove} />
      <RightContainer itemsInRight={itemsInRight} handleMove={handleMove} />
    </div>
  );
}

function LeftContainer({ itemsInLeft, handleMove }) {
  return (
    <div className="w-2/5 bg-cyan-300 h-[400px] rounded-md">
      <h1 className="text-center font-bold text-2xl m-5">Left Container</h1>
      {itemsInLeft.map((item) => (
        <div
          className="bg-slate-500 text-white rounded-md p-4 m-2 flex justify-between"
          key={item.id}
        >
          {item.name}{" "}
          <button
            className="bg-rose-800 text-white px-4 py-2 rounded-lg"
            onClick={() => handleMove(item, "right")}
          >
            Move
          </button>
        </div>
      ))}
    </div>
  );
}
function RightContainer({ itemsInRight, handleMove }) {
  return (
    <div className="w-2/5 bg-cyan-300 h-[400px] rounded-md">
      <h1 className="text-center font-bold text-2xl m-5">Right Container</h1>
      {itemsInRight.map((item) => (
        <div
          className="bg-slate-500 text-white rounded-md p-4 m-2 flex justify-between"
          key={item.id}
        >
          {item.name}{" "}
          <button
            className="bg-rose-800 text-white px-4 py-2 rounded-lg"
            onClick={() => handleMove(item, "left")}
          >
            Move
          </button>
        </div>
      ))}
    </div>
  );
}
