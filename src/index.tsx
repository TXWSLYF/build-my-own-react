import Didact from "./Didact";

const element1 = (
  <div
    onClick={(e) => {
      console.log(e);
    }}
  >
    {/* TODO:支持 style */}
    <h1 className="111" title="1">
      haha
    </h1>
    <ul>
      <li>a</li>
      <li>b</li>
    </ul>
  </div>
);

const element2 = (
  <div>
    <h1>hello</h1>
  </div>
);

const Clock = () => {
  const [count1, setCount1] = Didact.useState(0);
  const [count2, setCount2] = Didact.useState(0);
  return (
    <div
      onClick={() => {
        setCount1((count1) => count1 + 1);
        console.log(count1)
        setCount1((count1) => count1 + 1);
        console.log(count1)
        setCount2((count2) => count2 + 2);
      }}
    >
      <p>{count1}</p>
      <p>{count2}</p>
    </div>
  );
};

const app = document.getElementById("app");
if (app) {
  // let count = 0;
  // Didact.render(<Clock count={count}></Clock>, app);
  // setInterval(() => {
  //   count++;
  //   Didact.render(<Clock count={count}></Clock>, app);
  // }, 1000);

  // Didact.render(element1, app);
  Didact.render(
    <div>
      <Clock />
    </div>,
    app
  );
}
