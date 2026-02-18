import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({ name: "Іван", age: 25 });
  const [showText, setShowText] = useState(false);
  const [show, setShow] = useState(true);
  const [names] = useState(["Коля", "Вася", "Петя"]);
  const [hrefs] = useState([
    { href: "1.html", text: "посилання 1" },
    { href: "2.html", text: "посилання 2" },
    { href: "3.html", text: "посилання 3" },
  ]);

  const showMessage = () => {
    alert("hello");
  };

  const showName = () => {
    alert(person.name);
  };

  const changePerson = () => {
    setPerson({ name: "Коля", age: 30 });
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="container">
      <h1>💗 Лабораторна робота №18 — Робота зі state в React 💗</h1>

      {/* 1 */}
      <div className="task">
        <h3>1. Виведення state</h3>
        <div>Ім’я: {person.name}, вік: {person.age}</div>
      </div>

      {/* 2 */}
      <div className="task">
        <h3>2. Кнопка → alert('hello')</h3>
        <button onClick={showMessage}>Натисни</button>
      </div>

      {/* 3 */}
      <div className="task">
        <h3>3. Кнопка → alert(ім’я)</h3>
        <button onClick={showName}>Показати ім’я</button>
      </div>

      {/* 4 */}
      <div className="task">
        <h3>4. Зміна імені та віку</h3>
        <div>Ім’я: {person.name}, вік: {person.age}</div>
        <button onClick={changePerson}>Змінити</button>
      </div>

      {/* 5 */}
      <div className="task">
        <h3>5. Умовний рендеринг (show)</h3>
        <div>{show ? `Привіт, ${person.name}` : `Пока, ${person.name}`}</div>
        <button onClick={() => setShow(!show)}>Змінити</button>
      </div>

      {/* 6-7-8 */}
      <div className="task">
        <h3>6–8. Показ / сховати текст + зміна тексту кнопки</h3>
        {showText && (
          <p>ім'я: {person.name}, вік: {person.age}</p>
        )}
        <button onClick={toggleText}>
          {showText ? "сховати" : "показати"}
        </button>
      </div>

      {/* 9 */}
      <div className="task">
        <h3>9. Масив → список</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>

      {/* 10 */}
      <div className="task">
        <h3>10. Масив + номер</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {name} - {index + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* 11 */}
      <div className="task">
        <h3>11. Масив посилань</h3>
        <ul>
          {hrefs.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;


