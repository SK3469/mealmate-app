import { Dispatch, SetStateAction, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Contact } from "lucide-react"
import { Button } from "./ui/button"
import { log } from "console"


const CheckoutConfirmPage = ({ open, setOpen }
  : {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
  }) => {
    const [input,setInput]=useState({
      name:"",
      email:"",
      contact:"",
      address:"",
      city:"",
      country:"",

    })
    const ChangeEventHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target
setInput({...input,[name]:value});
 }
 const checkoutHandler=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  console.log(input)
};
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Review Your Order</DialogTitle>
        <DialogDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Harum perferendis doloribus hic ullam corrupti id architecto totam
           fuga dicta ducimus.
        </DialogDescription>
        <form onSubmit={checkoutHandler} className="space-y-2 md:grid grid-cols-2 gap-3">
          <div className="">
            <Label>Fullname</Label>
            <Input
            type="text"
            name="name"
            placeholder=""
            value={input.name}
            onChange={ChangeEventHandler}
            className=" focus-visible:ring-transparent "
            />
            </div>
            <div>
            <Label>Email</Label>
            <Input
            type="email"
            name="email"
            placeholder=""
            value={input.email}
            onChange={ChangeEventHandler}
            className=" focus-visible:ring-transparent "
            />
            </div>
            <div>
            <Label>Contact</Label>
            <Input
            type="text"
            name="contact"
            placeholder=""
            value={input.contact}
            onChange={ChangeEventHandler}
            className=" focus-visible:ring-transparent "
            />
            </div>
            <div>
            <Label>Address</Label>
            <Input
            type="text"
            name="address"
            placeholder=""
            value={input.address}
            onChange={ChangeEventHandler}
            className=" focus-visible:ring-transparent "
            />
            </div>
            <div>
            <Label>City</Label>
            <Input
            type="text"
            name="city"
            placeholder=""
            value={input.city}
            onChange={ChangeEventHandler}
            className=" focus-visible:ring-transparent "
            />
            </div>
            <div>
            <Label>Country</Label>
            <Input
            type="text"
            name="country"
            placeholder=""
            value={input.country}
            onChange={ChangeEventHandler}
            className=" focus-visible:ring-transparent "
            />
            </div>
            <DialogFooter className="col-span-2 pt-5">
          <Button className=" bg-orange hover:bg-hovorOrange ">Contine to Payment</Button></DialogFooter>
        </form>
        
      </DialogContent>
    
    </Dialog>
  )
}

export default CheckoutConfirmPage