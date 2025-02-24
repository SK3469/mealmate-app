import { Link } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Icon, Loader2, Moon, ShoppingBasket, ShoppingCart, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileNavbar from "./MobileNavbar";
import HeroSection from "./HeroSection";

const Navbar = () => {
  const admin = true;
  const loading = false;
  return (
    <div className="max-w-7xl mx-auto  ">
      <div className="flex justify-between items-center h-14">

          <Link to="/">
            <h1 className=" font-bold md:font-extrabold text-2xl">MealMate</h1>
          </Link>
        <div className="hidden  md:flex gap-6 items-center">
          <div className="hidden  md:flex gap-10 items-center">
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Orders</Link>
          </div>
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <Link to="admin/restaurant">
                    <MenubarItem>Restaurant</MenubarItem>
                  </Link>
                  <Link to="/admin/menu">
                    <MenubarItem>Menu</MenubarItem>
                  </Link>
                  <Link to="/admin/orders">
                    <MenubarItem>Orders</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="flex  items-center gap-3">
          <div className="hidden md:flex">
            <Link to="/cart">
              <ShoppingCart className="relative" />
              <Button size={'Icon'} className=" absolute inset-y-1 mx-1.5 text-xs h-4 w-4 rounded-full hover:bg-red-700 bg-red-600">4</Button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:flex">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>

            </Avatar>
          </div>
          <div className="hidden md:flex">
            {
              loading ? (<Button disabled className="bg-orange hover:bg-hovorOrange">
                <Loader2 className="w-4 h-4 animate-spin" />
                Please wait
              </Button>) : (<Button className="bg-orange hover:bg-hovorOrange">Logout</Button>)
            }

          </div>
          <div>
          {/* Mobile Responsive */}
          <MobileNavbar/>
        </div>
        </div>
     
      </div>
    </div>
    
  )
}

export default Navbar
