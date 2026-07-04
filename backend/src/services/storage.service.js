const ImageKit= require('imagekit');


const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT
});

 async function FileUpload(file,filename){
    const result =await imagekit.upload({
        file:file,
        fileName:filename,
        folder:'/food_images'
    })

    return result;
}

module.exports={
    FileUpload
};