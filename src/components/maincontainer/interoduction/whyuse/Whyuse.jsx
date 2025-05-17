
import { successFactors } from '../helpercodeforintroduction/whyusedata';
import { FaArrowRight } from "react-icons/fa";
import SearchContext from '../../../../context/context';
import SupplierInfoModal from '../../../footer/foterbanner.jsx/Supplayerinfomodel';
import './Whyuse.css'; // 🔗 Import CSS
import Formoreinfo from '../formoreinfo/Formoreinfo';

export default function Whyuse() {
  

  return (
    <>
      <div className="whyuse-container">
        <h1 className="whyuse-title">Why Choose Us</h1>

        <div className="whyuse-description">
          <p>
            Owing to the superior quality of the product range offered, we have carved a firm foothold in the domain.
            The products offered by us are in compliance with industrial standards and are offered at most affordable prices.
            The professionals appointed by us invest their long working hours in manufacturing products as per clients' specifications
            and details to meet their exact requirements.
          </p>

          <ul className="whyuse-list">
            {successFactors.map((item, index) => (
              <li key={index}><FaArrowRight className="list-icon" /> {item}</li>
            ))}
          </ul>
        </div>

         <Formoreinfo/>
      </div>

      
    </>
  );
}
