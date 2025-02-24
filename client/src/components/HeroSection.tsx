import { useState } from "react"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import heroimage from "@/assets/heroimage.png"
import { useNavigate } from "react-router-dom"


const HeroSection = () => {
 
  const [searchText, setSearchText]= useState<string>("")
  const navigate= useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl gap-4 my-10  md:mx-auto p-2">
      <div className="flex flex-col items-center gap-5 md:w-[40%]">
        <div className=" flex flex-col gap-5">
          <h1 className="font-bold text-4xl md:text-5xl text-orange">Order Food anytime & anywhere.</h1>
          <p className="text-gray-500 text-lg">Hey! our Delicious food is waiting for you, we are always near to your place.</p>
        </div>
      <div className="relative flex items-center gap-3 w-full">
          <Input type="text"
          className="pl-10 shadow-md focus-visible:ring-transparent border-none outline-none"
          value={searchText}
          placeholder="Search resturant by name, city & country"
          onChange={(e)=>setSearchText(e.target.value)}
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2"/>
        <Button onClick={()=>navigate(`/search/${searchText}`)} className="bg-orange">Search</Button>
      </div>
      </div>
      <div className="">
        <img src={heroimage}
        className=" object-cover md:h-[500px] md:mx-40 " />
      </div>
    </div>
  )
}

export default HeroSection