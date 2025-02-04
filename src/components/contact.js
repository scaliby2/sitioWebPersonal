import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${formData.name}`);
  };

  return (
    <section id="contact" className="min-vh-100 d-flex align-items-center bg-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://www.transparenttextures.com/patterns/hexellence.png)', backgroundSize: 'cover' }}>      
      <div className="container py-5">        
        <div className="row justify-content-center">   
          <h2 className="text-center mb-2 fw-bold text-dark">CONTACT</h2>   
          <div className="d-flex justify-content-center mb-3">
            <div style={{ width: '50px', height: '4px', backgroundColor: '#6f42c1', borderRadius: '2px' }}></div>
          </div>
          <p className="text-center text-muted mb-4">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </p>

          <div className="col-lg-8 col-md-10">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="form-control bg-light border-0 shadow-sm rounded-3" 
                      placeholder="Enter Your Name" 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="form-control bg-light border-0 shadow-sm rounded-3" 
                      placeholder="Enter Your Email" 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted">Message</label>
                    <textarea 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      className="form-control bg-light border-0 shadow-sm rounded-3" 
                      placeholder="Enter Your Message" 
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-3 shadow-sm border-0 rounded-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
