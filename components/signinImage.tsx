import Image from "next/image";
import backgroundOne from "../assets/images/signinImage.svg";


export default function Signinimage() {

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
