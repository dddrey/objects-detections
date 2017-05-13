const cv = require('opencv');

try {
  var camera = new cv.VideoCapture(0);
  var window = new cv.NamedWindow('Video', 0);
  setInterval( () => {
    camera.read( (err, img) => {
      if (err) throw err;
      // console.log(img.size());
      if (img.size()[0] > 0 && img.size()[1] > 0){
        window.show(img);
      }
      window.blockingWaitKey(0, 50);
    });
  }, 20);
} catch (e){
  console.log("Couldn't start camera:", e);
};
