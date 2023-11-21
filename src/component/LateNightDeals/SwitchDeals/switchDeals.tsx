/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ".//switchDeals.css"
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DealsSwitch: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };


  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div>
      <div className="switchDealsCont">
        {isChecked ? 
        <>
        <div> 
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M17.1432 6.43485C17.4794 6.03359 17.6449 5.51651 17.6041 4.99461C17.5633 4.47271 17.3196 3.9876 16.9251 3.64342C16.5307 3.29925 16.017 3.12344 15.4944 3.15375C14.9718 3.18405 14.4819 3.41806 14.1299 3.80552L10.6845 7.75219C8.73089 9.99103 7.6265 12.8454 7.56454 15.8162L7.41254 23.0669C7.40711 23.3295 7.45346 23.5906 7.54896 23.8354C7.64445 24.0801 7.78722 24.3036 7.9691 24.4932C8.15097 24.6827 8.36841 24.8346 8.60898 24.9401C8.84956 25.0457 9.10856 25.1028 9.3712 25.1082C9.63385 25.1136 9.89499 25.0673 10.1397 24.9718C10.3844 24.8763 10.608 24.7335 10.7975 24.5516C10.9871 24.3697 11.139 24.1523 11.2445 23.9117C11.35 23.6712 11.4071 23.4122 11.4125 23.1495L11.5619 15.9015C11.6047 13.8688 12.3607 11.9158 13.6979 10.3842L17.1432 6.43485Z" fill="#6E9E76"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6312 20.534C16.8103 17.681 18.0699 15.0035 20.1537 13.0466C22.2374 11.0897 24.9886 10.0005 27.8472 10.0007H29.3326V8.00065C29.3326 7.29341 29.6135 6.61513 30.1136 6.11503C30.6137 5.61494 31.292 5.33398 31.9992 5.33398C32.7065 5.33398 33.3847 5.61494 33.8848 6.11503C34.3849 6.61513 34.6659 7.29341 34.6659 8.00065V10.0007H36.1512C39.0098 10.0005 41.761 11.0897 43.8448 13.0466C45.9285 15.0035 47.1881 17.681 47.3672 20.534L47.9565 29.958C48.1811 33.5512 49.3876 37.0139 51.4445 39.9687C51.8695 40.5795 52.1292 41.2899 52.1983 42.0308C52.2674 42.7717 52.1436 43.5179 51.8389 44.1968C51.5342 44.8757 51.059 45.4642 50.4596 45.9051C49.8601 46.3459 49.1567 46.6241 48.4179 46.7127L39.3325 47.8007V50.6673C39.3325 52.6122 38.5599 54.4775 37.1847 55.8528C35.8094 57.228 33.9441 58.0007 31.9992 58.0007C30.0543 58.0007 28.189 57.228 26.8138 55.8528C25.4385 54.4775 24.6659 52.6122 24.6659 50.6673V47.8007L15.5805 46.71C14.8421 46.6212 14.1392 46.343 13.5401 45.9023C12.941 45.4616 12.4661 44.8734 12.1615 44.1949C11.8569 43.5165 11.7329 42.7707 11.8017 42.0302C11.8704 41.2896 12.1296 40.5795 12.5539 39.9687C14.6107 37.0138 15.8172 33.5512 16.0419 29.958L16.6312 20.5367V20.534ZM27.8472 14.0007C26.0061 14.0004 24.2341 14.7019 22.892 15.9623C21.5498 17.2226 20.7385 18.9471 20.6232 20.7847L20.0365 30.2087C19.7655 34.5313 18.3137 38.6967 15.8392 42.2513C15.8085 42.2955 15.7897 42.3469 15.7846 42.4005C15.7796 42.4541 15.7886 42.508 15.8106 42.5572C15.8326 42.6063 15.8669 42.6489 15.9102 42.6808C15.9536 42.7127 16.0044 42.7329 16.0579 42.7393L26.0232 43.9367C29.9939 44.4113 34.0045 44.4113 37.9752 43.9367L47.9406 42.7393C47.994 42.7329 48.0448 42.7127 48.0882 42.6808C48.1315 42.6489 48.1659 42.6063 48.1879 42.5572C48.2099 42.508 48.2188 42.4541 48.2138 42.4005C48.2088 42.3469 48.19 42.2955 48.1592 42.2513C45.6856 38.6964 44.2347 34.531 43.9645 30.2087L43.3752 20.7847C43.2599 18.9471 42.4486 17.2226 41.1065 15.9623C39.7644 14.7019 37.9924 14.0004 36.1512 14.0007H27.8472ZM31.9992 54.0007C30.1592 54.0007 28.6659 52.5073 28.6659 50.6673V48.6673H35.3325V50.6673C35.3325 52.5073 33.8392 54.0007 31.9992 54.0007Z" fill="#6E9E76"/>
            <path d="M47.0481 3.61386C46.6486 3.96259 46.4039 4.45571 46.3679 4.98478C46.3319 5.51385 46.5075 6.03556 46.856 6.4352L50.3014 10.3819C51.6381 11.9146 52.3933 13.8686 52.4347 15.9019L52.5867 23.1472C52.5977 23.6776 52.8189 24.182 53.2017 24.5493C53.5846 24.9166 54.0976 25.1168 54.6281 25.1059C55.1585 25.0949 55.6628 24.8737 56.0302 24.4909C56.3975 24.108 56.5977 23.595 56.5867 23.0645L56.4347 15.8165C56.3728 12.8458 55.2684 9.99138 53.3147 7.75253L49.8694 3.80586C49.5207 3.40637 49.0275 3.16172 48.4985 3.12571C47.9694 3.08971 47.4477 3.26529 47.0481 3.61386Z" fill="#6E9E76"/>
          </svg>

          <span className="labelSwitch">
            Abuja, Nigeria
          </span>

          <form action="" className="submitFormSwitch">
            <input type="email" placeholder="E-mail" required/>

            <div className="calendar-button" onClick={toggleDatePicker}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                onClose={toggleDatePicker}
                onClick={toggleDatePicker}
                calendarClassName="custom-calendar"
                className="selectDateFormSwitch"
                placeholderText="When"
                required
              />
            </div>

            <button className="submitFormSwitchButton" type="submit">
              Notify me
            </button>
          </form>
        </div> 
        </>
        : 
        <div>
          <p>
             Notify me about late night deals 
          </p>
         
          <div className="switchRight">
            <Switch {...label} onChange={handleSwitchChange}/>
          </div>
          
        </div>
        
        }
      </div>
    </div>
  );
}

export default DealsSwitch;