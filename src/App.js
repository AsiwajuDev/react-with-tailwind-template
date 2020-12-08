import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col bg-blue-700 min-h-screen text-center">
      <header className="text-center p-5 text-3xl md:text-5xl font-semibold bg-red-600 border-b-4">
        React Tailwind Template
      </header>
      <main className="flex-grow py-20 mx-auto">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <div>
          <a
            href="https://github.com/AsiwajuDev/react-with-tailwind-template"
            className="text-green-500 hover:underline"
          >
            Click here to view code on Github
          </a>
        </div>
      </main>
      <footer>
        <div className="flex justify-center border-t-2 py-3">
          <p className="text-base text-black font-semibold mb-2">
            Created by
            <a
              href="https://github.com/AsiwajuDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 px-2"
            >
              AsiwajuDev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
