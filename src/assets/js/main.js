import p5 from "p5";
import bunyan from "bunyan";

const log = bunyan.createLogger({ name: "page_logger", level: "debug" });

log.info("booting application");

// function setup() {
//     p5.createCanvas(480, 120);
// }

// function draw() {
//     p5.background(204);
//     p5.ellipse(50, 50, 80, 80);
// }

const project1Config = function (p) {
    const width = 600;
    const height = 300;
    const bgColor = 5;
    p.setup = function () {
        p.createCanvas(width, height);
        p.background(bgColor);
    };
    p.draw = function () {
        p.ellipse(50, 50, 80, 80);
        p.rect(200, 200, 50, 50);
    };
};

const project1 = new p5(project1Config, "output1");
