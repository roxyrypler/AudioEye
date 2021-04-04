
let cvs;
let img;
let imgs = [];
let Resolution = 10;
let counter = 0;

let osc1;

function preload() {
    img = loadImage("./assets/Render1/0160.png");
    for (let i = 1; i < 199; i++) {
        if (i < 10) {
            imgs.push(loadImage(`./assets/Render1/000${i}.png`)); 
        }else if (i > 9 && i < 100) {
            imgs.push(loadImage(`./assets/Render1/00${i}.png`)); 
        }else {
            imgs.push(loadImage(`./assets/Render1/0${i}.png`)); 
        }
    }
}

function setup() {
    cvs = createCanvas(img.width, img.height);

    osc1 = new p5.SinOsc(440);
    osc1.amp(0.5);
    osc1.start();

    print(imgs);

    setInterval(() => {
        for (let i = 0; i < imgs[counter].width; i+= Resolution) {
            for (let j = 0; j < imgs[counter].height; j+= Resolution) {
                let c = imgs[counter].get(i, j);
                stroke(color(c));
                if (i == imgs[counter].width / 2 && j == imgs[counter].height / 2) {
                    print("Half point");
                    strokeWeight(Resolution * 2);
                    point(i, j);
                    osc1.freq(c[0] + 1 * 2);
                    print("Center color", c[0] + 1 * 2);
                }else {
                    strokeWeight(Resolution);
                    point(i, j);
                }
            }     
        }
        counter++
        if (counter >= imgs.length) {
            counter = 0;
        }
    }, 100);
}






