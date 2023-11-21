/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eventgallery1 from "../../../assets/pics/eventgallery1.png";
import eventgallery2 from "../../../assets/pics/eventgallery2.jpeg";
import eventgallery3 from "../../../assets/pics/eventgallery3.jpeg";
import eventgallery4 from "../../../assets/pics/eventgallery4.jpeg";

interface AsNavForState {
  nav1: any;
  nav2: any;
}

export default class AsNavFor extends Component<object, AsNavForState> {
  slider1: any;
  slider2: any;

  constructor(props: object) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings1 = {
      asNavFor: this.state.nav2,
      ref: (slider: any) => (this.slider1 = slider),
    };

    const settings2 = {
      asNavFor: this.state.nav1,
      ref: (slider: any) => (this.slider2 = slider),
      slidesToShow: 4,
      swipeToSlide: true,
      focusOnSelect: true,
    };

    return (
      <div style={{backgroundColor:"black"}}>
        <Slider {...settings1}>
          <div>
            <img
              src={eventgallery1}
              alt="Event Gallery 1"
              style={{ width: "1080px", height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={eventgallery2}
              alt="Event Gallery 2"
              style={{ width: "1080px", height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={eventgallery3}
              alt="Event Gallery 3"
              style={{ width: "1080px", height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={eventgallery4}
              alt="Event Gallery 4"
              style={{ width: "1080px", height: "60vh", objectFit: "cover" }}
            />
          </div>
        </Slider>
        <Slider {...settings2}>
          <div>
            <img
              src={eventgallery1}
              alt="Event Gallery 1"
              style={{ width: "250px", height: "10vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={eventgallery2}
              alt="Event Gallery 2"
              style={{ width: "250px", height: "10vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={eventgallery3}
              alt="Event Gallery 3"
              style={{ width: "250px", height: "10vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={eventgallery4}
              alt="Event Gallery 4"
              style={{ width: "250px", height: "10vh", objectFit: "cover" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
