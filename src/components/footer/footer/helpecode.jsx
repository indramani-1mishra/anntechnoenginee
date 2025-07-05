import { FaLinkedin, FaQuestionCircle } from "react-icons/fa";
//import { FaLinkedin ,} from "react-icons/fa";
import {  FaGithub, FaInstagram, FaSquareFacebook,FaToolbox, FaGift,   } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";
 export const data=["Contact Us","About Us","carries","flipcart stories","press","coprative process"];
 export const footerLinks = [
   
   { name: "Introduction", path: "/Introduction" },
    { name: "Contact Us", path: "/sellerinfo" },
     { name: "Testimonial", path: "/Testimonial" },
      { name: "Sitemap", path: "/Sitemap" },
      { name: "others", path: "/all" },
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
    { icon: <FaSquareFacebook className="s" />, path: "https://www.facebook.com/profile.php?id=100082910731976" },
    { icon: <FaInstagram className="s" />, path: "https://www.instagram.com/anntechnoengineer123?igsh=ZjhjNGh5NXFyY3Zi" },
    { icon: <FaLinkedin className="s" />, path: "https://www.linkedin.com/in/ann-techno-engineer-996298277/" },
    { icon:<IoLogoYoutube className="s" />, path: "https://www.youtube.com/@anntechnoengineer4525" }
    
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

 