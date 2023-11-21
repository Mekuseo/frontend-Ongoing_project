import { useState } from 'react';
import "../../../../component/HotelListing/ownsProfileBody/propertyAxisMobile.css"

const HostingType = (props: { onRadioChange: any; selectedRadio: any; onFileInputChange: any; uploadedFile: any; }) => {
  const { onRadioChange, selectedRadio, onFileInputChange } = props;
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageUrl(result);
      };

      reader.readAsDataURL(file);
      onFileInputChange(e);
    }
  };
  
  return (
    <>
      <div className="hosting_con">
        <div>
          <h1 className="reusedH1">
            Hosting Type
          </h1>
          <p className="subheadreuse">
            Please select one property type
          </p>
        </div>

        <div className="hostingConList">
          <div className="row">
            <div className="hostinglistcol">
              <label className="container">
                <b>I own the property</b>
                <p>Private host</p>
                <input
                  type="radio"
                  value="I own the property"
                  onChange={onRadioChange}
                  checked={selectedRadio === 'I own the property'}
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="hostinglistcol">
              <label className="container">
                <b>I represent a company</b>
                <p>Property management company</p>
                <input
                  type="radio"
                  value="I represent a company"
                  onChange={onRadioChange}
                  checked={selectedRadio === 'I represent a company'}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>

          {selectedRadio === 'I represent a company' && (
            <div>
              <label className="add-file">
                <b>Add a document</b>
                <input type="file" onChange={handleFileInputChange} />
              </label>
              {imageUrl && (
                <div className="uploaded-image">
                  <img src={imageUrl} alt="Uploaded Document" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HostingType;
