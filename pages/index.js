import { useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);

  const messages = [
    "Não aperte o botão.",
    "Eu avisei.",
    "Sério, pare.",
    "Você não sabe seguir instruções?",
    "Agora ficou pessoal.",
    "Estou julgando você.",
    "Tudo bem, continue...",
    "Você venceu. Não tenho mais argumentos."
  ];

  return (
    <main className="container">
      <h1>{messages[Math.min(clicks, messages.length - 1)]}</h1>

      <button onClick={() => setClicks(clicks + 1)}>
        NÃO APERTE
      </button>

      <p>Cliques: {clicks}</p>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #111;
          color: white;
          font-family: sans-serif;
          text-align: center;
        }

        button {
          margin: 30px;
          font-size: 2rem;
          padding: 25px 50px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}