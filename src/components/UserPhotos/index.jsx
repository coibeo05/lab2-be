import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <Box sx={{ p: 2 }}>
      {photos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 4, maxWidth: "100%" }}>
          <CardHeader
            title={`Đăng lúc: ${new Date(photo.date_time).toLocaleString()}`}
          />
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt="User photo"
            sx={{ maxHeight: 500, objectFit: "contain", bgcolor: "#f5f5f5" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Bình luận:
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {photo.comments ? (
              photo.comments.map((comment) => (
                <Box
                  key={comment._id}
                  sx={{ mb: 2, pl: 2, borderLeft: "3px solid #1976d2" }}
                >
                  <Typography variant="subtitle2">
                    <Link
                      to={`/users/${comment.user._id}`}
                      style={{
                        textDecoration: "none",
                        color: "#1976d2",
                        fontWeight: "bold",
                      }}
                    >
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
                    <span
                      style={{
                        color: "gray",
                        marginLeft: "10px",
                        fontSize: "0.8rem",
                      }}
                    >
                      ({new Date(comment.date_time).toLocaleString()})
                    </span>
                  </Typography>
                  <Typography variant="body2">{comment.comment}</Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                Chưa có bình luận nào.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UserPhotos;
