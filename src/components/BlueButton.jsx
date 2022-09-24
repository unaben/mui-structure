import { Button, styled, Stack } from "@mui/material";

const BlueButton = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    margin: "5px",
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: "maroon",
    },
    "&:disabled": {
      backgroundColor: "aquamarine",
      color: "blue",
    },
  }));
  return (
    <Stack direction="row">
      <BlueButton>Styled Button</BlueButton>
    </Stack>
  );
};

export default BlueButton;
