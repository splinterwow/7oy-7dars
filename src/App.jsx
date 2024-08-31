import React, { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceExample = () => {
  const [debouncedText, setDebouncedText] = useState("");
  const [liveText, setLiveText] = useState("");

  const debouncedValue = useDebounce(debouncedText, 300);

  const handleDebounceChange = (e) => {
    setDebouncedText(e.target.value);
  };

  const handleLiveChange = (e) => {
    setLiveText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-blue-600 mb-2">
          Debounced Input (300ms):
        </h2>
        <input
          type="text"
          value={debouncedText}
          onChange={handleDebounceChange}
          placeholder="Type something..."
          className="p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-4 text-1xl text-gray-800 font-medium">
          300ms Debounced: {debouncedValue}
        </p>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold text-green-600 mb-2">
          Real-Time Input:
        </h2>
        <input
          type="text"
          value={liveText}
          onChange={handleLiveChange}
          placeholder="Type something..."
          className="p-3 border border-green-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="mt-4 text-gray-800 font-medium">Live Value: {liveText}</p>
      </div>
    </div>
  );
};

export default DebounceExample;
