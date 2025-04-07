// src/components/CustomIcon.jsx
import React from "react";

const CustomIcon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-5 h-5 filter invert drop-shadow-md"
    loading="lazy"
  />
);

export default CustomIcon;
