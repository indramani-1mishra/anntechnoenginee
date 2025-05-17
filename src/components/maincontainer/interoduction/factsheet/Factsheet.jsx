import { basicInformation } from '../helpercodeforintroduction/factsheetdata';
import './Factsheet.css';

export default function Factsheet() {
  return (
    <div className='factsheetcontainer'>
      <h1> basic Information</h1>
      {Object.entries(basicInformation).map(([key, value]) => (
        <div key={key} className='info'>
         <p className='pk'>{key.replaceAll("_", " ")}</p>

          
          <p>{Array.isArray(value) ? value.join(', ') : value}</p>
        </div>
      ))}
    </div>
  );
}


