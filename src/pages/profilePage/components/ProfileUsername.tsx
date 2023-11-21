import { useState } from 'react';
import { Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'raleway, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    margin: '33px 0 0',
  },
  input: {
    fontFamily: 'raleway, sans-serif',
    fontSize: '14px',
  },
  addBox: {
    color: 'red',
    fontWeight: 600,
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

interface ProfileUsernameProps {
  onValidationChange?: (isValid: boolean) => void;
}

const ProfileUsername = ({onValidationChange}: ProfileUsernameProps) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const classes = useStyles();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUsername(input);
    setError(input.trim() === ""); // Set error if input is empty or whitespace
    if (onValidationChange) {
      onValidationChange(!!username);
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <Box component="form">
          <label>Username</label>
          <TextField
            id="username"
            variant="outlined"
            sx={{ backgroundColor: "#F5F5F5" }}
            onChange={handleUsernameChange}
            value={username}
            error={error}
            helperText={error ? 'Username is required' : ''}
          />
        </Box>

        <Box className={classes.addBox}>Edit</Box>
      </div>
      <Divider style={{ margin: "10px 0 20px" }} />
    </div>
  );
};

export default ProfileUsername;
