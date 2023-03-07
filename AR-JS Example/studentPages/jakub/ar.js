var scene, camera, renderer, clock, deltaTime, totalTime;
var arToolkitSource, arToolkitContext;
var markerRoot1;
var mesh0, mesh1;


function innitialise(){
    scene = new THREE.Scene();

    let ambientLight = new THREE.
}

function update() {
    if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
    }
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);

    deltaTime += clock.getDelta();
    totalTime += deltaTime;
    update();
    render();
}
