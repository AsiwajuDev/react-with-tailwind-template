import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div class="flex flex-col min-h-screen text-center">
      <header class="text-center p-5 text-5xl font-semibold bg-red-600 border-b-4">
        React Tailwind Template
      </header>
      <main class="flex-grow py-20">
        <img src={logo} className="logo mx-auto" alt="logo" />
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
        <div class="flex justify-center border-t-2 py-3">
          <p class="text-base text-black font-semibold mb-2">
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
    // <div className="text-center bg-blue-700 flex flex-col min-h-screen">
    //   <div className="mb-20">
    //     <div className="bg-red-600 mb-20">
    //       <header className="text-5xl font-bold">
    //         React Tailwind Template
    //       </header>
    //     </div>
    //     <div className="mx-auto">
    //       <img src={logo} className="logo mx-auto" alt="logo" />
    //     </div>

    //     <div>
    //       <a
    //         href="https://github.com/AsiwajuDev/react-with-tailwind-template"
    //         className="text-green-500 hover:underline"
    //       >
    //         Click here to view code on Github
    //       </a>
    //     </div>
    //   </div>

    //   <footer class="footer">
    //     <div class="container mx-auto px-6">
    //       <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
    //         <div class="sm:w-2/3 text-center py-6">
    //           <p class="text-base text-black font-semibold mb-2">
    //             Created by
    //             <a
    //               href="https://github.com/AsiwajuDev"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-teal-500 px-2"
    //             >
    //               AsiwajuDev
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default App;
