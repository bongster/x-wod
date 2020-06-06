import { v2 as Cloudinary } from "cloudinary";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false
  }
}

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  }
});

const upload = multer({ storage: storage });

export default async (req, res) => {
  if (!process.env.CLOUDINARY_URL) {
    res.send(new Error("have to set $CLOUDINARY_URL env"));
    return;
  }
  console.log(process.env.CLOUDINARY_URL);
  const Uploader = upload.single("file");
  Uploader(req, res, err => {
    const uniqueFilename = new Date().toISOString();
    Cloudinary.uploader.upload(req.file.path, { 
      public_id: `image/${uniqueFilename}`,
      "crop": "limit", 
      "tags": "image", 
      "width": 250, 
      "height": 250,
    }, function (err, image) { 
      if (err)
        res.send(err)
      res.status(200).json({ url: image.secure_url });
    });
  })
}
