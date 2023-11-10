import pic from "../assets/pic.png";
import { React, Facebook, GitHub, Instagram, LinkedIn, Email } from "../assets";

export default function Fotter() {
  return (
    <>
      <div className="sm:px-16 px-6 w-full flex items-center py-4 bottom-0 z-20 bg-primary ">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex">
            <img src={pic} className="w-12 h-12 object-contain" />
            <p className="md:text-[25px] sm:text-[22px] items-center text-white sm:flex font-bold hidden opacity-90">
              &nbsp; | ROHIT YADAV
            </p>
          </div>
        </div>
        <ul className="flex items-center xl:gap-5 sm:gap-4 gap-2">
          {/* <li className='contact_icon cursor-pointer' >
                        <img  onClick={() => window.open("https://www.facebook.com/RohitYadav.532", "_blank")} src={Facebook} className='sm:w-20 w-24 object-contain' alt='email' />
                    </li> */}
          <li
            onClick={() =>
              window.open("https://github.com/Rohit-Yadavv", "_blank")
            }
            className="contact_icon cursor-pointer"
          >
            <img
              src={GitHub}
              className="sm:w-20 w-24 object-contain"
              alt="facebook"
            />
          </li>
          {/* <li onClick={() => window.open("https://www.instagram.com/rewarrior_532/?hl=en", "_blank")} className='contact_icon cursor-pointer'>
                        <img src={Instagram} className='sm:w-20 w-24 object-contain' alt='instagram' />
                    </li> */}
          <li
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rohit-yadav-240448255/",
                "_blank"
              )
            }
            className="contact_icon cursor-pointer"
          >
            <img
              src={LinkedIn}
              className="sm:w-20 w-24 object-contain"
              alt="linkedin"
            />
          </li>
          <li
            onClick={() => window.open("mailto:rk4740779@gmail.com")}
            className="contact_icon cursor-pointer"
          >
            <img
              src={Email}
              className="sm:w-20 w-24 object-contain"
              alt="linkedin"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
