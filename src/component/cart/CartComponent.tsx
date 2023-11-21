import { useState } from "react";
import "./CartComponent.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import DiscountIcon, {
  alertIcon,
  cancelIcon,
  leftSlideArrow,
  rightSlideArrow,
  starIcon,
} from "../../pages/Cart/DiscountIcon";
import cartData from "../../pages/Cart/CartData";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState(cartData);

  const handleCancel = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <div className="cartTitle">Cart</div>
      <div className="cartContainer">
        {cartItems.map((item, index) => (
          <div className="cartCard" key={index}>
            <Card variant="outlined" sx={{ width: 340, height: 380 }}>
              <CardOverflow sx={{ position: "relative" }}>
                <CardContent>
                  <div className="cart-cardTitle">
                    <div>{item.name}</div>
                    <div onClick={() => handleCancel(item.id)}>
                      {cancelIcon()}
                    </div>
                  </div>
                </CardContent>
                <div style={{ position: "relative" }}>
                  <AspectRatio ratio="2" sx={{ borderRadius: "0" }}>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-image"
                      />
                    </div>
                  </AspectRatio>
                  <div className="cart-floatingItems">
                    <div>{DiscountIcon()}</div>
                    <div>
                      {item.discount} <p>Off</p>
                    </div>
                    <div className="cart-slideArrows">
                      <div>{leftSlideArrow()}</div>
                      <div>{rightSlideArrow()}</div>
                    </div>
                  </div>
                </div>
              </CardOverflow>
              <div className="cart-hotelLocation">{item.location}</div>
              <CardOverflow variant="soft" sx={{ bgcolor: "transparent" }}>
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    fontWeight="md"
                    textColor="text.secondary"
                    sx={{ width: "50%" }}
                  >
                    <div>{starIcon(item.stars)}</div>
                    <div className="cart-ratings">
                      <div>{item.rating}</div>
                      <div>{item.ratingText}</div>
                    </div>
                    <div className="cart-views">{item.views} views</div>
                  </Typography>
                  <Divider orientation="vertical" inset="context" />
                  <Typography>
                    <div className="cart-description">
                      <div>{item.accomodation}</div>
                      <div>
                        {item.newPrice}
                        {alertIcon()}
                      </div>
                      <div>{item.oldPrice} </div>
                      <p>This includes taxes and fees</p>
                    </div>
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
