import React, { useState, useRef } from 'react';
import './Addproducts.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Initial empty form values including all possible fields
const initialFormData = {
  category: '',
  price: '',
  minOrderQty: '',
  features: '',
  image: null,
  name:"",
  
  // Portable Dehumidifier fields
  make: '',
  model: '',
  dehumidifyingCapacity: '',
  airFlow: '',
  humiditySetting: '',
  workingTemp: '',
  powerSupply: '',
  powerConsumption: '',
  ratedCurrent: '',
  compressorType: '',
  noiseLevel: '',
  refrigerant: '',
  waterTankCapacity: '',
  bodyType: '',
  productDimensions: '',
  qualityApproval: '',

  // Desiccant Dehumidifier fields
  processAirFlow: '',
  reactivationAirFlow: '',
  appliedTemperature: '',
  maxPower: '',
  powerRating: '',
  voltage: '',
  current: '',
  dimension: '',
  weight: '',

  // Ultrasonic Humidifier fields
  humidificationCapacity: '',
  powerInput: '',
  airVolume: '',
  controlMode: '',
  humidityControl: '',
  controlPrecision: '',
  mistOutlet: '',
  waterTankVolume: '',
  wayOfWater: '',
  waterQualityRequired: '',
  dimensions: '',
    // Ceiling Mounted Dehumidifier fields
  ceilingMake: '',
  ceilingModel: '',
  ceilingDehumidificationCapacity: '',
  ceilingDehumidifyingCapacityKgHr: '',
  ceilingAirFlow: '',
  ceilingHumiditySetting: '',
  ceilingWorkingTemp: '',
  ceilingPowerSupply: '',
  ceilingPowerConsumption: '',
  ceilingRatedCurrent: '',
  ceilingCompressorType: '',
  ceilingNoiseLevel: '',
  ceilingRefrigerant: '',
  ceilingWaterTankCapacity: '',
  ceilingProductDimensions: '',
  ceilingQualityApproval: '',

};

