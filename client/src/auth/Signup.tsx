import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { Contact2, Loader2, LockKeyhole, Mail, PhoneCallIcon, User2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";


// type SignupInputState = {
//   fullname: string;
//   email: string;
//   password: string;
//   contact: string;
// }

const Signup = () => {

  const loading = false;
  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: ""

  })
  const [errors, setErrors]= useState<Partial<SignupInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const SignupSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result= userSignupSchema.safeParse(input)
    if(!result.success){
      const fieldErrors= result.error.formErrors.fieldErrors;
setErrors(fieldErrors as Partial<SignupInputState>)
return;
    }
    console.log(input);

  }
  return (
    <div className=" min-h-screen flex justify-center items-center ">

      <form onSubmit={SignupSubmitHandler} className=" md:p-8 w-full max-w-lg md:rounded-lg p-5 md:border border-grey-200  md:shadow-lg mx-5 ">
        <div className="mb-4">
          <h1 className="text-orange font-bold text-2xl">MealMate</h1>
        </div>
        <div className=" relative my-3">
          <Input className="pl-10 focus-visible:ring-1"
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            placeholder="Name" />
          <User2 className=" absolute inset-y-2 left-2 pl-1 text-gray-600 cursor-pointer" />
          {
            errors  && <span className="text-sm font-thin text-red-700">{errors.fullname}</span>
          }
        </div>
        <div className=" relative my-3">
          <Input className="pl-10 focus-visible:ring-1"
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Email" />
          <Mail className=" absolute inset-y-2 left-2 pl-1 text-gray-600 cursor-pointer" />
          {
            errors  && <span className="text-sm font-thin text-red-700">{errors.email}</span>
          }
        </div>
        <div className="relative ">
          <Input className="pl-10 focus-visible:ring-1"
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Password" />
          <LockKeyhole className=" absolute inset-y-2 left-2 pl-1 text-gray-600 cursor-pointer" />
          {
            errors  && <span className="text-sm font-thin text-red-700">{errors.password}</span>
          }
        </div>
        <div className=" relative my-3">
          <Input className="pl-10 focus-visible:ring-1"
            type="text"
            name="contact"
            value={input.contact}
            onChange={changeEventHandler}
            placeholder="Contact" />
          <PhoneCallIcon className=" absolute inset-y-2 left-2 pl-1 text-gray-600 cursor-pointer" />
          {
            errors  && <span className="text-sm font-thin text-red-700">{errors.contact}</span>
          }
        </div>
        <div className="my-7">
          {
            loading ? (<Button disabled className=" bg-orange hover:bg-hovorOrange w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>) : (<Button className=" bg-orange hover:bg-hovorOrange w-full">Signup</Button>)
          }
        </div>
        <Separator />
        <div className="flex gap-2">
          <p>Already have an account?{""}</p>
          <Link to="/login">Login</Link>
        </div>


      </form>
    </div>
  )
}

export default Signup;