import Image from "next/image";
import backgroundOne from "../assets/images/backgroundOne.svg";


export default function Signupimage() {

  return (
    <div className="flex justify-center items-center my-20 shadow-2xl">
        <Image
          src={backgroundOne}
          alt="Career planning workspace"
          className="w-[100%] h-screen"
          
        />
    </div>
  );
}
