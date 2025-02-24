import { Link, useParams } from "react-router-dom"
import FilterPage from "./FilterPage";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "@/assets/heroimage.png"



const SearchPage = () => {
    const params = useParams();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex flex-col md:flex-row justify-center gap-10 ">
                <FilterPage />
                <div className=" flex-1  ">
                    <div className=" flex items-center gap-3">
                        <Input
                            type="text"
                            placeholder="Search by resturants ad cuisines"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className=" focus-visible:ring-transparent border-none outline-none shadow-md"
                        />
                        <Button className="bg-orange hover:bg-hovorOrange ">Search</Button>
                    </div>


                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3 ">
                        <h1 className=" font-medium text-lg"> <span className="text-red-700 font-bold">(2)</span> Search result found</h1>
                        <div className="flex flex-wrap mb-4 md:mb-0 gap-3 ">
                            {
                                ["biryani", "jhalebi", "momos"].map((selectedFilter: string, idx: number) => (
                                    <div key={idx} className="relative inline-flex gap-4 items-center ">
                                        <Badge variant={"outline"} className="text-orange py-1 pr-6 rounded-lg cursor-pointer">{selectedFilter}</Badge>
                                        <X className=" absolute right-1 pl-2 items-center text-gray-600 hover:text-gray-950 " />
                                    </div>
                                ))}
                        </div>
                    </div>
                    {/* Resturants page */}
                    <div className="grid md:grid-cols-3 gap-3 mt-5">
                      {
                        [1,2,3].map((item:number, idx:number)=>(
                            <Card key={idx} className="bg-white dark:bg-gray-700 shadow-xl hover:shadow-lg transition-shadow duration-150 rounded-xl overflow-hidden   ">
                            <div className=" relative">
                                <AspectRatio ratio={16 / 6}>
                                    <img src={HeroImage} alt="" className="h-full w-full object-cover" />
                                </AspectRatio>
                                <div className=" absolute top-2 left-2 bg-white dark:bg-gray-700 opacity-75 p-1 rounded-lg">
                                    <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h1 className="font-bold text-xl text-gray-800 dark:text-gray-300 ">BulBul Ki Rasoi</h1>
                                <div className="mt-2 flex items-center gap-2 text-gray-600">
                                    <MapPin size={16} />
                                    <p className="text-sm">City:<span className="font-medium">{""} Delhi</span></p>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-gray-600">
                                    <Globe size={16} />
                                    <p className="text-sm">Country:<span className=" font-medium">{""} India</span></p>
                                </div>
                                <div className="flex flex-wrap mt-2  gap-3 ">
                                    {
                                        ["biryani", "jhalebi", "momos"].map((cuisines: string, idx: number) => (
                                            <Badge key={idx} className=" py-1 rounded-full cursor-pointer">{cuisines}</Badge>

                                        ))}
                                </div>
                            </CardContent>
                            <CardFooter className="p-3 border-t flex justify-end dark:border-t-gray-700 border-t-gray-300">
                         <Link to={`/restaurant/${123}`}>
                                    <Button className="bg-orange mt-3 rounded-full hover:bg-hovorOrange shadow-lg transition-colors duration-300">View Menus</Button>
                         </Link>
                            </CardFooter>

                        </Card>
                        ))
                      }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage