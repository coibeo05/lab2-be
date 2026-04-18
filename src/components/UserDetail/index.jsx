import React from "react";
import { Typography, Button, Card, CardContent, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <Box sx={{ p: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Địa điểm: {user.location}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Nghề nghiệp: {user.occupation}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, fontSize: "1.1rem" }}>
            {user.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            to={`/photos/${userId}`}
          >
            Xem ảnh của {user.first_name}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserDetail;
