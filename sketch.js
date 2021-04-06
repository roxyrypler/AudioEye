
let cvs;
let img;
let imgs = [];
let Resolution = 10;
let counter = 0;

let osc1;
let osc2;
let osc3;

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

    osc2 = new p5.SinOsc(440); 
    osc2.amp(0.5);
    osc2.start();

    osc3 = new p5.SinOsc(440); 
    osc3.amp(0.5);
    osc3.start();

    print(imgs);

    setInterval(() => {
        for (let i = 0; i < imgs[counter].width; i+= Resolution) {
            for (let j = 0; j < imgs[counter].height; j+= Resolution) {
                let c = imgs[counter].get(i, j);
                if (i == imgs[counter].width / 2 && j == imgs[counter].height / 2) {
                    print("Half point");
                    strokeWeight(Resolution * 2);
                    stroke(0);
                    point(i, j);

                    let pitch = map(c[0], 0, 255, 880, 20);
                    let osc1Amp = map(c[0], 1, 255, 0.5, 0);

                    osc1.freq(pitch);
                    osc1.amp(osc1Amp);
                    osc1.pan(0);
                    print("pitch", pitch, "vol", osc1Amp);
                }else if (i == imgs[counter].width / 2 / 2 && j == imgs[counter].height / 2) {
                    strokeWeight(Resolution * 2);
                    stroke(0);
                    point(i, j);
                    let pitch = map(c[0], 0, 255, 880, 20);
                    let osc1Amp = map(c[0], 1, 255, 0.5, 0);

                    osc2.freq(pitch);
                    osc2.amp(osc1Amp);
                    osc2.pan(-1);
                }else if (i == imgs[counter].width - (imgs[counter].width / 4) && j == imgs[counter].height / 2) {
                    strokeWeight(Resolution * 2);
                    stroke(0);
                    point(i, j);
                    
                    let pitch = map(c[0], 0, 255, 880, 20);
                    let osc1Amp = map(c[0], 1, 255, 0.5, 0);

                    osc3.freq(pitch);
                    osc3.amp(osc1Amp);
                    osc3.pan(1);
                    
                }else {
                    strokeWeight(Resolution);
                    stroke(color(c));
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






