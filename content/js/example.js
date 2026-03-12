export function doExample() {
  console.log("Example function");
}

module.exports = () => "?nocache=" + Date.now();
