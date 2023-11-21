import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const QuadSwitch = () => {
  const [alignment, setAlignment] = React.useState('Yes');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{borderRadius:"50px"}}
    >
      <ToggleButton value="No">No</ToggleButton>
      <ToggleButton value="K.W">K.W</ToggleButton>
      <ToggleButton value="Pending">Pending</ToggleButton>
      <ToggleButton value="Yes">Yes</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default QuadSwitch