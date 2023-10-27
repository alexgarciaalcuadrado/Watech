import { Box } from "@mui/material";
import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Client from "./client";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Photos = () => {
  const [pictures, setPictures] = useState([]);

  const handleFileChange = (selectedFiles) => {
    setPictures(selectedFiles);
  };

  const removePhoto = (index) => {
    const updatedFiles = [...pictures];
    updatedFiles.splice(index, 1);
    setPictures(updatedFiles);
  };

  return (
    <Box className="photo_upload_container">
      <Client />
      <h4>Fotos del tabrajo</h4>
      <ImageUploader
        withIcon={false}
        buttonText=""
        buttonClassName="add_image_button"
        buttonStyles={{ display: "none" }}
        onChange={handleFileChange}
        imgExtension={[".jpg", ".png", ".jpeg"]}
        maxFileSize={7000000}
        label=""
        fileContainerStyle={{
          boxShadow: "none",
          padding: 0,
          display: "inline",
          margin: 0,
        }}
      />
      <AddIcon
      className="icon icon-green"
        aria-label="agregar"
        onClick={() => {
          const hiddenButton = document.querySelector(".add_image_button");
          if (hiddenButton) {
            hiddenButton.click();
          }
        }}/>
      <Box className="images_container">
      {pictures.map((image, index) => {
        return (
          <div className="image_container" style={{ 
            backgroundImage: `url(${URL.createObjectURL(image)})`,
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
             <RemoveCircleIcon
              className="icon icon-red"
        aria-label="agregar"
        onClick={() => removePhoto(index)}/>
            {/* <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Imagen ${index}`}
              className="image"
            /> */}
          </div>
        );
      })}
      </Box>
      
    </Box>
  );
};

export default Photos;
