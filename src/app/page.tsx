import Image from "next/image";
import { Forms } from "./components/Forms";
import { Divider } from "./components/Divider";
import { AiFillFacebook } from "react-icons/ai";
import { Get } from "./components/Get";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
    <div className="flex w-full mb-[62px] gap-6 items-center justify-center ">
      <div className="w-full max-w-[400px] hidden lg:block  h-[590px] bg-cover" style={{backgroundImage: 'url("/Instagram-demonstration.png")'}}></div>
    
    <main className="flex w-full lg:w-auto flex-col items-center justify-center p-12 lg:p-2 gap-4">
      <div className="w-full flex flex-col items-center justify-center gap-3 max-w-[350px] lg:min-w-[350px]">
      <div className="flex flex-col  p-8 ring-1 ring-[#DBDBDB] items-center justify-center self-center w-full max-w-[350px] gap-3">
        <Image 
        alt=""
        src="/Instagram-Logo.png"
        width={174}
        height={50} />

        <Forms />
        <Divider />

        <div className="flex w-full flex-col gap-3 mt-3">
        <a href="" className="flex text-[#59649D] transition-colors hover:text-[#515C97] w-full items-center justify-center gap-1">
          <AiFillFacebook />
          <span className="text-[14px] font-medium flex items-center">Log in with Facebook</span>
        </a>
        <a href="" className="justify-center flex items-center text-[10px] font-normal">
          Forgot Password?
        </a>
        </div>


      </div>
      

      <span className="text-[12px] p-6 w-full ring-1 gap-1 ring-[#DBDBDB] flex justify-center items-center ">Don't have an account? <a href="" className="hover:text-[#2996DD] font-medium transition-colors text-[#38A4EA]">Sign up</a></span>
        <Get />
        </div>
        
    </main>
    
    </div>
    <Footer />
    </div>
  );
}
