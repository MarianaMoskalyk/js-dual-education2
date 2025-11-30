import { useState } from "react";

function MyComponent() {
  const [text, setText] = useState("Привіт! Це мій компонент :)");

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>Компонент з useState</h2>
      <p>{text}</p>

      <button onClick={() => setText("Ви натиснули кнопку!")}>
        Змінити текст
      </button>
    </div>
  );
}

export default MyComponent;
