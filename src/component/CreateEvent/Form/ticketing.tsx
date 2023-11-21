// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import './form.css';

interface TicketingContentProps {
  showFileInput1: boolean;
  showFileInput2: boolean;
  amountPerPerson: number | null;
}

const Ticketing: React.FC<TicketingContentProps> = ({ showFileInput1: propShowFileInput1, showFileInput2: propShowFileInput2, amountPerPerson: propAmountPerPerson }) => {
  const [showFileInput1, setShowFileInput1] = useState(false);
  const [showFileInput2, setShowFileInput2] = useState(false);
  const [amountPerPerson, setAmountPerPerson] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [numberOfTickets, setNumberOfTickets] = useState<number | undefined>(undefined);

  const handleLinkClick = () => {
    window.open('https://www.canva.com/templates', '_blank');
  };

  const handleCheckboxChange1 = () => {
    setShowFileInput1(!showFileInput1);
    setShowFileInput2(false);
  };

  const handleCheckboxChange2 = () => {
    setShowFileInput2(!showFileInput2);
    setShowFileInput1(false);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/[^\d]/g, '');
    setInputValue(formatCurrency(rawValue));
    setAmountPerPerson(parseFloat(rawValue) / 100);
  };

  const handleNumberOfTicketsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/[^\d]/g, '');
    setInputValue(formatCurrency(rawValue));
    setNumberOfTickets(parseFloat(rawValue) / 100);
  };

  const formatCurrency = (rawValue: string): string => {
    const numericValue = parseInt(rawValue, 10) / 100;
    const formattedValue = numericValue.toLocaleString('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    });
    return formattedValue;
  };

  return (
    <div className='picsCont'>
      <h2>Ticketing</h2>
      <div className="row">
        <div className='ticketingSide'>
          <label className="datesContainer">
            Free
            <input type="checkbox" checked={showFileInput2} onChange={handleCheckboxChange2} />
            <span className="datesCheckmark"></span>
          </label>

          <label className="datesContainer">
            Paid
            <input type="checkbox" checked={showFileInput1} onChange={handleCheckboxChange1} />
            <span className="datesCheckmark"></span>
          </label>
        </div>

        <div className="ticketingSide">
          {showFileInput1 && 
            <div className="fileUploadPics">
              <form action="">
                <label htmlFor="">
                  Amount per person
                </label>
                <input type="text" placeholder='Enter amount' value={inputValue} onChange={handleAmountChange} />
              </form>
            </div>
          }
        </div>
      </div>

      {showFileInput2 ? 'Free' : null}
      {showFileInput1 && amountPerPerson !== null
        ? `Paid: ${formatCurrency((amountPerPerson * 100).toString())}`
        : null}

      <form action="" className='ticketingForm'>
        <div className="ticketingInput">
          <label htmlFor="">
            Organizer’s name
          </label>
          <br/>
          <input type="text" placeholder='Enter your full name'/>
        </div>

        <div className="ticketingInput">
          <label htmlFor="">
            Number of tickets on sale
          </label>
          <br/>
          <input type="number" placeholder='Enter quantity' />
        </div>
      </form>
    </div>
  );
};

export default Ticketing;
