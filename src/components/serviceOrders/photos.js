import React from 'react';
const Photos = () => {

    const handleFileChange = (e) => {
        const selectedFiles = e.target.files; // Get an array of selected files
        const imageContainer = document.getElementById('image-container'); 

        if (selectedFiles.length > 0) {
          for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const reader = new FileReader();
      
            reader.onload = (e) => {
              const img = document.createElement('img');
              img.src = e.target.result;
              imageContainer.appendChild(img);
            };
      
            reader.readAsDataURL(file);
          }
        }
      }
      const handleFileUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*'; // Esto limitará la selección a archivos de imagen
        input.multiple = true;
        input.click();
    
        input.addEventListener('change', handleFileChange);
      };
    return (
        <div>
            <h3>Seleccionar foto</h3>
        <button onClick={handleFileUpload}>Seleccionar una imagen</button>
        <div id="image-container"></div>
        </div>
    )
};

export default Photos;