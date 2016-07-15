import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {takePicture} from "camera";
import {Image} from "ui/image";
import {ImageSource} from "image-source"


var img:Image;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
img=<Image> page.getViewById("imageid");
    page.bindingContext = new HelloWorldModel();
}
export function onTap(args:EventData){
    
    //prevImageSource.android = null;
    takePicture().then(function(picture:ImageSource) {
        console.log("Result is an image source instance");

        img.imageSource = picture;
        // if(picture){
    
        //     picture.android.recycle();
        //     picture.android = null;
        // }
    });
}