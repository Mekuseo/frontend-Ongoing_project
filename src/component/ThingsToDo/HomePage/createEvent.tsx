import React from 'react';
import eventImg from "../../../assets/pics/Picture.png"
import ".//toDo.css";

const CreateEvent: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    width: '90%',
    height: '100%',
    margin: 'auto',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginTop: '20px',
  };

  const textStyle: React.CSSProperties = {
    marginTop: '-24%',
    marginLeft: '80%',
    transform: 'translate(-50%, -50%)',
    color: '#000',
    padding: '10px',
    width: '100%'
  };

  return (

    <div className='CreateEventCont'>
      <div style={containerStyle}>
        <img
          src={eventImg}
          style={imageStyle}
        />
        <div style={textStyle}>
          <h1 className='createEventText'>
              Create an event in 60 seconds
          </h1>
        </div>
      </div>
    </div>
    
  );
};

export default CreateEvent;