import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from '../assets/th.jpeg'

export default function BookCards({ record, onDelete }) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
            {record.bookTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By - {record.authorName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre - {record.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" onClick={() => onEdit(record.id)}>
          Edit button
        </Button> */}
        <Button size="small" color="primary" onClick={() => onDelete(record.id)}>
          Delete 
        </Button>
      </CardActions>
    </Card>
  );
}