const cv = require('opencv');

const fps = 1000/10;
const rectColor = [0, 255, 0];
const rectThickness = 2;

try{
  let cap = new cv.VideoCapture(0);
  let window = new cv.NamedWindow('Video', 0);

  let streaming = (err, img) =>{
    if (err) throw err;
    img.detectObject('./node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, (err, faces) => {
      if (err) throw err;

      for (let i = 0; i < faces.length; i++) {
        face = faces[i];
        img.rectangle([face.x, face.y], [face.width, face.height], rectColor, rectThickness);
      }
      window.show(img);
    });
    window.blockingWaitKey(0, 50);
  }

  setInterval( () =>{
    cap.read(streaming);
  }, fps);
} catch (e){
  console.log("Couldn't start camera:", e);
};
