import { Contact2, Loader2, LocateOff, Mail, MailCheck, MailOpen, MapPin, MapPinHouse, MapPinned, PhilippinePeso, Pin, Plus, Target } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { FormEvent, useRef, useState } from "react"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Label } from "./ui/label"
import { Button } from "./ui/button"


const Profile = () => {
const loading = false;
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  })
  const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("")
  const imageRef = useRef<HTMLInputElement | null>(null);
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result
        }))
      };
      reader.readAsDataURL(file);

    }
  }
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value })
  }
  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //api implementation..
  }
 
  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex justify-between ">
        <div className=" flex items-center gap-2">
          <Avatar className="relative md:h-28 md:w-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback>CN</AvatarFallback>
            <input
              ref={imageRef}
              accept="image/*"
              onChange={fileChangeHandler}
              className="hidden"
              type="file"
            />
            <div onClick={() => imageRef.current?.click()} className=" absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-black bg-opacity-50  rounded-full ">
              <Plus className="text-white h-8 w-8 " />
            </div>
          </Avatar>
          <Input
            type="text"
            name={profileData.fullname}
            className=" font-bold border-none outline-none focus-visible:ring-transparent "
            onChange={changeHandler}
          />
        </div>
      </div>
      <Separator className="mt-10" />
      <div className="mt-10 grid md:grid-cols-4 md:gap-4 gap-3 rounded-md p-2 items-center">
        <div className=" flex items-center gap-4 rounded-sm p-2 bg-gray-50">
          <Mail className=" text-gray-500 text-orange " />
          <div className="w-full ">
            <Label className="">Email</Label>
            <Input
              type="email"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              placeholder="Enter your email"
              className="border-none outline-none bg-transparent focus-visible:ring-transparent p-0 "
            /></div>
        </div>
        <div className=" flex items-center gap-4 rounded-sm p-2 bg-gray-50">
          <Target className=" text-gray-500 text-orange " />
          <div className="w-full ">
            <Label className="">Address</Label>
            <Input
              type="text"
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              placeholder="Enter your current address"
              className="border-none outline-none bg-transparent focus-visible:ring-transparent p-0 "
            /></div>
        </div>
        <div className=" flex items-center gap-4 rounded-sm p-2 bg-gray-50">
          <MapPin className=" text-gray-500 text-orange " />
          <div className="w-full ">
            <Label className="">City</Label>
            <Input
              type="text"
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              placeholder="Enter your city"
              className="border-none outline-none bg-transparent focus-visible:ring-transparent p-0 "
            /></div>
        </div>
        <div className=" flex items-center gap-4 rounded-sm p-2 bg-gray-50">
          <MapPinned className=" text-gray-500 text-orange " />
          <div className="w-full ">
            <Label className="">Country</Label>
            <Input
              type="text"
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              placeholder="Enter your email"
              className="text-gray-600 bg-transparent border-none outline-none focus-visible:ring-transparent p-0 "
            /></div>
        </div>

      </div>
      <div className="text-center mt-5">
  {
    loading? (<Button disabled className=" bg-orange hover:bg-hovorOrange"><Loader2 className="w-4 h-4 mr-2 animate-spin"/>Please Wait</Button>):(
<Button className=" bg-orange hover:bg-hovorOrange">Update</Button>
    )
  }
</div>
    </form>
  )
}

export default Profile