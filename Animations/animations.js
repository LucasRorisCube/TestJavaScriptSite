var animationsList = [
    { image: 'raycasting.jpg', html: 'RayCasting/index.html', title: 'Ray Casting' },
    { image: 'fireworks.jpg', html: 'Fireworks/index.html', title: 'Fireworks'},
    { image: '2DWaterRipple.png', html: '2DWaterRipple/index.html', title: '2D Water Ripple'},
    { image: 'thumb1.jpg', html: '3DRenderingWith2D/index.html', title: '3D Rendering In 2D'},
    { image: 'thumb1.jpg', html: '4DTesseract/index.html', title: '4D Tesseract'},
    { image: 'thumb1.jpg', html: 'ApproximatingTheValueOfPi/index.html', title: 'Approximating Pi'},
    { image: 'thumb1.jpg', html: 'BezierFlowers/index.html', title: 'Bezier Flowers'},
    { image: 'thumb1.jpg', html: 'BlackHoleVisualization/index.html', title: 'Black Hole Visualization'},
    { image: 'thumb1.jpg', html: 'CirclePacking/index.html', title: 'Circle Packing'},
    { image: 'thumb1.jpg', html: 'CubeWave/index.html', title: 'Cube Wave'},
    { image: 'thumb1.jpg', html: 'DoublePendulum/index.html', title: 'Double Pendulum'},
    { image: 'thumb1.jpg', html: 'DrawWithFourier/index.html', title: 'Draw With Fourier'},
    { image: 'thumb1.jpg', html: 'EllipseReflection/index.html', title: 'Ellipse Reflection'},
    { image: 'thumb1.jpg', html: 'FlockingSimulation/index.html', title: 'Flocking Simulation'},
    { image: 'thumb1.jpg', html: 'FourierSeries/index.html', title: 'Fourier Series'},
    { image: 'thumb1.jpg', html: 'ImagePi/index.html', title: 'Image Of Pi'},
    { image: 'thumb1.jpg', html: 'KaleidoscopeSnowflake/index.html', title: 'Kaleidoscope Snowflake'},
    { image: 'thumb1.jpg', html: 'LinearRegression/index.html', title: 'Linear Regression'},
    { image: 'thumb1.jpg', html: 'LissajousCurveTable/index.html', title: 'Lissajous Curve Table'},
    { image: 'thumb1.jpg', html: 'ManyPendulums/index.html', title: 'Many Pendulums'},
    { image: 'thumb1.jpg', html: 'MarchingSquares/index.html', title: 'Marching Squares'},
    { image: 'thumb1.jpg', html: 'MaurerRose/index.html', title: 'Maurer Rose'},
    { image: 'thumb1.jpg', html: 'Metaballs/index.html', title: 'Metaballs'},
    { image: 'thumb1.jpg', html: 'Phyllotaxis/index.html', title: 'Phyllotaxis'},
    { image: 'thumb1.jpg', html: 'RecmansSequence/index.html', title: 'Recmans Sequence'},
    { image: 'thumb1.jpg', html: 'RenderingRayCasting/index.html', title: 'Rendering RayCasting'},
    { image: 'thumb1.jpg', html: 'RubiksCube/index.html', title: 'Rubiks Cube'},
    { image: 'thumb1.jpg', html: 'SudokuBacktrackingSolver/index.html', title: 'Sudoku Backtracking Solver'},
    { image: 'thumb1.jpg', html: 'TheGameOfLife/index.html', title: 'The Game Of Life'},
    { image: 'thumb1.jpg', html: 'ThePrimeCircle/index.html', title: 'The Prime Circle'},
    { image: 'thumb1.jpg', html: 'ThePrimeSpiral/index.html', title: 'The Prime Spiral'},
    { image: 'thumb1.jpg', html: 'ThePrimeSquare/index.html', title: 'The Prime Square'},
    { image: 'thumb1.jpg', html: 'TimesTablesCardioid/index.html', title: 'Times Tables Cardioid'},
];

function compareNamesAnimations(a, b){
    if(a.title > b.title){
        return 1;
    } else {
        return -1;
    }
}

animationsList = animationsList.sort(compareNamesAnimations);

function loadAnimation(animationFile) {
    const frame = document.getElementById('animation-frame');
    frame.src = animationFile + "?x=" + Date.now();
}


function createAnimationOptions() {
    const ul = document.querySelector('.lateral-menu ul');
    animationsList.forEach(animation => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.onclick = () => {
            // Remove active class from all list items
            const listItems = document.querySelectorAll(".lateral-menu ul li a");
            listItems.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked list item
            a.classList.add('active');

            loadAnimation(animation.html);
        }

        const img = document.createElement('img');
        img.src = `images/${animation.image}`;
        img.alt = animation.title;

        const span = document.createElement('span');
        span.textContent = animation.title;

        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        ul.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', createAnimationOptions);
