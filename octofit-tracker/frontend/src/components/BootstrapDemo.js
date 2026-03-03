import React from 'react';

const BootstrapDemo = () => (
  <div className="row mb-4">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Bootstrap Card</h5>
          <p className="card-text">This is a demo card using Bootstrap styles.</p>
          <a href="#" className="btn btn-primary">Bootstrap Button</a>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email.</div>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  </div>
);

export default BootstrapDemo;
