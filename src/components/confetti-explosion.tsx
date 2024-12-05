import Confetti from "react-confetti-explosion";
import useWindowSize from "react-use/lib/useWindowSize";

export function ConfettiExplosion() {
  const { width, height } = useWindowSize();

  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    floorHeight: height,
    floorWidth: width,
    colors: [
      "#FF6384", // Rosa
      "#36A2EB", // Azul
      "#FFCE56", // Amarelo
      "#4BC0C0", // Verde Água
      "#9966FF", // Roxo
      "#FF9F40", // Laranja
      "#FFFFFF", // Branco
      "#000000", // Preto
      "#00FF7F", // Verde Claro
      "#FF1493", // Rosa Forte
    ],
  };

  return <Confetti {...bigExplodeProps} />;
}
