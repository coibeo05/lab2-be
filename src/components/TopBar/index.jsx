import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const userId = pathParts[2]; // Lấy ID từ URL /users/ID hoặc /photos/ID

  let contextText = "Photo App";
  if (userId) {
    const user = models.userModel(userId);
    if (location.pathname.includes("/users/")) {
      contextText = `Chi tiết về ${user.first_name} ${user.last_name}`;
    } else if (location.pathname.includes("/photos/")) {
      contextText = `Ảnh của ${user.first_name} ${user.last_name}`;
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">
          Nguyễn Đức Anh
        </Typography>
        <Typography variant="h6" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
