import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Modal } from "@mui/material";

export const Album = ({
  data,
  startSmall = false,
}: {
  data: any;
  startSmall: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value: any) => {
    setImage(value);
    setOpen(true);
    console.log(image);
  };

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={12}>
        {data.map((item, index) => (
          <ImageListItem
            key={item.img}
            style={
              startSmall
                ? {
                    height:
                      window.innerWidth > 500
                        ? index === 1 || index === 2 || index === 5
                          ? 480
                          : 240
                        : index === 1 || index === 2 || index === 5
                        ? 240
                        : 120,
                  }
                : {
                    height:
                      window.innerWidth > 500
                        ? index === 0 || index === 3 || index === 4
                          ? 480
                          : 240
                        : index === 0 || index === 3 || index === 4
                        ? 240
                        : 120,
                  }
            }
          >
            <img
              style={{ borderRadius: "10px" }}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              onClick={(e) => handleImage(item.img)}
            />
            <Modal
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sx={{
                "& .MuiBackdrop-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
              }}
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
              <img
                height={window.innerWidth > 500 && "80%"}
                width={window.innerWidth < 500 && "90%"}
                style={{ outline: "none" }}
                src={image}
                onClick={handleClose}
              />
            </Modal>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
