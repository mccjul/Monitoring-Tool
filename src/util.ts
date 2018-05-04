var PythonShell = require("python-shell");

const Exe = () => {
  console.log("eh");
  var pyshell = new PythonShell("example.py", {
    mode: "text"
  });
  var output = "";
  pyshell.stdout.on("data", (data: String) => {
    output += "" + data;
  });
  pyshell
    .send("hello")
    .send("world")
    .end((err: Error) => {
      if (err) return console.log(err);
      console.log(output);
    });
};
export default Exe;
