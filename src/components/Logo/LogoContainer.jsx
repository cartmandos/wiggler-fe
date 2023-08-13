import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

//REVIEW: possible to move out since this can be reused as general background image container
export const LogoContainer = styled(Box)((props) => ({
    backgroundImage: `url(${props?.url})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}));
