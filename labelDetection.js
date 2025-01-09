const vision = require("@google-cloud/vision");
const path = require("path");

async function performLabelDetection() {
  // JSON 키 파일 경로로
  const keyFilename = path.join(__dirname, "sweepicai-00d515e813ea.json");

  const client = new vision.ImageAnnotatorClient({
    keyFilename: keyFilename, // JSON 키 파일 경로
  });

  // 테스트 이미지 파일 경로
  const fileName = path.join(__dirname, "test.jpeg");

  try {
    // 라벨 감지 요청
    const [result] = await client.labelDetection(fileName);
    const labels = result.labelAnnotations;

    // 결과 출력
    console.log("Detected labels:");
    labels.forEach((label, index) => {
      console.log(
        `Label #${index + 1}: ${label.description} (Confidence: ${(
          label.score * 100
        ).toFixed(2)}%)`
      );
    });
  } catch (error) {
    console.error("Error during label detection:", error);
  }
}

// 라벨 감지 실행
performLabelDetection();
