import { FaLinkedin, FaQuestionCircle } from "react-icons/fa";
//import { FaLinkedin ,} from "react-icons/fa";
import {  FaGithub, FaInstagram, FaSquareFacebook,FaToolbox, FaGift,   } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
 export const data=["Contact Us","About Us","carries","flipcart stories","press","coprative process"];
 export const footerLinks = [
    "Introduction",
  "Testimonial",
  "Sitemap",
  "Contact Us"
  ];
 export const infoLinks =[
    { name: "Dehumidifires", path: "/Dehumidifires" },
    { name: "Ultrasonic Humidifier", path: "/Ultrasonic Humidifier" },
    { name: "Desiccant Dehumidifier", path: "/Desiccant Dehumidifier" },
    { name: "Industrial Dehumidifier", path: "/Industrial Dehumidifier" }
  ]

   export const infoLinks1 =[
    { name: "Humidifier", path: "/Humidifier" },
    { name: "Industrial Dehumidifiers", path: "/Industrial Dehumidifiers" },
    { name: "Ceiling Mounted Dehumidifier", path: "/Ceiling Mounted Dehumidifier" },
    { name: "Ultrasonic Industrial Humidifier", path: "/Ultrasonic Industrial Humidifier" }
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

 