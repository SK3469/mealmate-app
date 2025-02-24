import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import image from "@/assets/heroimage.png"

const AvilableMenu = () => {
    return (
        <div>
            <div className="md:p-4">
                <h1 className="font-bold text-xl mb-6 ">Avilable Menu</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-3 ">
                {["Tandoori Momos", "Biryani Chaap ", "Tandoori Paneer"].map((cuisines: string, idx: number) => (
                    <Card key={idx} className=" shadow-lg hover:shadow-xl">
                        <div className="relative">
                            <AspectRatio ratio={16 / 6}>
                                <img src={image} alt="" className="h-full w-full object-cover" />
                            </AspectRatio>
                            <h1 className=" absolute left-2 top-1 font-medium text-sm bg-white bg-opacity-70 dark:text-white dark:bg-gray-900">{cuisines}</h1>
                        </div>
                        <CardContent>
                            <h2 className="font-bold text-xl text-gray-800 dark:text-white my-2 ">{cuisines}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa?</p>
                            <h1 className="font-medium flex items-center gap-2 mt-2">Price:
                                <span className="text-orange">₹80</span>
                            </h1>
                        </CardContent>
                        <CardFooter className=" ">
                           
                           <Button className="bg-orange hover:bg-hovorOrange w-full">Add to Cart</Button>
                           
                               
                          </CardFooter>
                    </Card>

                ))
                }
            </div>
        </div>
    )
}

export default AvilableMenu