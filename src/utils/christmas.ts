export function getChristmasCountdown(): {
  daysUntilChristmas: number;
  isChristmas: boolean;
  countdownText: string;
  ogText: string;
} {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25); // 25 de dezembro

  // Se já passou o Natal deste ano, usar o Natal do próximo ano
  if (today > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const isChristmas = today.getMonth() === 11 && today.getDate() === 25;
  const timeDiff = christmas.getTime() - today.getTime();
  const daysUntilChristmas = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const ogText = `Faltam ${daysUntilChristmas} dias para o Mc Teteu descongelar! 🎅🎄`;

  let countdownText = "";
  if (isChristmas) {
    countdownText = "Feliz Natal! 🎄";
  } else if (daysUntilChristmas === 1) {
    countdownText = "Falta 1 dia para o Natal! 🎄";
  } else {
    countdownText = `Faltam ${daysUntilChristmas} dias para o Natal! 🎄`;
  }

  return {
    daysUntilChristmas,
    isChristmas,
    countdownText,
    ogText,
  };
}
