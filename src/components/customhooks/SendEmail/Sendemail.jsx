import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export const sendEmail = (productName, email, name, number, model, image) => {
  const templateParams = {
    User_name: name,
    email: email,
   Contact_number: number,
    product_name: productName,
    
    Model: model,
    image: image
  };

  emailjs.send('service_x2vzk0i', 'template_lmn4m0v', templateParams, 'TwUHyfYlogSI9YIXG')
    .then((res) => {
      console.log('Email sent successfully!', res);
      
      toast.success("Your enquiry sent successfully")
    })
    .catch((err) => {
      console.log('Failed to send email. Error:', err);
      alert("");
      toast.error("Failed to send your inquiry.");
    });
};
