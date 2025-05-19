import React, { useState } from 'react';
import './Addproducts.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ADDProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    minOrderQty: '',
    capacity: '',
    usage: '',
    material: '',
    brand: '',
    voltage: '',
    modelType: '',
    application: '',
    features: '',
    brochureUrl: '',
    airflow: '',
    category: '',
    color: '',
    image: null, // file object
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0], // Store file object
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

    const form = new FormData();

    for (const key in formData) {
      if (key === 'features') {
        // Convert comma-separated string to array
        const featuresArray = formData.features
          .split(',')
          .map((f) => f.trim())
          .filter((f) => f);
        form.append('features', JSON.stringify(featuresArray));
      } else {
        form.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        'https://technoengnearbackend.onrender.com/api/v1/products',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

     // console.log(response.data);
     
      toast.success("Product uploaded successfully!");
    } catch (error) {
      console.error('Upload error:', error);
     
      toast.error('Error uploading product');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mbu">Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {[
            { label: 'Name', name: 'name', type: 'text', required: true },
            { label: 'Price', name: 'price', type: 'number', required: true },
            { label: 'Minimum Order Quantity', name: 'minOrderQty', type: 'number' },
            { label: 'Capacity', name: 'capacity', type: 'text' },
            { label: 'Usage', name: 'usage', type: 'text' },
            { label: 'Material', name: 'material', type: 'text' },
            { label: 'Brand', name: 'brand', type: 'text' },
            { label: 'Voltage', name: 'voltage', type: 'text' },
            { label: 'Model Type', name: 'modelType', type: 'text' },
            { label: 'Application', name: 'application', type: 'text' },
            { label: 'Image', name: 'image', type: 'file' },
            { label: 'Brochure URL', name: 'brochureUrl', type: 'text' },
            { label: 'Airflow', name: 'airflow', type: 'text' },
            { label: 'Category', name: 'category', type: 'text' },
            { label: 'Color', name: 'color', type: 'text' },
          ].map((field) => (
            <div className="form-group" key={field.name}>
              <label className="form-label">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                required={field.required || false}
                className="form-control"
                value={field.type === 'file' ? undefined : formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        <div className="mb-3k">
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

        <button type="submit" className="btn btn-primary">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ADDProductForm;
