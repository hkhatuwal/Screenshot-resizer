// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import path from "path"
import formidable from "formidable";
import getConfig from "next/config";
import Jimp, {resize} from "jimp";
import JSZip from "jszip";
import {appStoreScreenshotsSizes, getFileName} from "../../../utils/constants";

export const config = {
    api: {
        bodyParser: false,
    },
};
export default function handler(req, res) {
    const form = formidable();
    form.multiples = true;
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, {'Content-Type': 'text/plain'});
            res.send(String(err));
            return;
        }

        const resizedBundles=[]
        const currentTime=Date.now().toString();
        for (const file of files.file) {
           for (const item of appStoreScreenshotsSizes) {
               const resizedImages = []
               for (const size of item.sizes){
                   const resized= await resizeAndSaveImage(file,size.width,size.height)
                   resizedImages.push(resized)
               }
               const bundle=await zipFiles(resizedImages,item.platform,currentTime)
               resizedBundles.push(bundle)
           }
        }
        const zipFilePath = await zipFiles(resizedBundles,'images',currentTime)
        res.json({
            image:zipFilePath.split('uploads\\')[1]
        })


    });

}


async function resizeAndSaveImage(file,width,height) {
    const {serverRuntimeConfig} = getConfig()
    const fileName =`${width}x${height} `+file.originalFilename
    const outputPath = path.join(serverRuntimeConfig.PUBLIC + "/images", fileName)
    const lenna = await Jimp.read(file.filepath);
    await lenna.resize(width, height).writeAsync(outputPath)
    return outputPath

}


async function zipFiles(imagePaths,folderName="images",currentTime) {

    const zip = new JSZip();
     const img = zip.folder(folderName.toString());
    for (const imgPath of imagePaths) {
        const imageName=getFileName(imgPath)
        const file=await fs.readFileSync(imgPath)
        img.file(imageName,file)
    }
    const blobData = await zip.generateAsync({type: "blob"})
    const buffer = Buffer.from(await blobData.arrayBuffer());
    const {serverRuntimeConfig} = getConfig()
    const fileName =folderName  + ".zip";
    let directory=serverRuntimeConfig.PUBLIC + "/zip";
    if(currentTime){
        directory+="/"+currentTime;
    }
    if (!fs.existsSync(directory)) {
      await  fs.mkdirSync(directory)
    }
    const zipOutputPath = path.join(directory, fileName)
    await fs.writeFileSync(zipOutputPath, buffer);
    return zipOutputPath

}
