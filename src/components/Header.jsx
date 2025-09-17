// import { Button } from "@heroui/button";
// import {
//   Navbar, 
//   NavbarBrand, 
//   NavbarContent, 
//   NavbarItem
// } from "@heroui/navbar";
// import { Link } from "@heroui/link";

// export default function Header() {
//   return (
//     <Navbar isBordered position="sticky" className="top-0 z-50">
//       <NavbarBrand>
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" href="#">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }



import { Button } from "@heroui/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@heroui/link";

export default function Header() {
  return (
    <Navbar isBordered position="sticky" className="top-0 z-50">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" as={RouterLink} to="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link as={RouterLink} to="/login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={RouterLink} color="primary" to="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
