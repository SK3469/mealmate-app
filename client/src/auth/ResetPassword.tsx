import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Loader2, LockKeyhole, MailIcon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  const [newPassowrd,setNewPassword]= useState<string>("");
  const loading:boolean= false;
  return (
    <div className="min-h-screen flex justify-center items-center w-full ">
        <form className=" flex flex-col  md:p-8 md:border border-gray-200 md:rounded-md md:shadow-md max-w-md" >
          <div className="mb-9 flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-orange">Reset Password</h1>
            <p className="text-sm">Enter your new password to reset.</p>
          </div>
            <div className=" relative ">
                <Input
                className="pl-10 focus-visible:ring-1"
                type="password"
                value={newPassowrd}
                placeholder="Enter Your New Password"
                onChange={(e)=>setNewPassword(e.target.value)}
                />
                <LockKeyhole className="absolute inset-y-2 left-2 pl-1 text-gray-600 pointer-events-none" />
            </div>
            <div className="my-6">
            {
                        loading ? (<Button disabled className=" bg-orange hover:bg-hovorOrange w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>) : (<Button className=" bg-orange hover:bg-hovorOrange w-full">Reset</Button>)
                    }
            </div>
            <Separator />
            <div>
              <p>Back to <span  className="text-blue-800"><Link to="/login">Login</Link></span></p>
            </div>
        </form>
    </div>
  )
}

export default ResetPassword