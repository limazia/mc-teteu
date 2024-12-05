import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { format, addDays, startOfMonth, endOfMonth } from "date-fns";

const dataDir = path.resolve("data");
const assetsDir = path.resolve(dataDir, "assets/teteu");
const utilsDir = path.resolve(dataDir, "utils"); // Diretório utils
const imagesFilePath = path.resolve(utilsDir, "images.ts"); // Caminho do arquivo images.ts

// Função para criar o diretório caso não exista
function createDirIfNotExist(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Função para renomear e salvar as imagens
async function renameAndSaveImages() {
  createDirIfNotExist(assetsDir);

  // Caminho das imagens geradas, assumindo que já estão na pasta "data"
  const imageFiles = fs
    .readdirSync(dataDir)
    .filter((file) => file.startsWith("image_day_"));

  for (let i = 0; i < imageFiles.length; i++) {
    const dayImagePath = path.resolve(dataDir, imageFiles[i]);

    // Gerar um UUID para o arquivo
    const newUuid = uuidv4();

    // Renomear a imagem com a sequência (dia) e o UUID completo
    const newImageName = `${i + 1}-${newUuid}.png`; // Agora inclui o UUID completo
    const newImagePath = path.resolve(assetsDir, newImageName);

    // Mover a imagem renomeada para o diretório "teteu"
    fs.renameSync(dayImagePath, newImagePath);
  }
}

// Gerar a estrutura do objeto de imagens
export const images: { [key: string]: { [key: number]: string } } = {
  january: {},
  february: {},
  march: {},
  april: {},
  may: {},
  june: {},
  july: {},
  august: {},
  september: {},
  october: {},
  november: {},
  december: {},
};

// Função para preencher o objeto de imagens com os UUIDs
async function populateImages() {
  const files = fs.readdirSync(assetsDir);

  // Usar date-fns para calcular os dias de cada mês
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  // Processar os arquivos de imagem
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i];
    const [dayStr, uuid] = fileName.split("-");
    const dayNumber = parseInt(dayStr);

    // Encontrar o mês para o dia
    let currentDay = new Date(2024, 0, dayNumber); // Supondo que estamos no ano de 2024
    const monthIndex = currentDay.getMonth();
    const monthName = monthNames[monthIndex];

    // Calcular o número máximo de dias do mês
    const startDate = startOfMonth(currentDay);
    const endDate = endOfMonth(currentDay);
    const daysInMonth = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

    if (dayNumber <= daysInMonth) {
      // Atribuir o UUID à chave do mês e do dia
      if (images[monthName]) {
        images[monthName][dayNumber] = uuid;
      }
    }
  }
}

// Função para escrever o objeto images no arquivo images.ts
async function writeImagesToFile() {
  createDirIfNotExist(utilsDir); // Criar o diretório "utils" se não existir

  const imagesContent = `
export const images = ${JSON.stringify(images, null, 2)};
`;

  fs.writeFileSync(imagesFilePath, imagesContent);
  console.log("Arquivo images.ts criado com sucesso!");
}

// Função para rodar as operações
async function run() {
  await renameAndSaveImages();
  await populateImages();
  await writeImagesToFile();
  console.log("Imagens renomeadas e estrutura gerada.");
}

// Rodar as funções
run().catch((err) => {
  console.error("Erro ao processar as imagens:", err);
});
