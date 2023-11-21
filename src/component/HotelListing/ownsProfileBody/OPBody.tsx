import "./OPbpdy.css";
import { useState } from "react";

const OPBody = () => {
  const [preview, setPreview] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(event.target.files[0]);
  };

  return (
    <div className="deals_main">
      <div className="deal">
        <div className="BodyOwn">
          <h1 className="headText">Owner's Profile</h1>

          <span className="Headertagb">Submit the right details</span>
          <h2 className="opsub">Please provide all necessary information.</h2>

          <div className="hosting_con">
            <div>
              <h1 className="reusedH1">Hosting Type</h1>
            </div>

            <div className="hostingConList">
              <label className="container">
                <b>I own the property</b>

                <p>Private host</p>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>

              <label className="container">
                <b>I represent a company</b>

                <p>Property management company</p>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>

              <label className="add-file">
                <b>add a document</b>

                <input type="file" />
              </label>
            </div>
          </div>

          <div className="ProfilePic">
            <h1 className="reusedH1">Add/change profile photo</h1>
            <h2>
              Please provide us with an image we can use to help you set up your
              profile.
            </h2>
            <div className="ProfilePicBody">
              <img
                src={preview === null ? "" : URL.createObjectURL(preview)}
                alt=""
                className="headIcon"
              />
              <h2 className="imageDesc">
                Please pick a clear and good looking photo for easy
                identification.
              </h2>

              <div className="addProBtn">
                <label className="label-input-file">
                  <b>ADD/CHANGE PROFILE PHOTO</b>

                  <input type="file" id="file" onChange={handleChange} />
                </label>
              </div>
            </div>
          </div>

          <div className="FNDetails">
            <h1 className="reusedH1">Full name details</h1>
            <div className="FNDBody">
              <div className="headerFNB">
                <div className="firstNameDetails">
                  <h2>First name</h2>
                  <div className="formNomarl">
                    <input
                      type="text"
                      placeholder="Jane"
                      id="username"
                      name="First Name"
                      className="input"
                    />
                  </div>
                </div>

                <div className="LastNameDetails">
                  <h2>Last name</h2>
                  <div className="formNomarl">
                    <input
                      type="text"
                      placeholder="Doe"
                      id="username"
                      name="Last Name"
                      className="input"
                    />
                  </div>
                </div>
              </div>

              <h2>Username</h2>
              <span className="Pga">This is your profile name.</span>

              <div className="formNomarl">
                <input
                  type="text"
                  placeholder="@janedoe50"
                  id="username"
                  name="First Name"
                  className="input"
                />
              </div>
              <h2>Means of identification</h2>
              <span className="Pga">
                Please upload any clear means of identification.
                <span className="noteId">
                  *National ID, NIN, Drivers License, Voters card etc.
                </span>
              </span>

              <div className="addProBtn1">
                <label className="label-input-file">
                  <b>ADD A PHOTO</b>

                  <input type="file" />
                </label>
              </div>

              <span className="topOPB">Date of birth</span>

              <div className="input-wrapper">
                <div className="select">
                  <select>
                    <option value="" disabled selected hidden>
                      Month
                    </option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <div className="arrow"></div>
                </div>

                <div className="select">
                  <select>
                    <option value="" disabled selected hidden>
                      Day
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <div className="arrow"></div>
                </div>

                <div className="select">
                  <select>
                    <option value="" disabled selected hidden>
                      Year
                    </option>
                    <option value="1">2001</option>
                    <option value="2">2002</option>
                    <option value="3">2003</option>
                    <option value="4">2004</option>
                    <option value="5">2005</option>
                    <option value="6">2006</option>
                    <option value="7">2007</option>
                    <option value="8">2008</option>
                    <option value="9">2009</option>
                    <option value="10">2010</option>
                    <option value="11">2011</option>
                    <option value="12">2012</option>
                    <option value="13">2013</option>
                    <option value="14">2014</option>
                    <option value="15">2015</option>
                    <option value="16">2016</option>
                    <option value="17">2017</option>
                    <option value="18">2018</option>
                    <option value="19">2019</option>
                    <option value="20">2020</option>
                    <option value="21">2021</option>
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                    <option value="24">2024</option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                    <option value="29">2029</option>
                    <option value="30">2030</option>
                  </select>
                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="FNDetails">
            <h1 className="reusedH1">Contact details</h1>
            <div className="CNBody">
              <span className="topOPB">Mobile Phone Number</span>

              <div className="row">
                <div className="contactColumn">
                  <select className="form-control">
                    <option>Nigeria(+234)</option>
                    <option>Ghana (+233)</option>
                    <option>South Africa (+27)</option>
                    <option>Sudan (+249)</option>
                  </select>
                </div>

                <div className="contactColumn">
                  <div className="formNomarl">
                    <input
                      type="tel"
                      id="text"
                      name="Email"
                      placeholder="90-3456-7899"
                      className="input"
                    />
                  </div>
                </div>
              </div>

              <h2>Email Address</h2>
              <span className="Pga">
                We will send you a link to verify your email
              </span>

              <div className="formNomarl">
                <input
                  type="text"
                  id="text"
                  name="Email"
                  placeholder="janedoe@example.com"
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="FNDetails">
            <h1 className="reusedH1">Location details</h1>
            <div className="LTBody">
              <span className="topOPB">Where do you live?</span>
              <form action="" className="districtWrapper">
                <div className="input-wrapper">
                  <select className="form-control">
                    <option value="" disabled selected hidden>
                      Country
                    </option>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>South Africa</option>
                    <option>Sudan</option>
                  </select>

                  <select className="form-control">
                    <option value="" disabled selected hidden>
                      State
                    </option>
                    <option>Lagos</option>
                    <option>Johannesburg</option>
                    <option>Accra Africa</option>
                    <option>Abuja</option>
                  </select>

                  <div className="formNomarl">
                    <input
                      type="text"
                      id="text"
                      name="Email"
                      placeholder="City/District"
                      className="input"
                    />
                  </div>
                </div>
              </form>

              <div className="firstName">
                <h2>Full home address</h2>
                <div className="fullName">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="address"
                  />
                </div>
              </div>

              <div className="headerFNB">
                <div className="firstName">
                  <span className="topOPB">Nationality</span>
                  <div className="input-wrapper">
                    <select className="form-controldouble">
                      <option value="1" selected>
                        Nigerian
                      </option>
                      <option value="2">Ghanian</option>
                      <option value="3">South African</option>
                      <option value="4">Sudanese</option>
                      <option value="5">Somali</option>
                      <option value="6">Mexican</option>
                      <option value="7">Korean</option>
                      <option value="8">Ehiopian</option>
                      <option value="9">American</option>
                      <option value="10">Arabian</option>
                    </select>
                  </div>
                </div>

                <div className="LastName">
                  <span className="topOPB">Currency</span>
                  <div className="input-wrapper">
                    <select className="form-controldouble">
                      <option value="1" disabled selected hidden>
                        Nigerian Naira
                      </option>
                      <option value="2">Ghanian Cedi</option>
                      <option value="3">South African Rand</option>
                      <option value="4">Sudanese Pound</option>
                      <option value="5">Somali Shilling</option>
                      <option value="6">Mexican Peso</option>
                      <option value="7">Korean Won</option>
                      <option value="8">Ehiopian Birr</option>
                      <option value="9">American Dollar</option>
                      <option value="10">Arabian Dirham</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottombar">
            <a href="#" className="main">
              save and exit
            </a>
            <div className="bottombar-right">
              <a href="#" className="main">
                previous
              </a>
              <a href="/aboutProperty" className="a">
                next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OPBody;
