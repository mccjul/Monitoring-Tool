const helloWorld = async (): Promise<String> => {
  let res = await fetch("http://localhost:5000/");
  let json = await res.json();
  return json;
};

export default helloWorld;
