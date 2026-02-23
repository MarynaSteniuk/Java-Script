import { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [fio, setFio] = useState("");
  const [submitText, setSubmitText] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [fullName, setFullName] = useState({ name: "", surname: "", father: "" });
  const [newName, setNewName] = useState("");

  const [hrefs, setHrefs] = useState([
    { href: "1.html", text: "посилання 1" },
    { href: "2.html", text: "посилання 2" },
    { href: "3.html", text: "посилання 3" },
  ]);

  const [newHref, setNewHref] = useState("");
  const [newHrefText, setNewHrefText] = useState("");

  const [users, setUsers] = useState([
    { name: "Коля", age: 30 },
    { name: "Василь", age: 40 },
    { name: "Петро", age: 50 },
  ]);

  const [newUser, setNewUser] = useState({ name: "", age: "" });

  const addItem = () => setNames([...names, "пункт"]);
  const removeLast = () => setNames(names.slice(0, -1));
  const deleteItem = (index) => setNames(names.filter((_, i) => i !== index));

  const birthYear = age ? new Date().getFullYear() - age : "";

  const fioParts = fio.split(" ");

  return (
    <div className="container">
      <h1>💗 Лабораторна робота №19 — React + цикли 💗</h1>

      <div className="task">
        <h3>1–4. Список + додати + видалити</h3>
        <ul>
          {names.map((n, i) => (
            <li key={i}>{n}
              <button onClick={() => deleteItem(i)}>❌</button>
            </li>
          ))}
        </ul>
        <button onClick={addItem}>Додати</button>
        <button onClick={removeLast}>Видалити останній</button>
      </div>

      <div className="task">
        <h3>5–6. Інпут → текст + UPPERCASE</h3>
        <input value={text} onChange={e => setText(e.target.value)} />
        <p>{text.toUpperCase()}</p>
      </div>

      <div className="task">
        <h3>7. Вік → рік народження</h3>
        <input value={age} onChange={e => setAge(e.target.value)} />
        <p>Рік народження: {birthYear}</p>
      </div>

      <div className="task">
        <h3>8. ПІБ → розбиття</h3>
        <input value={fio} onChange={e => setFio(e.target.value)} />
        <p>Прізвище: {fioParts[0]}</p>
        <p>Ім’я: {fioParts[1]}</p>
        <p>По батькові: {fioParts[2]}</p>
      </div>

      <div className="task">
        <h3>9. Submit → абзац</h3>
        <input onChange={e => setSubmitText(e.target.value)} />
        <button>OK</button>
        <p>{submitText}</p>
      </div>

      <div className="task">
        <h3>10. Сума двох чисел</h3>
        <input value={num1} onChange={e => setNum1(e.target.value)} />
        <input value={num2} onChange={e => setNum2(e.target.value)} />
        <p>Сума: {Number(num1) + Number(num2)}</p>
      </div>

      <div className="task">
        <h3>11–12. Масив + додати ім’я</h3>
        <input value={newName} onChange={e => setNewName(e.target.value)} />
        <button onClick={() => setNames([...names, newName])}>Додати</button>
      </div>

      <div className="task">
        <h3>13–14. Посилання</h3>
        <ul>
          {hrefs.map((h, i) => (
            <li key={i}><a href={h.href}>{h.text}</a></li>
          ))}
        </ul>
        <input placeholder="href" onChange={e => setNewHref(e.target.value)} />
        <input placeholder="text" onChange={e => setNewHrefText(e.target.value)} />
        <button onClick={() => setHrefs([...hrefs, { href: newHref, text: newHrefText }])}>
          Додати
        </button>
      </div>

      <div className="task">
        <h3>15–16. Таблиця користувачів</h3>
        <table>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <input placeholder="Ім'я" onChange={e => setNewUser({...newUser, name: e.target.value})} />
        <input placeholder="Вік" onChange={e => setNewUser({...newUser, age: e.target.value})} />
        <button onClick={() => setUsers([...users, newUser])}>
          Додати
        </button>
      </div>

    </div>
  );
}

export default App;
