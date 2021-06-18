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

const app = document.getElementById("app");
if (app) {
  Didact.render(element1, app);

  setTimeout(() => {
    Didact.render(element2, app);
  }, 1000);
}
