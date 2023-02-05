import "./styles.css";

export default function App() {
  function convertSumToOneDigit(num) {
    let g = num
      .toString()
      .split("")
      .map((item) => Number(item));

    let y = g.reduce((acc, item, i, self) => (acc += item));
    let ud = y < 9 ? y : convertSumToOneDigit(y);
    return ud;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{convertSumToOneDigit(4135)}</h3>
    </div>
  );
}

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
