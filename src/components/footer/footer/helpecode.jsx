import { FaLinkedin, FaQuestionCircle } from "react-icons/fa";
//import { FaLinkedin ,} from "react-icons/fa";
import {  FaGithub, FaInstagram, FaSquareFacebook,FaToolbox, FaGift,   } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
 export const data=["Contact Us","About Us","carries","flipcart stories","press","coprative process"];
 export const footerLinks = [
    "Contact Us",
    "About Us",
    "Careers",
    "Flipkart Stories",
    "Press",
    "Corporate Process"
  ];
 export  const infoLinks = [
    "Payments",
    "Shipping",
    "Cancellation & Returns",
    "FAQ",
    "Terms Of Use",
    "Privacy",
    "Security"
  ];
  
 export  const address = [
    "Flipkart Internet Private Limited,",
    "5th Floor, Ground Floor,",
    "B-1, Sector 63,",
    "Gurugram-301101, India."
  ];

  export const contactInfo = [
    "Flipkart Internet Private Limited,",
    "Email: support@flipkart.com",
    "Phone: +91 123 456 7890"
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

 