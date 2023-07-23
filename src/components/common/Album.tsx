import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import dev1 from "../../assets/image/dev1.png";
import dev2 from "../../assets/image/dev2.png";
import dev3 from "../../assets/image/dev3.png";
import dev4 from "../../assets/image/dev4.png";
import dev5 from "../../assets/image/dev5.png";
import dev6 from "../../assets/image/dev6.png";

export const Album = () => {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={12}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ borderRadius: "10px", height: "100%" }}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: dev1,
  },
  {
    img: dev2,
  },
  {
    img: dev3,
  },
  {
    img: dev4,
  },
  {
    img: dev5,
  },
  {
    img: dev6,
  },
];
