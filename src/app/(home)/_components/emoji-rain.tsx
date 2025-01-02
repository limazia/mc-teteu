export function EmojiRain() {
  const emojis = ["🎄", "🎅", "🎁", "⛄", "🦌", "🔔", "🎉", "✨", "🍾", "🎊"];
  const emojiElements = [];

  // Criar 50 emojis com posições e durações aleatórias
  for (let i = 0; i < 100; i++) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const left = Math.random() * 100; // Posição horizontal aleatória
    const animationDelay = Math.random() * 3; // Delay aleatório até 3s
    const animationDuration = 3 + Math.random() * 2; // Duração entre 3-5s

    emojiElements.push(
      <div
        key={i}
        className="absolute text-2xl animate-fall"
        style={{
          left: `${left}%`,
          animation: `fall ${animationDuration}s linear ${animationDelay}s infinite`,
          top: "-20px",
        }}
      >
        {randomEmoji}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[99999] -mt-12">
      {emojiElements}
    </div>
  );
}
