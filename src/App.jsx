import { useRandomDog } from "./Hooks/useRandomDog";

const App = () => {
  const { randomDog, handleGenerateNewImage } = useRandomDog();
  return (
    <div className="flex h-screen flex-col items-center gap-10">
      <div className="text-3xl font-bold">Random Dog Generator</div>
      <button className="text-2xl italic border p-3 cursor-pointer" onClick={handleGenerateNewImage}>Generate</button>
      {randomDog?.message ? (
        <img src={randomDog.message} alt="Random Dog" className="max-w-xs rounded shadow" />
      ) : (
        <div className="text-lg">Loading...</div>
      )}
    </div>
  );
};

export default App;