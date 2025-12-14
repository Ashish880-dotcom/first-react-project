import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [randomDog, setRandomDog] = useState({});

  const handleGenerateNewImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random "
      );
      setRandomDog(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    handleGenerateNewImage();
  },[]);

  return (
    <div className="flex h-screen flex-col items-center gap-10">
      <div className="text-3xl font-bold"> Random Dog Generator</div>
      <button className="text-3xl fond-italic border p-3 cursor-p" onClick={handleGenerateNewImage}>Generate</button>
      <img src={randomDog.message} alt="" />
    </div>
  );
};

export default App;