import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Script para renomear e gerar o arquivo de mapeamento
const dataDir = path.resolve('data');
const outputMapping: { [key: string]: string } = {};
const imageMapping: { [key: number]: string } = {};

// Lê todos os arquivos do diretório
const files = fs.readdirSync(dataDir)
  .filter(file => file.startsWith('image_day_'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.match(/\d+/)?.[0] || '0');
    return numA - numB;
  });

// Renomeia cada arquivo e cria o mapeamento
files.forEach(file => {
  const dayNumber = parseInt(file.match(/\d+/)?.[0] || '0');
  const uuid = uuidv4();
  const newName = `image-${dayNumber}${uuid}.png`;
  
  // Renomeia o arquivo
  fs.renameSync(
    path.join(dataDir, file),
    path.join(dataDir, newName)
  );
  
  // Guarda o mapeamento
  outputMapping[newName] = file;
  imageMapping[dayNumber] = newName;
});

// Gera o arquivo de mapeamento TypeScript
const mappingContent = `
// Mapeamento de imagens com UUID
export const imageMapping: { [key: number]: string } = ${JSON.stringify(imageMapping, null, 2)};

// Função para obter a imagem do dia
export function getImageForDate(date: Date): string {
  const start = new Date(date.getFullYear(), 0, 1);
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayOfYear = Math.floor((today.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
  
  // Se for após 25 de dezembro, mostra a última imagem
  if (date.getMonth() === 11 && date.getDate() > 25) {
    return imageMapping[359];
  }
  
  // Se for antes de 1 de janeiro, mostra a primeira imagem
  if (dayOfYear < 1) {
    return imageMapping[1];
  }
  
  return imageMapping[dayOfYear] || imageMapping[1];
}
`;

fs.writeFileSync('./imageMapping.ts', mappingContent);

console.log('Arquivos renomeados e mapeamento gerado com sucesso!');