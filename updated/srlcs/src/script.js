let faceVerified = false;
let suitcaseDetected = false;
let weightVerified = false;
let systemActive = true;

// Camera Setup
const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
})
.catch(err => {
    console.log("Camera access denied");
});

// Face Capture Simulation
function captureFace() {
    if (!systemActive) return;

    // In real system: AI backend verification
    faceVerified = true;
    document.getElementById("faceStatus").innerHTML =
        "✅ Face Verified Successfully";
}

// Suitcase Detection Simulation
function detectSuitcase() {
    if (!systemActive) return;

    // In real system: Object detection API
    suitcaseDetected = true;
    document.getElementById("suitcaseStatus").innerHTML =
        "✅ Suitcase Detected & Matched";
}

// Weight Check
function checkWeight() {
    if (!systemActive) return;

    let weight = document.getElementById("weightInput").value;

    if (weight <= 32 && weight > 0) {
        weightVerified = true;
        document.getElementById("weightStatus").innerHTML =
            "✅ Weight Verified";
    } else {
        weightVerified = false;
        document.getElementById("weightStatus").innerHTML =
            "❌ Weight Exceeds Limit";
    }
}

