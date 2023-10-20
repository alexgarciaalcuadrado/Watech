import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const Photos = () => {
  const [pictures, setPictures] = useState([]);

  const handleFileChange = (selectedFiles) => {
    setPictures(selectedFiles);
  };

  return (
    <div>
      <ImageUploader
        withIcon={false}
        buttonText=""
        buttonClassName="add_image_button"
        buttonStyles={{ display: "none" }}
        onChange={handleFileChange}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={5242880}
        label="Fotos del trabajo"
        fileContainerStyle={{
          boxShadow: "none",
          padding: 0,
          display: "inline",
          margin: 0,
        }}
      />
      <button
        onClick={() => {
          const hiddenButton = document.querySelector(".add_image_button");
          if (hiddenButton) {
            hiddenButton.click();
          }
        }}
      >
        Another button
      </button>
      <div>
      {pictures.map((image, index) => {
        return (
          <div>
            <button>Delete</button>
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Imagen ${index}`}
            />
          </div>
        );
      })}
      </div>
      
    </div>
  );
};

export default Photos;
