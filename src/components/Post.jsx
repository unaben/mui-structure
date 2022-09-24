import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import { Favorite, Share, MoreVert, FavoriteBorder } from "@mui/icons-material";
const Post = () => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "tomato" }} aria-label="nature">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Nature"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="rabbit"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          All about nature and animal lovers.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
