// import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
// import RootLayout from "./components/RootLayout"
// import Categories from "./categories/Categories"
// import Categoryitem from "./category-items/Categoryitem"



// export default function App() {
//     const router = createBrowserRouter([
//         {
//             path:'/',
//             element:<RootLayout />,
//             children:[
//               {
//                 index:true,
//                 element:<Categories />
//               },
//               {
//                 path:'category-items/:name',
//                 element:<Categoryitem />
//               }

//             ]
//         }
//     ])
//   return <RouterProvider router={router} />
// // } 

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Categories from "./categories/Categories";
import Categoryitem from "./category-items/Categoryitem";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Categories /> },
        { path: "category-items/:name", element: <Categoryitem /> },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}




