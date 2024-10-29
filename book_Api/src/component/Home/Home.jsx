
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Importing Grid
import Container from '@mui/material/Container'; // Optional: for better layout
import { useState } from 'react';

const Home = () => {
const [books,setBooks] =useState([]);






  return (
    <Container maxWidth="lg"> 
      <Grid container spacing={2} >
    
        {[...Array(12)].map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link to={`/book/${index + 1}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ cursor: 'pointer' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Green Iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Computer 
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export { Home };
