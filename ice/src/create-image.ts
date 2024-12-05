import sharp from "sharp";
import fs from "fs";
import path from "path";
import ProgressBar from "progress";

async function generateImages(targetPath: string, maskPath: string) {
  const daysBetween = 359; // De 1º de janeiro a 25 de dezembro
  const outputDir = path.resolve("data"); // Diretório de saída
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // Carregar as imagens de entrada
  const targetImage = sharp(targetPath).toFormat("png"); // Garantir formato PNG
  const maskImage = sharp(maskPath).toFormat("png"); // Garantir formato PNG

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
      .ensureAlpha(0.8)
      .toFile(resizedMaskPath);
  }

  // Carregar a máscara redimensionada como buffer
  const resizedMaskBuffer = await sharp(resizedMaskPath).toBuffer();

  for (let day = 0; day <= daysBetween; day++) {
    const maskHeightCurrent = Math.ceil(
      targetHeight - day * heightDecreasePerDay
    );

    if (maskWidth > targetWidth || maskHeight > targetHeight) {
      // Criar a composição da imagem final
      const finalImage = await targetImage
        .composite([
          {
            input: resizedMaskBuffer,
            top: targetHeight - maskHeightCurrent,
            left: 0,
          }, // Fixar o "bottom"
        ])
        .png()
        .toBuffer();

      // Salvar a imagem no diretório
      const outputFilePath = path.resolve(
        outputDir,
        `image_day_${day + 1}.png`
      );
      fs.writeFileSync(outputFilePath, finalImage);
    }

    bar.tick();
  }

  console.log("\nProcessamento concluído! As imagens estão em:", outputDir);
}

// Caminhos dos arquivos
const targetImagePath = path.resolve(__dirname, "target.png"); // Altere para o caminho real
const maskImagePath = path.resolve(__dirname, "mask.png"); // Altere para o caminho real

generateImages(targetImagePath, maskImagePath).catch((err) => {
  console.error("Erro ao gerar as imagens:", err);
});
