import React, { forwardRef } from "react";
import { noop } from "~/utils/funtionUtils";
import Styled from "./Image.styled";
import { ImageProps } from "./Image.types";

export const Image = forwardRef(
  (
    {
      src,
      width,
      height,
      borderRadius = "0px",
      objectFit = "contain",
      alt,
      onClick = noop,
      onLoad,
    }: ImageProps,
    forwardRef
  ) => {
    const handleLoad = React.useCallback(() => {
      if (onLoad) onLoad();
    }, [onLoad]);

    return (
      <Styled
        src={src}
        width={width}
        height={height}
        objectFit={objectFit}
        borderRadius={borderRadius}
        alt={alt}
        onClick={onClick}
        onLoad={handleLoad}
      />
    );
  }
);
