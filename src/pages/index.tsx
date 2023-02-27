import type { NextPage } from "next";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default Home;