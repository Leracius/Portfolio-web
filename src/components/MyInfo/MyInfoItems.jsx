import React from "react";
import { CarrousellItem } from "./MyInfoStyles";

function MyInfoItems({ arr }) {
  const items = Array.from({ length: 3 }, (_, index) => index);

  return (
    <>
      {items.map((index) => (
        <CarrousellItem key={index}>
          {arr.map((el) => (
            <img key={el} src={el} />
          ))}
        </CarrousellItem>
      ))}
    </>
  );
}

export default MyInfoItems;
