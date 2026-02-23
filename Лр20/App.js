import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [city, setCity] = useState("Київ");
  const [radio, setRadio] = useState("1");
  const [texts, setTexts] = useState([]);
  const [color, setColor] = useState("black");
  const [selectCheck, setSelectCheck] = useState("не позначено");
  const [visible, setVisible] = useState("1");
  const [newOption, setNewOption] = useState("");
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const [disableCheck, setDisableCheck] = useState(false);

  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const addText = () => setTexts([...texts, text]);

  const addOption = () => {
    setOptions([...options, newOption]);
    setNewOption("");
  };

  const getDayName = () => {
    const d = new Date(year, month, day);
    return d.toLocaleDateString("uk-UA", { weekday: "long" });
  };

  return (
    <div className="container">
      <h1>💗 Лабораторна №20 — Форми у React 💗</h1>

      <div className="task">
        <h3>1. Textarea → абзац</h3>
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <p>{text}</p>
      </div>

      <div className="task">
        <h3>2. Checkbox → абзац</h3>
        <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <p>{checked ? "true" : "false"}</p>
      </div>

      <div className="task">
        <h3>3. Checkbox → показ/сховати</h3>
        <input type="checkbox" onChange={e => setChecked(e.target.checked)} />
        {checked && <p>Цей текст видно</p>}
      </div>

      <div className="task">
        <h3>4. Select → місто</h3>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option>Київ</option>
          <option>Львів</option>
          <option>Харків</option>
          <option>Одеса</option>
        </select>
        <p>Місто: {city}</p>
      </div>

      <div className="task">
        <h3>5. Radio → абзац</h3>
        <input type="radio" name="r" value="1" onChange={e => setRadio(e.target.value)} />1
        <input type="radio" name="r" value="2" onChange={e => setRadio(e.target.value)} />2
        <input type="radio" name="r" value="3" onChange={e => setRadio(e.target.value)} />3
        <p>Обрано: {radio}</p>
      </div>

      <div className="task">
        <h3>6. Textarea → масив → список</h3>
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addText}>Додати</button>
        {texts.map((t, i) => <p key={i}>{t}</p>)}
      </div>

      <div className="task">
        <h3>7. Select → колір</h3>
        <select onChange={e => setColor(e.target.value)}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <p style={{ color }}>Кольоровий текст</p>
      </div>

      <div className="task">
        <h3>8. Select → checkbox</h3>
        <select onChange={e => {
          setSelectCheck(e.target.value);
          setDisableCheck(e.target.value === "позначено");
        }}>
          <option>не позначено</option>
          <option>позначено</option>
        </select>
        <input type="checkbox" checked={disableCheck} readOnly />
      </div>

      <div className="task">
        <h3>9. Select → абзац</h3>
        <select onChange={e => setVisible(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {visible === "1" && <p>Абзац 1</p>}
        {visible === "2" && <p>Абзац 2</p>}
        {visible === "3" && <p>Абзац 3</p>}
      </div>

      <div className="task">
        <h3>10. Input → додати option</h3>
        <input value={newOption} onChange={e => setNewOption(e.target.value)} />
        <button onClick={addOption}>Додати</button>
        <select>
          {options.map((o, i) => <option key={i}>{o}</option>)}
        </select>
      </div>

      <div className="task">
        <h3>11. Checkbox → disabled input</h3>
        <input type="checkbox" onChange={e => setDisableCheck(e.target.checked)} />
        <input disabled={!disableCheck} />
      </div>

      <div className="task">
        <h3>12. Дата → день тижня</h3>
        <select value={day} onChange={e => setDay(e.target.value)}>
          {[...Array(31)].map((_, i) => <option key={i}>{i + 1}</option>)}
        </select>
        <select value={month} onChange={e => setMonth(e.target.value)}>
          {[...Array(12)].map((_, i) => <option key={i}>{i}</option>)}
        </select>
        <select value={year} onChange={e => setYear(e.target.value)}>
          {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map(y => <option key={y}>{y}</option>)}
        </select>
        <p>День тижня: {getDayName()}</p>
      </div>

    </div>
  );
}

export default App;
