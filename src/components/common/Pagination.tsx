import { Pagination, PaginationItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { CardItem } from "./Card";
import usePagination from "./UsePagination";

export const PaginationCard = ({ data }: { data: any }) => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Stack width={"100%"} gap={"48px"}>
      <Stack direction={"row"} gap={2} height={345}>
        {_DATA.currentData().map((el) => (
          <CardItem data={el} />
        ))}
      </Stack>
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Pagination
          color={"primary"}
          count={count}
          hidePrevButton
          hideNextButton
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Stack>
  );
};