const categoryFields = {
  'Dehumidifires': [
    { label: 'Make', name: 'make', type: 'text', required: true },
    { label: 'name', name: 'name', type: 'text', required: true },
    { label: 'Model', name: 'model', type: 'text', required: true },
    { label: 'Dehumidifying Capacity (kg/hr)', name: 'dehumidifyingCapacity', type: 'text' },
    { label: 'Air Flow (m3/hr)', name: 'airFlow', type: 'text' },
    { label: 'Humidity Setting', name: 'humiditySetting', type: 'text' },
    { label: 'Working Temp.', name: 'workingTemp', type: 'text' },
    { label: 'Power Supply', name: 'powerSupply', type: 'text' },
    { label: 'Power Consumption', name: 'powerConsumption', type: 'text' },
    { label: 'Rated Current', name: 'ratedCurrent', type: 'text' },
    { label: 'Compressor Type', name: 'compressorType', type: 'text' },
    { label: 'Noise Level', name: 'noiseLevel', type: 'text' },
    { label: 'Refrigerant', name: 'refrigerant', type: 'text' },
    { label: 'Capacity of Water Tank', name: 'waterTankCapacity', type: 'text' },
    { label: 'Body Type', name: 'bodyType', type: 'text' },
    { label: 'Product Dimensions', name: 'productDimensions', type: 'text' },
    { label: 'Quality/Safety Approval', name: 'qualityApproval', type: 'text' },
  ],
   'Industrial Dehumidifier': [
    { label: 'Make', name: 'make', type: 'text', required: true },
   { label: 'name', name: 'name', type: 'text', required: true },
    { label: 'Model', name: 'model', type: 'text', required: true },
    { label: 'Dehumidifying Capacity (kg/hr)', name: 'dehumidifyingCapacity', type: 'text' },
    { label: 'Air Flow (m3/hr)', name: 'airFlow', type: 'text' },
    { label: 'Humidity Setting', name: 'humiditySetting', type: 'text' },
    { label: 'Working Temp.', name: 'workingTemp', type: 'text' },
    { label: 'Power Supply', name: 'powerSupply', type: 'text' },
    { label: 'Power Consumption', name: 'powerConsumption', type: 'text' },
    { label: 'Rated Current', name: 'ratedCurrent', type: 'text' },
    { label: 'Compressor Type', name: 'compressorType', type: 'text' },
    { label: 'Noise Level', name: 'noiseLevel', type: 'text' },
    { label: 'Refrigerant', name: 'refrigerant', type: 'text' },
    { label: 'Capacity of Water Tank', name: 'waterTankCapacity', type: 'text' },
    { label: 'Body Type', name: 'bodyType', type: 'text' },
    { label: 'Product Dimensions', name: 'productDimensions', type: 'text' },
    { label: 'Quality/Safety Approval', name: 'qualityApproval', type: 'text' },
  ],
  'Ultrasonic Humidifier': [
    { label: 'Make', name: 'make', type: 'text' },
    { label: 'Model', name: 'model', type: 'text' },
     { label: 'name', name: 'name', type: 'text', required: true },
    { label: 'Dehumidifying Capacity (20°C,60%)', name: 'dehumidifyingCapacity', type: 'number' },
    { label: 'Process Air Flow', name: 'processAirFlow', type: 'text' },
    { label: 'Reactivation Air Flow', name: 'reactivationAirFlow', type: 'text' },
    { label: 'Applied Temperature', name: 'appliedTemperature', type: 'text' },
    { label: 'Max Power', name: 'maxPower', type: 'text' },
    { label: 'Power Rating', name: 'powerRating', type: 'text' },
    { label: 'Voltage', name: 'voltage', type: 'text' },
    { label: 'Current', name: 'current', type: 'text' },
    { label: 'Dimension', name: 'dimension', type: 'text' },
    { label: 'Weight', name: 'weight', type: 'text' },
    { label: 'Quality/Safety Approval', name: 'qualityApproval', type: 'text' },
  ],
  'Desiccant Dehumidifier': [
    { label: 'Make', name: 'make', type: 'text' },
   { label: 'name', name: 'name', type: 'text', required: true },
    { label: 'Model', name: 'model', type: 'text' },
    { label: 'Humidification Capacity', name: 'humidificationCapacity', type: 'text' },
    { label: 'Power Supply', name: 'powerSupply', type: 'text' },
    { label: 'Power Input (w)', name: 'powerInput', type: 'text' },
    { label: 'Air Volume', name: 'airVolume', type: 'text' },
    { label: 'Control Mode', name: 'controlMode', type: 'text' },
    { label: 'Humidity Control', name: 'humidityControl', type: 'text' },
    { label: 'Control Precision', name: 'controlPrecision', type: 'text' },
    { label: 'Mist Outlet', name: 'mistOutlet', type: 'text' },
    { label: 'Volume of Water Tank', name: 'waterTankVolume', type: 'text' },
    { label: 'Way of Water', name: 'wayOfWater', type: 'text' },
    { label: 'Water Quality Required', name: 'waterQualityRequired', type: 'text' },
    { label: 'Body Type', name: 'bodyType', type: 'text' },
    { label: 'Weight', name: 'weight', type: 'text' },
    { label: 'Dimensions (mm)', name: 'dimensions', type: 'text' },
    { label: 'Quality/Safety Approval', name: 'qualityApproval', type: 'text' },
  ],
    'Ceiling Mounted Dehumidifier': [
    { label: 'Make', name: 'ceilingMake', type: 'text', required: true },
    { label: 'name', name: 'name', type: 'text', required: true },
    { label: 'Model', name: 'ceilingModel', type: 'text', required: true },
    { label: 'Dehumidification Capacity (L/D)', name: 'ceilingDehumidificationCapacity', type: 'text' },
    { label: 'Dehumidifying Capacity (kg/hr)', name: 'ceilingDehumidifyingCapacityKgHr', type: 'text' },
    { label: 'Air Flow (m3/hr)', name: 'ceilingAirFlow', type: 'text' },
    { label: 'Humidity Setting', name: 'ceilingHumiditySetting', type: 'text' },
    { label: 'Working Temp.', name: 'ceilingWorkingTemp', type: 'text' },
    { label: 'Power Supply', name: 'ceilingPowerSupply', type: 'text' },
    { label: 'Power Consumption', name: 'ceilingPowerConsumption', type: 'text' },
    { label: 'Rated Current', name: 'ceilingRatedCurrent', type: 'text' },
    { label: 'Compressor Type', name: 'ceilingCompressorType', type: 'text' },
    { label: 'Noise Level', name: 'ceilingNoiseLevel', type: 'text' },
    { label: 'Refrigerant', name: 'ceilingRefrigerant', type: 'text' },
    { label: 'Capacity of Water Tank', name: 'ceilingWaterTankCapacity', type: 'text' },
    { label: 'Product Dimensions (L×W×H)', name: 'ceilingProductDimensions', type: 'text' },
    { label: 'Quality/Safety Approval', name: 'ceilingQualityApproval', type: 'text' },
  ],

};

const ADDProductForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Reset form and set category on change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData({
      ...initialFormData,
      category,
    });
    if (fileInputRef.current) fileInputRef.current.value = null; // reset file input
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.category) {
    toast.error('Please select a category first.');
    return;
  }

  const form = new FormData();

  // 1. Get the list of technical field names for the selected category
  const technicalKeys = categoryFields[formData.category].map(f => f.name);

  // 2. Collect those fields into an object
  const technicalSpecs = {};
  technicalKeys.forEach(key => {
    if (formData[key]) {
      technicalSpecs[key] = formData[key];
    }
  });

  // 3. Append common fields
  form.append('category', formData.category);
  form.append('price', formData.price);
  form.append('minOrderQty', formData.minOrderQty || '');
  form.append('name', formData.name || '');

  // 4. Convert features to array and append as JSON
  const featuresArray = formData.features
    .split(',')
    .map(f => f.trim())
    .filter(f => f);
  form.append('features', JSON.stringify(featuresArray));

  // 5. Append technical specifications as JSON
  form.append('technicalSpecs', JSON.stringify(technicalSpecs));

  // 6. Append image if provided
  if (formData.image) {
    form.append('image', formData.image);
  }

  // 7. Submit the form
  try {
   const response= await axios.post(
      'https://technoengnearbackend.onrender.com/api/v1/products',
      form,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      }
    );
    toast.success('Product uploaded successfully!');
    console.log(response);
    setFormData(initialFormData);
    if (fileInputRef.current) fileInputRef.current.value = null;
   // navigate('/');
  } catch (error) {
    console.error(error);
    toast.error('Error uploading product');
  }
};


  return (
    <div className="container">
     
      <form onSubmit={handleSubmit} className='formv'>
        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            className="form-control"
            required
          >
            <option value="">Select Category</option>
            <option value="Dehumidifires">Dehumidifiers</option>
             <option value="Industrial Dehumidifier">Industrial Dehumidifier</option>
            <option value="Desiccant Dehumidifier">Desiccant Dehumidifier</option>
            <option value="Ultrasonic Humidifier">Ultrasonic Humidifier</option>
            <option value="Ceiling Mounted Dehumidifier">Ceiling Mounted Dehumidifier</option>
          </select>
        </div>

        {/* Render category specific fields */}
        {formData.category &&
          categoryFields[formData.category].map((field) => (
            <div className="form-group" key={field.name}>
              <label className="form-label">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="form-control"
                required={field.required || false}
              />
            </div>
          ))}

        {/* Common fields */}
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Minimum Order Quantity</label>
          <input
            type="number"
            name="minOrderQty"
            value={formData.minOrderQty}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Features (comma separated)</label>
          <textarea
            name="features"
            className="form-control"
            rows="3"
            placeholder="Enter features separated by commas"
            value={formData.features}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            className="form-control"
            ref={fileInputRef}
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Upload Product
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          style={{backgroundColor:"red"}}
          onClick={() => navigate('/')}
        >
          Exit
        </button>
      </form>
    </div>
  );
};

export default ADDProductForm;