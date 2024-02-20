const Tutorial = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index + 1} className="grid grid-cols-10 gap-x-3 w-full">
          <div className="justify-self-center flex flex-col items-center w-fit">
            <span className="border px-3 py-1 rounded-lg">{index + 1}</span>
            <div className={`grow ${index !== 4 && "border-l"}`}></div>
          </div>
          <div className="col-span-9">
            <img
              src={`/${index}.jpg`}
              alt={`step ${index}`}
              className="border border-black rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tutorial;
