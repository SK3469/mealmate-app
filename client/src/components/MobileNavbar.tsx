
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HandPlatter, Menu, MenuIcon, Moon, PackageCheck, Plane, ShoppingBag, ShoppingCart, SquareMenuIcon, Sun, User, UtensilsCrossed } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Separator } from "./ui/separator"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
          <SheetHeader className=" flex flex-row justify-between items-center ">
            <SheetTitle className="">MealMate</SheetTitle>
           <div>
           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
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
          </SheetHeader>
          <Separator/>
     <SheetDescription className="flex-1 ">
     <Link className="flex items-center gap-4 hover:bg-gray-100 p-1 my-1 rounded-lg cursor-pointer hover:text-gray-950 font-medium" to="/profile">
       <User/>
      <span>Profile</span>
       </Link>
     <Link className="flex items-center gap-4 hover:bg-gray-100 p-1 my-1 rounded-lg cursor-pointer hover:text-gray-950 font-medium" to="/profile">
       <HandPlatter/>
      <span>Order</span>
       </Link>
     <Link className="flex items-center gap-4 hover:bg-gray-100 p-1 my-1 rounded-lg cursor-pointer hover:text-gray-950 font-medium" to="/cart">
       <ShoppingBag/>
      <span>Cart (0)</span>
       </Link>
     <Link className="flex items-center gap-4 hover:bg-gray-100 p-1 my-1 rounded-lg cursor-pointer hover:text-gray-950 font-medium" to="/admin/menu">
       <SquareMenuIcon/>
      <span>Menu</span>
       </Link>
     <Link className="flex items-center gap-4 hover:bg-gray-100 p-1 my-1 rounded-lg cursor-pointer hover:text-gray-950 font-medium" to="/admin/restaurant">
       <UtensilsCrossed/>
      <span>Restaurant</span>
       </Link>
     <Link className="flex items-center gap-4 hover:bg-gray-100 p-1 my-1 rounded-lg cursor-pointer hover:text-gray-950 font-medium" to="/profile">
       <PackageCheck/>
      <span>Restaurant Orders (0)</span>
       </Link>
     </SheetDescription>
          <SheetFooter className="flex flex-col gap-4">
       <div className="flex  items-center gap-2">
       <Avatar>
              <AvatarImage/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>MealMate</h1>
       </div>
            <SheetClose asChild>
              <Button className="bg-orange hover:bg-hovorOrange" type="submit">Logout</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default MobileNavbar;