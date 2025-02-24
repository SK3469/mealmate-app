import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RestaurantFormSchema, restaurantFormSchema } from "@/schema/restaurantSchema copy"
import { Loader2 } from "lucide-react"
import { useState } from "react"

const Restaurant = () => {
    const loading = false;
    const isRestaurant = false;
    const [input, setInput] = useState<RestaurantFormSchema>({
        restaurantName: "",
        city: "",
        country: "",
        deliveryTime: 0,
        cuisines:[],
        imageFile:undefined,
    })

    const [errors,setErrors]= useState<Partial<RestaurantFormSchema>>()
    const ChangeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({ ...input, [name]: value ,[name]: value === 'cuisines' ? value.split(",") &&[name]:type ==='number' ? Number(value) : value })
    }

  const SubmitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(input)
    const result= restaurantFormSchema.safeParse(input);
    if(!result.success){
    const fieldErrors= result.error.formErrors.fieldErrors;
    setErrors(fieldErrors as Partial<RestaurantFormSchema>);
    }
    //add restaurant api implementation..
  }
    return (
        <div className="max-w-4xl mx-auto my-10">
            <form onSubmit={SubmitHandler} >
                <div className="md:grid grid-cols-2 gap-2 space-y-3">
                    <div>
                        <Label>Restaurant Name</Label>
                        <Input
                            type="text"
                            name="restaurantName"
                            placeholder="Enter Your restaurant name"
                            value={input.restaurantName}
                            onChange={ChangeEventHandler}
                            className=" focus-visible:ring-transparent"
                        />
                        {errors && <span className="text-xs text-red-600 font-medium">{errors.restaurantName}</span>}
                    </div>
                    <div>
                        <Label>City</Label>
                        <Input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            value={input.city}
                            onChange={ChangeEventHandler}
                            className=" focus-visible:ring-transparent"
                        />
                          {errors && <span className="text-xs text-red-600 font-medium">{errors.city}</span>}
                    </div>
                    <div>
                        <Label>Country</Label>
                        <Input
                            type="text"
                            name="country"
                            placeholder="Enter your country"
                            value={input.country}
                            onChange={ChangeEventHandler}
                            className=" focus-visible:ring-transparent"
                        />
                          {errors && <span className="text-xs text-red-600 font-medium">{errors.country}</span>}
                    </div>
                    <div>
                        <Label>Delivery Time</Label>
                        <Input
                            type="number"
                            name="deliveryTime"
                            placeholder="Enter your delivery time"
                            value={input.deliveryTime}
                            onChange={ChangeEventHandler}
                            className=" focus-visible:ring-transparent"
                        />
                          {errors && <span className="text-xs text-red-600 font-medium">{errors.deliveryTime}</span>}
                    </div>
                    <div>
                        <Label>Cuisines</Label>
                        <Input
                            type="text"
                            name="cuisines"
                            placeholder="e.g. TikkaMasala, Momos"
                            onChange={ChangeEventHandler}
                            className=" focus-visible:ring-transparent"
                        />
                          {errors && <span className="text-xs text-red-600 font-medium">{errors.cuisines}</span>}
                    </div>
                    <div>
                        <Label>Upload Restaurant Banner</Label>
                        <Input
                            type="file"
                            accept="image/*"
                            name="imageFile"
                            onChange={(e)=>setInput({...input, imageFile:e.target.files?.[0] || undefined})}
                        />
                          {errors && <span className="text-xs text-red-600 font-medium">{errors.imageFile?.name || "imageFile is required"}</span>}    
                    </div>
                </div>
                <div className="mt-4 text-center">
                    {
                        loading ? (<Button disabled className="bg-orange hover:bg-hovorOrange"><Loader2 className="w-4 h-4 animate-spin" />Please Wait</Button>) :
                            <Button className="bg-orange hovor:bg-hovorOrange">
                                {
                                    isRestaurant ? 'Update Restaurant' : 'Add Your Resaturant'
                                }</Button>
                    }

                </div>
            </form>
        </div>
    )
}

export default Restaurant