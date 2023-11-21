import { useEffect, useState } from "react";

const RoomRate = () => {
  const [data, setData] = useState({ maths: 0, chem: 0, bio: 0 });
  const [percentage, setPercentage] = useState(0);
  const [perc, setPerc] = useState(0);
  const fields = [
    {
      name: "maths",
      value: data.maths,
      id: 1,
    },
  ];

  const fieldTwo = [
    {
      name: "chem",
      value: data.chem,
      id: 2,
    },
  ];

  const fieldThree = [
    {
      name: "bio",
      value: data.bio,
      id: 3,
    },
  ];

  useEffect(() => {
    const per = (data.chem / data.maths) * 100;
    setPercentage(per);

    const perc = (data.bio / data.maths) * 100;
    setPerc(perc);
  }, [data]);

  const handleCalculation = (e: any) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  return (
    <div>
      <p className="propTypeHeaderreused">Room rates</p>

      <p className="propTypeSubHeader">
        You get to input your prices based on guests and other prevailing
        factors.
      </p>
      <div className="typeContainerThree">
        <p className="details">Nightly rates</p>

        <p className="roomdetails">
          Input your price per night for this property
        </p>

        <form action="" className="prices">
          <div className="price-wrapper">
            <div className="prefix">₦</div>
            {fields.map((field, idx) => (
              <input
                key={idx}
                placeholder="5000"
                name={field.name}
                value={field.value}
                onChange={handleCalculation}
                className="price"
                id="amount"
              />
            ))}
            <div className="suffix">.00</div>
          </div>
        </form>

        <p className="details">Weekly rates</p>
        <p className="roomdetails">
          Discount that will apply when guest(s) book for 7 nights and more, up
          until 27 nights.
        </p>

        <form className="form-line" action="/">
          <div className="discount">
            <p>{percentage}% off</p>
          </div>

          {fieldTwo.map((field, idx) => (
            <input
              key={idx}
              placeholder="Input price"
              name={field.name}
              value={field.value}
              onChange={handleCalculation}
              className="input"
            />
          ))}
        </form>

        <p className="details">Monthly rates</p>
        <p className="roomdetails">
          Discount that will apply when guests book for 28 nights or more.
        </p>

        <form className="form-line" action="/">
          <div className="discount">
            <p>{perc}% off</p>
          </div>

          {fieldThree.map((field, idx) => (
            <input
              key={idx}
              placeholder="Input price"
              name={field.name}
              value={field.value}
              onChange={handleCalculation}
              className="input"
            />
          ))}
        </form>

        <br />
        <p className="footText">
          Guests will recieve the lowest rate if multiple rates apply*
        </p>
      </div>
    </div>
  );
};

export default RoomRate;
