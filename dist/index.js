"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./routes/api/image"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = (0, express_1.default)();
var sharp = require("sharp");
var port = 3000;
app.use(routes_1.default);
app.use('/image', image_1.default);
app.get('/app', function (req, res) {
    res.json({
        message: "hello",
    });
});
app.get('/get', function (req, res) {
    res.send('connected....');
});
// sharp(".//assets/garyBarnes.jpg")
//   .resize(200, 240)
//   .toFile(".//assets/output/newgrayBarnes.jpg")
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
