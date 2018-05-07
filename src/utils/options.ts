import options from "./options_object";

export const names: Array<String> = options.map((elm: Options) => elm.name);

export const transaction_info = (name: String): Array<String> =>
  options.filter((elm: Options) => name === elm.name)[0]["transaction_info"];

interface Options {
  name: String;
  transaction_info: Array<String>;
}
