import { styled } from '@mui/material';
import { Typography, Link, Box, Container } from '@mui/material';
import { Logo } from '@components/Logo';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Social = () => {
    const iconStyles = {
        color: 'icon',
        fontSize: 'large'
    };
    return (
        <div className="social">
            <Link href="#" target="_blank" rel="noopener">
                <TwitterIcon {...iconStyles} />
            </Link>
            <Link href="#" target="_blank" rel="noopener">
                <FacebookIcon {...iconStyles} />
            </Link>
            <Link href="#" target="_blank" rel="noopener">
                <InstagramIcon {...iconStyles} />
            </Link>
            <Link href="#" target="_blank" rel="noopener">
                <LinkedInIcon {...iconStyles} />
            </Link>
            <Link href="#" target="_blank" rel="noopener">
                <GitHubIcon {...iconStyles} />
            </Link>
        </div>
    );
};

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.tertiary">
            {`© wiggler ${new Date().getFullYear()}`}
            {' · '}
            <Link color="inherit" href="#">
                Privacy Policy
            </Link>
            {' · '}
            <Link color="inherit" href="#">
                Terms &amp; Conditions
            </Link>
        </Typography>
    );
};

const ContactMail = () => {
    return (
        <Typography variant="body2" color="text.tertiary">
            Email:{' '}
            <Link color="inherit" href="mailto:damien.shomrai@gmail.com">
                damien.shomrai@gmail.com
            </Link>
        </Typography>
    );
};

const Credits = () => {
    return (
        <Typography variant="body2" color="text.tertiary">
            wiggler is made with&nbsp;
            <span role="img" aria-label="love">
                ❤️&nbsp;
            </span>
            by cartman.dos
        </Typography>
    );
};

const FooterNav = () => {
    return (
        <Box justifyContent="space-around" display="flex">
            <Link variant="body1" color="text.tertiary" href="/about" underline="hover" px="1em">
                About
            </Link>
            <Link variant="body1" color="text.tertiary" href="/faq" underline="hover" px="1em">
                FAQ
            </Link>
            <Link variant="body1" color="text.tertiary" href="/login" underline="hover" px="1em">
                Login
            </Link>
        </Box>
    );
};

function FooterBottom() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Social />
                <ContactMail />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Credits />
                <Copyright />
            </Box>
        </>
    );
}

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
}));

export default function Footer() {
    return (
        <FooterContainer
            component="footer"
            role="contentinfo"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto'
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: '1.5rem'
                    }}
                >
                    <Link href="/" >
                        <Logo />
                    </Link>
                    <FooterNav />
                </Box>

                <FooterBottom />
            </Container>
        </FooterContainer>
    );
}
