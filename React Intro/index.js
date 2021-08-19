const rootElement = document.getElementById("root");

var items = [
  "1 cup Fresh Basil",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];

const view = React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredient) => React.createElement("li", null, ingredient))
);

ReactDOM.render(view, rootElement);