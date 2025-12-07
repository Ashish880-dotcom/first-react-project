import { useState } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(1);

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncreaseByFive = () => {
    setCount((prev) => prev + 5);
  };

  const handleDecreaseByFive = () => {
    setCount((prev) => prev - 5);
  };

  const handleDivideByTen = () => {
    setCount((prev) => prev / 10);
  };

  const handleMultiplyByTen = () => {
    setCount((prev) => prev * 10);
  };

  const handleSetValueToThousand = () => {
    setCount(1000);
  };

  const handleReset = () => {
    setCount(1);
  };

  return (
    <>
      <Navbar />
      <Body />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={handleDecreaseCount}>Decrease</button>
        <button onClick={handleIncreaseByFive}>Increase by 5</button>
        <button onClick={handleDecreaseByFive}>Decrease by 5</button>
        <button onClick={handleDivideByTen}>Divide by 10</button>
        <button onClick={handleMultiplyByTen}>Multiply by 10</button>
        <button onClick={handleSetValueToThousand}>Set Value to 1000</button>
        <button onClick={handleReset}>Reset</button>
        <div>Value of count = {count}</div>
        <button onClick={handleIncreaseCount}>Increase</button>
      </div>
      <Footer />
    </>
  );
}

export default App;