


// const FirstApp = () => {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <p>10</p>
//     </>
//   );
// }

import PropTypes from "prop-types";
// import { useState } from "react";
import { useCounter } from "./components/Counter";

const FirstApp = () => {

  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {/* Rest of your component */}
    </div>
  );


  // const [counter, setCounter] = useState(value);
  // const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   console.log("Calling handleAdd", value);
  //   setCounter(counter + 1);
  // };

  // const handleSubtract = () => {
  //   console.log("Calling handleSubtract", value);
  //   setCounter(counter - 1);
  // };

  // const handleReset = () => {
  //   setCounter(0);
  // };

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  // const handleAddCategory = () => {
  //   setCategories([...categories, category]);
  //   setCategory("");
  // };

  // return (
  //       <>
  //         <h1>Counter</h1>
  //         <span>{counter}</span>
  //         <br />
  //         <br />
  //         <button onClick={handleAdd}>+1</button>
  //         <button onClick={handleSubtract}>-1</button>
  //         <button onClick={handleReset}>Reset</button>
  //         <br />
  //         <br />
  //         <input value={category} onChange={handleCategoryChange} type="text" />
  //         <br />
  //         <button onClick={handleAddCategory}>Add category</button>
  //         <ul>
  //           {categories.map((cat, index) => (
  //             <li key={index}>{cat}</li>
  //           ))}
  //         </ul>
  //       </>
  //     );
};

FirstApp.propTypes = {
  value: PropTypes.number.isRequired,
};



export default FirstApp;
