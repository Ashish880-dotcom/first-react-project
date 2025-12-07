import { useState } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

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
    setCount(0);
  };

  return (
    <>
      <Navbar />
      <Body />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <div style={{ textAlign: "center", margin: "30px 0", fontSize: "32px", fontWeight: "bold" }}>Value of count = {count}</div>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleIncreaseCount}>Increase</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleDecreaseCount}>Decrease</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleIncreaseByFive}>Increase by 5</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleDecreaseByFive}>Decrease by 5</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleDivideByTen}>Divide by 10</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleMultiplyByTen}>Multiply by 10</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleSetValueToThousand}>Set Value to 1000</button>
        <button style={{ margin: "10px", padding: "10px 20px", textAlign: "center", fontSize: "18px" }} onClick={handleReset}>Reset</button>
      </div>
      <Footer />
    </>
  );
}

export default App;