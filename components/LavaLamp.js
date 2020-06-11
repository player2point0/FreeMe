import React, {useState, useEffect} from 'react';
import Svg, {Path} from "react-native-svg";
import {width, height} from "../constants/Layout";
import {StyleSheet, Text, View, Button} from 'react-native';

function CirclePath({x, y, radius}) {

    return (
        <Path
            strokeWidth="1"
            stroke={'black'}
            fill={'blue'}
            d={`
                 M ${x}, ${y}
                 m -${radius}, 0
                 a ${radius},${radius} 0 1,0 ${radius * 2},0
                 a ${radius},${radius} 0 1,0 -${radius * 2},0
                 `}
        />
    );
}

class Blob {

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.forceXRange = 2;
        this.forceY = 3;
    }

    update(){
        const GRAVITY = 1;

        this.y += this.forceY;
        //todo add perlin noise to the x movement
        this.x += (Math.random() * this.forceXRange) - this.forceXRange/2;

        if(this.y + 2*this.radius > height || this.y - this.radius < 0) this.forceY *= -1;

    }
}


export default function LavaLamp() {

    const [blobs, setBlobs] = useState([new Blob(200, 100, 100)]);

    useEffect(() => {
        let timer = setInterval(() => {

            for(let i = 0;i<blobs.length;i++){
                blobs[i].update();
            }

            setBlobs([...blobs]);

        }, 1000/30);

        return () => clearInterval(timer)
    }, []);

    return (
        <View>
            <Text>lava lamp</Text>
            <Svg
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                style={styles.svg}
            >
                {blobs.map(blob => {
                    return <CirclePath
                        x={blob.x}
                        y={blob.y}
                        radius={blob.radius}
                    />
                })}
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    svg: {
        borderWidth: 2,
        borderColor: 'red',
    },
});