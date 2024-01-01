import { Button } from '@mui/material';

const PetActionButton = ({ action, label }) => {
  return (
    <Button onClick={action} color="warning" size="small">
      {label}
    </Button>
  );
};

export default PetActionButton;
