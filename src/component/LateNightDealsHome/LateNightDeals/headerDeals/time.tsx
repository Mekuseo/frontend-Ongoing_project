/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import React, { useState, useEffect } from 'react';
// import FlipTime from './flipTime';
// import './/time.css';

// const Time: React.FC = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const isPM = hours >= 12;
//   const adjustedHours = hours % 12 || 12;
//   const timeDigits = [
//     adjustedHours % 100,
//     minutes % 100,
//   ];

//   return (
//     <div className="flip-clock">
//       {timeDigits.map((digit, index) => (
//         <FlipTime key={index} digit={digit + ':'} />
//       ))}
//       <div className="am-pm">{isPM ? 'PM' : 'AM'}</div>
//     </div>
//   );
// };

// export default Time;
import React from 'react';
import "./time.sass";

const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({ digit, shuffle, unit }) => {

  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (unit !== 'hours') {
    previousDigit = previousDigit === -1
      ? 59
      : previousDigit;
  } else {
    previousDigit = previousDigit === -1
      ? 23
      : previousDigit;
  }

  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  const digit1 = shuffle
    ? previousDigit
    : currentDigit;
  const digit2 = !shuffle
    ? previousDigit
    : currentDigit;

  const animation1 = shuffle
    ? 'fold'
    : 'unfold';
  const animation2 = !shuffle
    ? 'fold'
    : 'unfold';

  return (
    <div className={'flipUnitContainer'}>
      <StaticCard
        position={'upperCard'}
        digit={currentDigit}
      />
      <StaticCard
        position={'lowerCard'}
        digit={previousDigit}
      />
      <AnimatedCard
        digit={digit1}
        animation={animation1}
      />
      <AnimatedCard
        digit={digit2}
        animation={animation2}
      />
    </div>
  );
};

class FlipClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateTime(),
      50
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const time = new Date;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle
      });
    }
  }

  render() {

    const {
      hours,
      minutes,
      seconds,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle
    } = this.state;

    return (
      <div className={'flipClock'}>
        <FlipUnitContainer
          unit={'hours'}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={'hours'}
          digit= {hours >= 12 ? 'PM' : 'AM'}
        />
        {/* <FlipUnitContainer
          unit={'seconds'}
          digit={seconds}
          shuffle={secondsShuffle}
        /> */}
      </div>
    );
  }
}

const Flip = () => {
  return (
    <div>
      <FlipClock />
    </div>
  );
};

export default Flip;

