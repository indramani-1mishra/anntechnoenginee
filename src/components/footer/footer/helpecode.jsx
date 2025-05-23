import { FaLinkedin, FaQuestionCircle } from "react-icons/fa";
//import { FaLinkedin ,} from "react-icons/fa";
import {  FaGithub, FaInstagram, FaSquareFacebook,FaToolbox, FaGift,   } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
 export const data=["Contact Us","About Us","carries","flipcart stories","press","coprative process"];
 export const footerLinks = [
   
   { name: "Introduction", path: "/Introduction" },
    { name: "Contact Us", path: "/sellerinfo" },
     { name: "Testimonial", path: "/Testimonial" },
      { name: "Sitemap", path: "/Sitemap" },
      { name: "others", path: "/others" },
  ];
 export const infoLinks =[
    { name: "Dehumidifires", path: "/Dehumidifires" },
    { name: "Ultrasonic Humidifier", path: "/Ultrasonic_Humidifier" },
    { name: "Desiccant Dehumidifier", path: "/Desiccant_Dehumidifier" },
    { name: "Industrial Dehumidifier", path: "/Industrial_Dehumidifier" },
    { name: "Refrigerated Type Compressed Air Dryer", path: "/Refrigerated_Type_Compressed_Air_Dryer" },

  ]

   export const infoLinks1 =[
    { name: "Humidifier", path: "/Humidifier" },
    { name: "Industrial Dehumidifiers", path: "/Industrial_Dehumidifier" },
    { name: "Ceiling Mounted Dehumidifier", path: "/Ceiling_Mounted_Dehumidifier" },
    { name: "Ultrasonic Industrial Humidifier", path: "/Ultrasonic_Humidifier" },
   { name: "Electric Humidifier", path: "/Electric_Humidifier" },
  ]
  


  
 export  const address = [
    "Ashish Kumar Nayak (Owner)",
    "ANN Techno Engineer,",
    "H. No. 840/2, 0, Chirag Delhi Primary School Near Shiv Mandir",
    
    "New Delhi - 110017, Delhi, India"
  ];

  export const contactInfo = [
    "anntechnoengineer.com",
    "Email: info@anntechno.in",
    "Phone: +91 88511 48551"
  ];
  
   export const socialLinks = [
    { icon: <FaSquareFacebook className="s" />, path: "/" },
    { icon: <FaInstagram className="s" />, path: "/" },
    { icon: <FaLinkedin className="s" />, path: "/" },
    { icon: <FaGithub className="s" />, path: "/" }
  ];
  
  



export const footerActions = [
  {
    icon: <FaToolbox className="r" />,
    text: "Become a Seller",
    path: "/"
  },
  {
    icon: <CiStar className="r" />,
    text: "Advertise",
    path: "/"
  },
  {
    icon: <FaGift className="r" />,
    text: "Gift Card",
    path: "/"
  },
  {
    icon: <FaQuestionCircle className="r" />,
    text: "Help Center",
    path: "/"
  }
];

 