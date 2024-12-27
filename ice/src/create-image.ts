import sharp from "sharp";
import fs from "fs";
import path from "path";
import ProgressBar from "progress";

async function generateImages(targetPath: string, maskPath: string) {
  const daysBetween = 359; // De 1º de janeiro a 25 de dezembro
  const outputDir = path.resolve("data"); // Diretório de saída
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // Carregar as imagens de entrada
  const targetImage = sharp(targetPath).toFormat("png");
  const maskImage = sharp(maskPath).toFormat("png");

  const { width: targetWidth, height: targetHeight } =
    await targetImage.metadata();
  const { width: maskWidth, height: maskHeight } = await maskImage.metadata();

  if (!targetWidth || !targetHeight || !maskWidth || !maskHeight) {
    throw new Error("Não foi possível obter as dimensões das imagens.");
  }

  // Calcular a diminuição diária da altura da máscara
  const heightDecreasePerDay = targetHeight / daysBetween;

  const bar = new ProgressBar(":percent [:bar] :current/:total", {
    total: daysBetween + 1,
    width: 20,
    complete: "=",
    incomplete: "-",
    renderThrottle: 100,
  });

  console.log("Iniciando o processamento das imagens...");

  // Redimensionar a máscara uma vez
  const resizedMaskPath = path.resolve(outputDir, "mask_resized.png");
  if (!fs.existsSync(resizedMaskPath)) {
    await maskImage
      .resize({ width: targetWidth, height: targetHeight })
      .toFile(resizedMaskPath);
  }

  // Carregar a máscara redimensionada
  const resizedMask = sharp(resizedMaskPath);

  for (let day = 0; day <= daysBetween; day++) {
    const maskHeightCurrent = Math.ceil(
      targetHeight - day * heightDecreasePerDay
    );

    // Criar uma máscara temporária com a altura atual
    const currentMaskBuffer = await resizedMask
      .extract({
        left: 0,
        top: 0,
        width: targetWidth,
        height: maskHeightCurrent,
      })
      .toBuffer();

    // Criar a composição da imagem final
    const finalImage = await sharp(await targetImage.toBuffer())
      .composite([
        {
          input: currentMaskBuffer,
          top: targetHeight - maskHeightCurrent,
          left: 0,
          blend: 'lighten'  
        },
      ])
      .png()
      .toBuffer();

    // Salvar a imagem no diretório
    const outputFilePath = path.resolve(
      outputDir,
      `image_day_${day + 1}.png`
    );
    fs.writeFileSync(outputFilePath, finalImage);

    bar.tick();
  }

  console.log("\nProcessamento concluído! As imagens estão em:", outputDir);
}

// Caminhos dos arquivos
const targetImagePath = path.resolve(__dirname, "target.png"); // Imagem que será revelada
const maskImagePath = path.resolve(__dirname, "mask.png"); // Máscara de gelo

generateImages(targetImagePath, maskImagePath).catch((err) => {
  console.error("Erro ao gerar as imagens:", err);
});