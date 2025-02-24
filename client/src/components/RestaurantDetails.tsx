
import bulbul from "@/assets/bulbul.png"
import { Badge } from "./ui/badge"
import { Timer } from "lucide-react"
import AvilableMenu from "./AvilableMenu"
const RestaurantDetails = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className=" w-full h-32 md:h-64 lg:h-72 ">
                <img src={bulbul}
                    alt=""
                    className="w-full h-full object-covor rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="my-5">
                    <h1 className="font-medium text-xl">Kathiya Roll</h1>
                    <div className="flex gap-2 my-2">
                        {
                            ["Biryani", "Momos"].map((cuisines: string, idx: number) => (
                                <Badge className="" key={idx}>{cuisines}</Badge>
                            ))
                        }
                    </div>
                   
                </div>
                <div className="flex flex-col md:flex-row gap-2 ">
                    <div className="flex gap-2 items-center">
                        <Timer className="text-gray-500 w-5 h-5"/>
                        <h1 className="font-medium flex gap-2 items-center">
                            Delivery Time:
                            <span className="text-orange">35 Mins</span>
                        </h1>
                    </div>
                    </div>
            </div>
            <div>
                <AvilableMenu/>
            </div>
        </div>
    )
}

export default RestaurantDetails