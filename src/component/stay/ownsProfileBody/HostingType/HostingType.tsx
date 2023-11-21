import { useState } from "react";
import UploadOP from "../uploadOP";

const HostingType = () => {
  const [isChecked] = useState(false);
  return (
    <div className="hosting_con">
      <div>
        <h1 className="reusedH1">Hosting Type</h1>
      </div>
      <div className="hostingConList">
        <label className="container">
          <b>I own the property</b>

          <p>Private host</p>
          <input type="radio" name="radio" />
          <input type="radio" checked={isChecked} name="radio" />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          <b>I represent a company</b>

          <p>Property management company</p>
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>

        <UploadOP />
      </div>
    </div>
  );
};

export default HostingType;
