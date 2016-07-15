"use strict";
var main_view_model_1 = require("./main-view-model");
var camera_1 = require("camera");
var image_1 = require("ui/image");
var prevImageSource;
var num = 9;
var img;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    img = page.getViewById("imageid");
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onTap(args) {
    //prevImageSource.android = null;
    camera_1.takePicture().then(function (picture) {
        console.log("Result is an image source instance");
        var image = new image_1.Image();
        image.imageSource = picture;
        img.imageSource = image.imageSource;
        num = num - 1;
        prevImageSource = picture;
        if (picture) {
            picture.android.recycle();
            picture.android = null;
        }
        console.log("counter " + num);
    });
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map