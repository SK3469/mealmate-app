import { Minus, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { Separator } from "./ui/separator"
import { useState } from "react"
import CheckoutConfirmPage from "./CheckoutConfirmPage"


const Cart = () => {
  const [open, setOpen]= useState<boolean>(false);
  return (
    <div className=" flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant={"link"}> Clear All</Button>
      </div>
      <Table>
        <TableCaption>List of your recent item</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>Biryani</TableCell>
            <TableCell>80</TableCell>
            <TableCell>
              <span className="flex items-center gap-2 border border-gray-200 w-fit shadow-lg rounded-full  ">
                <Button variant={"outline"} size={"icon"} className="rounded-full bg-gray-200 shadow-md hover:shadow-lg hover:bg-red-500 ">
                  <Minus />
                </Button>
                <p>2</p>
                <Button variant={"outline"} size={"icon"} className="rounded-full bg-orange shadow-md hover:shadow-lg hover:bg-hovorOrange">
                  <Plus />
                </Button>
              </span>
            </TableCell>
            <TableCell>80</TableCell>
            <TableCell className="text-right">
              <Button className="bg-orange hover:bg-hovorOrange">Remove</Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">80</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Separator className="my-5" />
      <div className="text-right">
        <Button onClick={()=>setOpen(true)} className="bg-orange hover:bg-hovorOrange">Proceed to Checkout</Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Cart