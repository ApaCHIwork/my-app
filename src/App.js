import "./App.css";
import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import Asd from "./components/Asd";

function App() {
  return (
    <div className="flex ">
      <div
        className=" w-3/12 py-5 px-3 bg-gradient-to-br from-cyan-100 to-blue-800 h-screen 
        shadow-xl shadow-gray-400"
      >
        <Inputs/>
      </div>
      <div
        className=" w-9/12 py-5 px-10 bg-gradient-to-br from-cyan-700 to-blue-700 h-screen 
        shadow-xl shadow-gray-400"
      >
        <h1 className=" text-white font-bold flex justify-center">
          Weather App
        </h1>
        <TopButtons />
      </div>
      {/* <Asd /> */}
    </div>
  );
}

export default App;
