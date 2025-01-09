const vision = require("@google-cloud/vision");
const path = require("path");

async function performOCR() {
  // JSON 키 파일 경로
  const keyFilename = path.join(__dirname, "sweepicai-00d515e813ea.json");

  const client = new vision.ImageAnnotatorClient({
    keyFilename: keyFilename, // JSON 키 파일 경로
  });

  const fileName = path.join(__dirname, "test.jpeg");

  try {
    // OCR 요청
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;

    // OCR 결과 출력
    if (detections && detections.length > 0) {
      console.log("Detected text:");
      detections.forEach((text, index) => {
        console.log(`Text #${index + 1}: ${text.description}`);
      });
    } else {
      console.log("No text detected.");
    }
  } catch (error) {
    console.error("Error during OCR:", error);
  }
}

performOCR();
