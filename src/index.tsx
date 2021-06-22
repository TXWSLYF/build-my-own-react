import Didact from "./Didact";

const element1 = (
  <div>
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

const Clock = ({ count }) => {
  return <div>{count}</div>;
};

const app = document.getElementById("app");
if (app) {
  let count = 0;
  Didact.render(<Clock count={count}></Clock>, app);

  setInterval(() => {
    count++;
    Didact.render(<Clock count={count}></Clock>, app);
  }, 1000);
}
