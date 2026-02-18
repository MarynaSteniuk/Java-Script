function App() {
  const text = 'текст';
  const htmlText = '<p>текст</p>';
  const text1 = '<p>текст1</p>';
  const text2 = '<p>текст2</p>';
  const attr = 'block';
  const str = 'block';
  const show = true;
  const arr = ['a', 'b', 'c', 'd', 'e'];

  const getText = () => '<p>текст</p>';
  const getNum1 = () => 1;
  const getNum2 = () => 2;

  return (
    <div className="container">
      <h1>💗 Лабораторна робота №17 — JSX у React 💗</h1>

      <div className="task">
        <h3>1. Простий текст</h3>
        <div>текст</div>
      </div>

      <div className="task">
        <h3>2. Виведення змінної</h3>
        <div>{text}</div>
      </div>

      <div className="task">
        <h3>3. HTML зі змінної</h3>
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />
      </div>

      <div className="task">
        <h3>4. Два тексти + !!!</h3>
        <div dangerouslySetInnerHTML={{ __html: `${text1}<p>!!!</p>${text2}` }} />
      </div>

      <div className="task">
        <h3>5. Атрибут id зі змінної</h3>
        <div id={attr}>текст</div>
      </div>

      <div className="task">
        <h3>6. Атрибут class зі змінної</h3>
        <div className={str}>текст</div>
      </div>

      <div className="task">
        <h3>7. Стилі</h3>
        <div style={{
          color: "green",
          border: "2px solid green",
          borderRadius: "30px",
          padding: "10px"
        }}>
          текст
        </div>
      </div>

      <div className="task">
        <h3>8. Умова (true / false)</h3>
        <div>{show ? "текст 1" : "текст 2"}</div>
      </div>

      <div className="task">
        <h3>9. Масив → список</h3>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="task">
        <h3>10. Метод getText()</h3>
        <div dangerouslySetInnerHTML={{ __html: getText() }} />
      </div>

      <div className="task">
        <h3>11. Сума двох методів</h3>
        <div>текст {getNum1() + getNum2()}</div>
      </div>

    </div>
  );
}

export default App;
