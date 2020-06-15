import React, {useState, useEffect} from 'react';
import Svg, {Path} from "react-native-svg";
import {width, height} from "../constants/Layout";
import {StyleSheet, Text, View} from 'react-native';

function CirclePath({x, y, radius}) {
    return (
        <Path
            stroke={'black'}
            d={`
                 M ${x}, ${y}
                 m -${radius}, 0
                 a ${radius},${radius} 0 0,0 ${radius * 2},0
                 a ${radius},${radius} 0 0,0 -${radius * 2},0
                 `}
        />
    );
}

function SquarePath({x, y, radius, red}) {
    return (
        <Path
            stroke={'black'}
            fill={`rgb(${red},0,0)`}
            d={`
                 M ${x}, ${y}
                 l ${radius}, 0
                 l ${0}, ${radius}
                 l -${radius}, 0
                 l 0, 0
                 `}
        />
    );
}

class Blob {

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.forceXRange = 4;
        this.forceY = Math.random() * 5;
    }

    update() {
        this.y += this.forceY;
        //todo add perlin noise to the x movement
        this.x += (Math.random() * this.forceXRange) - this.forceXRange/2;

        if(this.y + 2*this.radius > height || this.y - this.radius < 0) this.forceY *= -1;
    }
}


export default function LavaLamp() {

    const [blobs, setBlobs] = useState([
        new Blob(100, 100, 25),
        new Blob(150, 150, 50),
        new Blob(250, 300, 25),
        new Blob(200, 200, 50),
        new Blob(200, 400, 75),
    ]);

    let tempPixelGrid = [];
    const pixelSize = 20;
    const pixelGridWidth = width / pixelSize;
    const pixelGridHeight = height / pixelSize;

    const [pixelGrid, setPixelGrid] = useState([]);

    useEffect(() => {
        let timer = setInterval(() => {

            //move the blobs
            for (let i = 0; i < blobs.length; i++) {
                blobs[i].update();
            }

            setBlobs([...blobs]);

            let tempPixelGrid = [];
            const THRESHOLD = 2;

            //todo optimise this to only loop through squares that are within n of a blob
            //update the pixel grid with the newly updated blobs
            for (let y = 0; y < pixelGridHeight; y++) {
                for (let x = 0; x < pixelGridWidth; x++) {
                    let sum = 0;

                    for (let i = 0; i < blobs.length; i++) {
                        let xDif = (x*pixelSize) - blobs[i].x;
                        let yDif = (y*pixelSize) - blobs[i].y;
                        let dis = Math.sqrt(xDif * xDif + yDif * yDif);
                        sum += blobs[i].radius / dis;
                    }

                    if(sum > THRESHOLD){
                        tempPixelGrid.push({
                            x: x * pixelSize,
                            y: y * pixelSize,
                            red: 220,
                        });
                    }
                }
            }

            setPixelGrid([...tempPixelGrid]);


            //todo loop through the pixelsGrid and use a flood fil algo to find the edges
            // save the points of each edge

        }, 1000 / 10);

        return () => clearInterval(timer)
    }, [blobs, pixelGrid]);

    return (
        <View>
            <Svg
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                style={styles.svg}
            >
                {pixelGrid.map(pixel => {
                        return <SquarePath
                            x={pixel.x}
                            y={pixel.y}
                            radius={pixelSize}
                            red={pixel.red}
                        />
                    })}

                {/*blobs.map(blob => {
                    return <CirclePath
                        x={blob.x}
                        y={blob.y}
                        radius={blob.radius}
                    />
                })*/}
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    svg: {},
});