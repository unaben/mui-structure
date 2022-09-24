import { useState } from "react";
import {
  Box,
  Fab,
  Modal,
  Tooltip,
  Typography,
  styled,
  Avatar,
  TextField,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Stack } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PetBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        onClick={(e) => setOpen((prevValue) => !prevValue)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen((prevValue) => !prevValue)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          p={2}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <PetBox onClick={(e) => setOpen((prevValue) => !prevValue)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="puppy"
              src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="span">Nugget</Typography>
          </PetBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          ></TextField>
          <Stack direction="row" mt={2} gap={1} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="error" />
            <VideoCameraBack color="success" />
            <PersonAdd color="info" />
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
