const Tutorial = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      {Array.from({ length: 5 }, (_, index) => (
        <div className="lg:w-5/6">
          <p>{`Step ${index + 1}:`}</p>
          <img key={index} src={`/${index}.jpg`} alt={`step ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Tutorial;
