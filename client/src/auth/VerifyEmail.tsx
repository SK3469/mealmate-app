import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();
  const loading: boolean = false;
  const handlerChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value == "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    //move forword
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus()
    }
  }
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Backspace' && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen mx-auto  ">
      <div className=" md:border border-gray-200 p-6 md:rounded-lg md:shadow-md ">
        <div className="mb-8" >
          <h1 className="font-bold text-2xl text-orange">Verify Your email</h1>
          <p className="font-sm text-gray-600 ">Enter the 6 digit code sent to your email address</p>
        </div>
        <form>
          <div className="flex justify-between my-3">
            {
              otp.map((letter: string, idx: number) => (
                <Input
                  key={idx}
                  ref={(element) => (inputRef.current[idx] = element)}
                  maxLength={1}
                  type="text"
                  value={letter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlerChange(idx, e.target.value)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx, e)}
                  className="md:w-12 md:h-12 w-8 h-8 text-center focus-visible:ring-0 ring-1"
                />
              ))
            }
          </div>
          <div className="my-7">
          {
            loading ? (<Button disabled className=" bg-orange hover:bg-hovorOrange w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>) :
             (<Button className=" bg-orange hover:bg-hovorOrange w-full">Verify</Button>)
          }
        </div>

        </form>
      </div>
    </div>
  )
}

export default VerifyEmail