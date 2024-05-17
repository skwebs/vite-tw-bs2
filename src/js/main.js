// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()
let cropper;
const image = document.getElementById('image');
if(cropper){
  cropper.destroy();
}
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  initCrop();
});
function initCrop(){
cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  },
});
}