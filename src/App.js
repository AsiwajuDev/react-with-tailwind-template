import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center">
      <div className="bg-red-600 mb-20">
        <header className="text-5xl font-bold">React Tailwind Template</header>
      </div>
      <div className="mx-auto">
        <img src={logo} className="w-64 mx-auto mb-20" alt="logo" />
      </div>

      <div>
        <a
          href="https://github.com/AsiwajuDev/react-with-tailwind-template"
          className="text-gray-500 hover:underline"
        >
          Click here to view code on Github
        </a>
      </div>
    </div>
  );
}

export default App;
