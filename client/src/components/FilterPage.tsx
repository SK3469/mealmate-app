
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

export type FilterOptionState= {
  id:string;
  label:string;
}
const filterOption: FilterOptionState[]=[
  {
    id:"burger",
    label:"Burger"
  },
  {
    id:"panner-tikka",
    label:"Panner-Tikka"
  },
  {
    id:"momos",
    label:"Momos"
  },
  {
    id:"biryani",
    label:"Biryani"
  },
]

const FilterPage = () => {
  const appliedFilterHandler=(value:string)=>{

  }

  return (
    <div className="md:w-72  ">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Filter by Cuisines</h1>
         <Button variant={"link"}>Reset</Button>
      </div>
      <div className="text-left flex flex-col gap-4 my-5">
{
  filterOption.map((option)=>(
    <div key={option.id} className="flex items-center gap-3">
<Checkbox
id={option.id}
onClick={()=>appliedFilterHandler(option.label)}
/>
<Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{option.label}</Label>
    </div>
  ))
}
      </div>
    </div>
  )
}

export default FilterPage