import React, { useState } from 'react';
import './form.css';

interface TextProps {
  onHighlightChange: (newHighlight: string) => void;
  onInfoChange: (newInfo: string) => void;
}

const TextBox: React.FC<TextProps> = ({ onHighlightChange, onInfoChange }) => {
  const [highlight, setHighlight] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [errorInfo, setErrorInfo] = useState<string>('');
  const [highlightCharCount, setHighlightCharCount] = useState<number>(0);
  const [infoCharCount, setInfoCharCount] = useState<number>(0);

  const maxCharCount = 5000;

  const handleHighlightChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newHighlight = event.target.value;
    if (newHighlight.length <= maxCharCount) {
      setHighlight(newHighlight);
      setError(newHighlight.trim() === '' ? 'Please provide a description' : '');
      setHighlightCharCount(newHighlight.length);
      onHighlightChange(newHighlight);
    }
  };
  
  const handleInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInfo = event.target.value;
    if (newInfo.length <= maxCharCount) {
      setInfo(newInfo);
      setErrorInfo(newInfo.trim() === '' ? 'Please provide a description' : '');
      setInfoCharCount(newInfo.length);
      onInfoChange(newInfo);
    }
  };
  

  return (
    <>
      <div className="eventTextBox">
        <p>
          Highlights of activities 
          <span>
            (describe your event)
          </span>
        </p>
        <div className="textBoxCont">
          <div className="textBox-container">
            <textarea
              id="textArea"
              value={highlight}
              onChange={handleHighlightChange}
              className={error ? 'error' : ''}
              placeholder='Example: something unique and interesting '
            />
            <div className="textBoxErrorCont">
              {error && <p className="error-message">{error}</p>}
              <p className='right'>{maxCharCount - highlightCharCount}</p>
            </div>
          </div>
        </div>
        <p>
          Important Information 
          <span>
            (give attendees tips on how to make the event enjoyable/fun)
          </span>
        </p>
        <div className="textBoxCont">
          <div className="textBox-container">
            <textarea
              id="textArea2"
              value={info}
              onChange={handleInfoChange}
              className={errorInfo ? 'error' : ''}
              placeholder="Come early, Gifts for first timers, Watch-out for your items"
            />
            <div className="textBoxErrorCont">
              {errorInfo && <p className="error-message">{errorInfo}</p>}
              <p className='right'>{maxCharCount - infoCharCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;