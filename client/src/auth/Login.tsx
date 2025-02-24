import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, SignupInputState, userLoginSchema, userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";


// type LoginInputState = {
//     email: string;
//     password: string;
// }

const Login = () => {

    const loading = false;
    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: ""
    })
    const [errors, setErrors]= useState<Partial<LoginInputState>>({})

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
// form validation checking..
const result=  userLoginSchema.safeParse(input);
if(!result.success){
const fieldErrors = result.error.formErrors.fieldErrors;
setErrors(fieldErrors as Partial<LoginInputState>);
return;
}
//Login api implementation executes here...
        console.log(input);

    }
    return (
        <div className=" min-h-screen flex justify-center items-center ">

            <form onSubmit={loginSubmitHandler} className=" md:p-8 w-full max-w-lg md:rounded-lg p-5 md:border border-grey-200  md:shadow-lg mx-5 ">
                <div className="mb-4">
                    <h1 className="text-orange font-bold text-2xl">MealMate</h1>
                </div>
                <div className=" relative my-3">
                    <Input className="pl-10 focus-visible:ring-1"
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        placeholder="Enter Your Email" />
                    <Mail className=" absolute inset-y-2 left-2 pl-1 text-gray-600 cursor-pointer" />
                    {
                        errors && <span className="text-xs font-extralight text-red-700">{errors.email}</span>
                    }
                </div>
                <div className="relative ">
                    <Input className="pl-10 focus-visible:ring-1"
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={changeEventHandler}
                        placeholder="Enter Your Password" />
                    <LockKeyhole className=" absolute inset-y-2 left-2 pl-1 text-gray-600 cursor-pointer" />
                    {
                        errors && <span className="text-xs font-extralight text-red-700">{errors.password}</span>
                    }
                </div>
                <div className="my-7 flex flex-col gap-4">
                    {
                        loading ? (<Button disabled className=" bg-orange hover:bg-hovorOrange w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>) : (<Button className=" bg-orange hover:bg-hovorOrange w-full">Login</Button>)
                    }
                    <Link  to="/forgot-password">Forgot Password</Link>
                </div>
                <Separator />
                <div className="flex gap-2">
                    <p>Don't have any account?{""}</p>
                    <Link to="/signup">Signup</Link>
                </div>


            </form>
        </div>
    )
}

export default Login;