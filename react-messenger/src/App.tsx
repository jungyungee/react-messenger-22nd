import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 overflow-hidden">
      <div
        className="
         bg-white shadow-lg overflow-hidden
          h-[100dvh]
          w-[calc(100dvh*(375/812))] 
          max-w-[375px]
        "
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
