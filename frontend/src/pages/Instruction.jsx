import React from "react";

const Instruction = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 mt-3 mb-3 w-full">
      {Array.from({ length: 5 }, (_, index) => (
        <div className="w-4/5 lg:w-1/2">
          <p>{`Step ${index + 1}:`}</p>
          <img key={index} src={`/${index}.jpg`} alt={`step ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Instruction;
