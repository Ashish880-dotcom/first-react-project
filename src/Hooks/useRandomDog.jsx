import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export function useRandomDog() {
  const [randomDog, setRandomDog] = useState(null);

  const fetchRandomDog = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setRandomDog(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
        setRandomDog(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return { randomDog, handleGenerateNewImage: fetchRandomDog };
}
