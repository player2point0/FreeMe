import React, {useState} from 'react';
import {ProcessingView} from 'expo-processing';

export default function LavaLamp() {

    const sketch = (p) => {

        class Blob {

            Constructor(x, y) {
                this.pos = new PVector(x, y);
                this.vel = PVector.random2D();
                this.vel.mult(3);//Math.random(2, 5));
                this.r = 200;//Math.random(120, 400);
            }

            update() {
                this.pos.add(this.vel);
                if (this.pos.x > p.width || this.pos.x < 0) {
                    this.vel.x *= -1;
                }
                if (this.pos.y > p.height || this.pos.y < 0) {
                    this.vel.y *= -1;
                }
            }

            show() {
                p.noFill();
                p.stroke(0);
                p.strokeWeight(4);
                p.ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
            }
        }

        let blobs = [];
        const numBlobs = 2;

        p.setup = () => {
            p.size(640, 360, p.P2D);
            p.colorMode(p.HSB);
            for (let i = 0; i < numBlobs; i++) {
                let tempBlob = new Blob(Math.random()*p.width, Math.random()*p.height);
                blobs.push(tempBlob)
            }

            console.log(p.drawing);
        };

        p.draw = () => {
            p.background(151);

            p.loadPixels();

            for (let x = 0; x < p.width; x++) {
                for (let y = 0; y < p.height; y++) {
                    const index = x + y * p.width;
                    let sum = 0;

                    for (let i = 0; i < numBlobs; i++) {
                        const d = p.dist(x, y, blobs[i].pos.x, blobs[i].pos.y);
                        sum += 10 * blobs[i].r / d;
                    }

                    p.pixels[index] = p.color(sum, 255, 255);
                }
            }

            p.updatePixels();

            for (let i = 0; i < numBlobs; i++) {
                blobs[i].update();
                blobs[i].show();
            }
        }

    };

    return (

        {/*}<ProcessingView style={{flex: 1}} sketch={sketch}/>{*/}
    );
}