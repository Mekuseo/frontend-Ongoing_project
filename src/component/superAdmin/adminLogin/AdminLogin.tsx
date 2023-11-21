import { useState } from "react";
import "./AdminLogin.css";
import superAdmin from "../../../assets/pics/admin-dashboard.png";
import logo from "../../../assets/pics/thetravelhunters-admin-logo.png";
import { FormControl } from "@mui/base";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Key from "@mui/icons-material/Key";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const minLength = 12;

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <div className="adminLogin-wrapper">
        <img src={superAdmin} alt="super-admin-background" />
        <div className="superAdmin-formContainer">
          <img src={logo} alt="the travel hunters logo" />
          <span className="superAdmin-title">Admin Login</span>
          <div className="superAdmin-form">
            <FormControl>
              <Input
                type="text"
                id="admin-username"
                aria-describedby="admin-username"
                placeholder="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl className="superAdmin-form">
              <Input
                type="email"
                id="admin-email"
                aria-describedby="admin-email"
                placeholder="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Stack
              spacing={0.5}
              sx={{
                "--hue-password": Math.min(password.length * 10, 120),
              }}
            >
              <FormControl className="superAdmin-form">
                <Input
                  startDecorator={<Key />}
                  type={passwordVisible ? "text" : "password"}
                  id="admin-password"
                  aria-describedby="admin-password"
                  placeholder="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endDecorator={
                    passwordVisible ? (
                      <FaEye onClick={togglePasswordVisibility} />
                    ) : (
                      <FaEyeSlash onClick={togglePasswordVisibility} />
                    )
                  }
                />
              </FormControl>
              <LinearProgress
                determinate
                size="sm"
                value={Math.min((password.length * 100) / minLength, 100)}
                sx={{
                  bgcolor: "background.level3",
                  color: "hsl(var(--hue-password) 80% 40%)",
                }}
              />
              <Typography
                level="body-xs"
                sx={{
                  alignSelf: "flex-end",
                  color: "hsl(var(--hue-password) 80% 30%)",
                }}
              >
                {password.length < 3 && "Very weak"}
                {password.length >= 3 && password.length < 6 && "Weak"}
                {password.length >= 6 && password.length < 10 && "Strong"}
                {password.length >= 10 && "Very strong"}
              </Typography>
            </Stack>
            <Button className="superAdmin-btn">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
