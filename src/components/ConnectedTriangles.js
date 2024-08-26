// import React, { useState, useEffect } from 'react';
// import '../style/ConnectedTriangle.css';

// const colors = ['#83b6b3', '#c79b2a', '#52565e', '#066d66','#c5c7c9','#dabc71']; 

// const generateTriangle = (prevTriangles) => {
//     const triangleSize = 50;

//     if (prevTriangles.length === 0) {
//         return {
//             offsetX: window.innerWidth - triangleSize,
//             offsetY: 0,
//             color: colors[Math.floor(Math.random() * colors.length)],
//             direction: 'downRight',
//         };
//     }

//     const lastTriangle = prevTriangles[prevTriangles.length - 1];
//     let offsetX, offsetY, direction;

//     const directions = [
//         { x: -triangleSize, y: triangleSize / 2, dir: 'downRight' },  
//         { x: -triangleSize, y: -triangleSize / 2, dir: 'upRight' },   
//         { x: 0, y: triangleSize, dir: 'down' },                       
//         { x: 0, y: -triangleSize, dir: 'up' },                        
//     ];

//     const randomDirection = directions[Math.floor(Math.random() * directions.length)];
//     offsetX = lastTriangle.offsetX + randomDirection.x;
//     offsetY = lastTriangle.offsetY + randomDirection.y;
//     direction = randomDirection.dir;

//     return {
//         offsetX,
//         offsetY,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         direction,
//     };
// };

// const ConnectedTriangles = () => {
//     const [triangles, setTriangles] = useState([]);
//     const maxTriangles = 30;

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTriangles((prev) => {
//                 if (prev.length < maxTriangles) {
//                     return [...prev, generateTriangle(prev)];
//                 } else {
//                     return []; // Reset after reaching the maximum
//                 }
//             });
//         }, 300); 

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="connected-triangles-container">
//             {triangles.map((triangle, index) => (
//                 <div
//                     key={index}
//                     className={`triangle ${triangle.direction}`}
//                     style={{
//                         left: `${triangle.offsetX}px`,
//                         top: `${triangle.offsetY}px`,
//                         borderBottomColor: triangle.color,
//                     }}
//                 ></div>
//             ))}
//         </div>
//     );
// };

// export default ConnectedTriangles;






import React, { useState, useEffect } from 'react';
import '../style/ConnectedTriangles.css'; 

const colors = ['#83b6b3', '#c79b2a', '#52565e', '#066d66','#c5c7c9','#dabc71']; 

const generateTriangle = (prevTriangles) => {
    const triangleSize = 50;
    const containerSize = 200;

    if (prevTriangles.length === 0) {
        return {
            offsetX: containerSize / 2 - triangleSize / 2, // Start near the center
            offsetY: containerSize / 2 - triangleSize / 2, // Start near the center
            color: colors[Math.floor(Math.random() * colors.length)],
            direction: 'downRight',
        };
    }

    const lastTriangle = prevTriangles[prevTriangles.length - 1];
    let offsetX, offsetY, direction;

    const directions = [
        { x: -triangleSize, y: triangleSize / 2, dir: 'downRight' },  
        { x: -triangleSize, y: -triangleSize / 2, dir: 'upRight' },   
        { x: 0, y: triangleSize, dir: 'down' },                       
        { x: 0, y: -triangleSize, dir: 'up' },                        
    ];

    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    offsetX = lastTriangle.offsetX + randomDirection.x;
    offsetY = lastTriangle.offsetY + randomDirection.y;
    direction = randomDirection.dir;

    // Ensure the triangles stay within the 200px box
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > containerSize - triangleSize) offsetX = containerSize - triangleSize;
    if (offsetY > containerSize - triangleSize) offsetY = containerSize - triangleSize;

    return {
        offsetX,
        offsetY,
        color: colors[Math.floor(Math.random() * colors.length)],
        direction,
    };
};

const ConnectedTriangles = () => {
    const [triangles, setTriangles] = useState([]);
    const maxTriangles = 30;

    useEffect(() => {
        const interval = setInterval(() => {
            setTriangles((prev) => {
                if (prev.length < maxTriangles) {
                    return [...prev, generateTriangle(prev)];
                } else {
                    return []; // Reset after reaching the maximum
                }
            });
        }, 300); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="connected-triangles-container">
            {triangles.map((triangle, index) => (
                <div
                    key={index}
                    className={`triangle ${triangle.direction}`}
                    style={{
                        left: `${triangle.offsetX}px`,
                        top: `${triangle.offsetY}px`,
                        borderBottomColor: triangle.color,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default ConnectedTriangles;
