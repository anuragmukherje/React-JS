// const App = () => {
//   return <section>Hello Harkirat!</section>
// }

import Add from "./components/Add";
import Greetings from "./components/Greetings";

// export default App;

// Creating a component => first letter will be uppercase

// function App() {
//   return <h1>Hello Harkirat</h1>;
// }

// export default App;


// // Assignment

// import Greet from "./Greet.jsx";

// function App() {
//   return (
//     <div>
//       <Greet/>
//     </div>
//   );
// }


const App = () => {
  return (
    <div>
      <Greetings/>
      <Add/>
    </div>
  );
}
export default App;