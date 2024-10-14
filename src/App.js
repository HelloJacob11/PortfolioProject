import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login'
import Main from './pages/Main.js'
import Sign_up from './pages/Sign_up.js'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/> , 
      errorElement: <div>LogIn Error</div>
    },
    {
      path:'/Main',
      element:<Main/>,
      errorElement: <div>Main Error</div>
    },
    {
      path:'/SignUp',
      element:<Sign_up/>,
      errorElement:<div>Sign Up Error </div>
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
