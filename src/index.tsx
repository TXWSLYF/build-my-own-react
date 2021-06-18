import Didact from "./Didact";

const element = (
  <div>
    {/* TODO:支持 style */}
    <h1 className="111" title="1" style={{ color: "red" }}>
      haha
    </h1>
    <ul>
      <li>a</li>
      <li>b</li>
    </ul>
  </div>
);

const app = document.getElementById("app");
if (app) {
  Didact.render(element, app);
}
