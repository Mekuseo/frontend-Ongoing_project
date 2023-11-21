/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

interface AboutProps {
  onHighlightChange: (newHighlight: string) => void;
}

const About: React.FC<AboutProps> = ({ onHighlightChange }) => {
  const [highlight, setHighlight] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [errorInfo, setErrorInfo] = useState<string>('');
  const [highlightCharCount, setHighlightCharCount] = useState<number>(0);
  const [infoCharCount, setInfoCharCount] = useState<number>(0);

  const maxCharCount = 5000;

  const handleHighlightChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newHighlight = event.target.value;
    setHighlight(newHighlight);
    setError(newHighlight.trim() === '' ? 'Please provide a description' : '');
    setHighlightCharCount(newHighlight.length);
    onHighlightChange(newHighlight);
  };

  return (
    <>
      <div className="eventTextBox">
        <p>
            About the place
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
      </div>
    </>
  );
};

export default About;