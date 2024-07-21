// import multer from "multer"

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "/Advanced_js_backend/public/temp")
//     },
//     filename: function (req, file, cb) {
      
//       cb(null, file.originalname)
//     }
//   })
  
  
// export const upload = multer({ 
//     storage, 
// })

import multer from "multer";
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      console.log("Multer filename middleware called");
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({storage})