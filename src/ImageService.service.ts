import { Injectable, Req, Res } from '@nestjs/common';
import puppeteer from'puppeteer';
import fs from'fs'

@Injectable()
export class ImageService
{
    async createHTMLToImage(userName, userNumber,imagepath ){
        
        const filePath =  './assets/images/profileCard.png';
        const htmlTemplate= `<html><body><h2>${{userName}} : ${{userNumber}}</h2> <img src="data:image/png;base64, ${{imagepath}}" onerror="this.style.display='none';" width="500" height="333"/></body></html>`;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
 
        await page.setContent(htmlTemplate);
 
        const content = await page.$("body");
        const imageBuffer = await content.screenshot({ omitBackground: true });
        await page.close();
        await browser.close();
        return imageBuffer;
    }
}
