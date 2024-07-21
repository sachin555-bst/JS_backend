import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

//configuaration

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINAR_API_SECRET

    // cloud_name: "dicjas218",
    // api_key:"676551172276171",
    // api_secret:"FUzuUXgpjopWh0cmSYeGRFAzfeo"
})


// make own method

const uploadOnCloudinary = async (localFilePath)=>{
   try {
    if(!localFilePath) return null
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    //file has been uploaded successfully
    console.log("file has been uploaded successfully",response.url);

    return response
 } 
 catch(error){
    fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
    return null;
 }
}
//upload an image

// cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//     {public_id: 'shoes'},
//     function(error,result){
//         console.log(result);
//     }
// )

export {uploadOnCloudinary}