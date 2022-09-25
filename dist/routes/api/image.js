"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var path_1 = __importDefault(require("path"));
var fs = require('fs');
var sharp = require("sharp");
var imgs_routes = (0, express_2.Router)();
imgs_routes.use(express_1.default.json());
imgs_routes.get('/:name/:width/:height', function (req, res) {
    console.log("hello");
    var name = req.params.name;
    console.log(name);
    var width = req.params.width;
    console.log(width);
    var height = req.params.height;
    console.log(height);
    var imgLocation = path_1.default.resolve('./') + "/assets/".concat(name, ".jpg");
    //     sharp(imgLocation)
    //   .resize( `${width}`, `${height}`)
    //   .toFile(".//assets/output/newmarc.jpg")
    if (name === undefined) {
        return res
            .status(400)
            .send('undefind imgg');
    }
    console.log(imgLocation);
    res.sendFile(imgLocation);
});
exports.default = imgs_routes;
