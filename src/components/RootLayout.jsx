

// import { Outlet } from "react-router-dom";
// import Header from "./Header";

// export default function RootLayout() {
//   return (
//     <div>
//         <Header />
//         <Outlet/>
        
//     </div>
//   )
// }



import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
