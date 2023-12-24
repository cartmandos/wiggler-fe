import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function HomePets() {
  return (
    <Container sx={{ py: 10 }} maxWidth="md">
      <Typography variant="h4" align="center" mb={3} gutterBottom>
        Pets available for adoption
      </Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ gap: 5 }}>
        <Card sx={{ maxWidth: 180 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Alice
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button color="warning" size="small">
              Share
            </Button>
            <Button color="warning" size="small">
              Meet
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 180 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="data:image/jpeg;base64,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"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Louie
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button color="warning" size="small">
              Share
            </Button>
            <Button color="warning" size="small">
              Meet
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 180 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://images.squarespace-cdn.com/content/v1/620e77766bd1fa1dafc171e7/013690c8-ffeb-4be7-a3b9-b88479046e24/273009258_10222700037151004_6433762934790108123_n.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Mia
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button color="warning" size="small">
              Share
            </Button>
            <Button color="warning" size="small">
              Meet
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
