import { Box } from '@mui/material';

export default function Section({ children, ...props }) {
    return (
        <Box component="section" sx={{ backgroundColor: props?.overlay || 'inherit' }}>
            {children}
        </Box>
    );
}
