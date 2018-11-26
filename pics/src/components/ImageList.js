import React, { Component } from 'react';

const ImageList = props => {
  props.images.map(image => {
    console.log(image);
  });
  return <div> Image List </div>;
};

export default ImageList;
