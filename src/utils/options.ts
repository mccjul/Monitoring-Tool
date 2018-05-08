import options from "./options_object";

export const names: Array<String> = options.map((elm: Options) => elm.name);

export const systems = (client: String): Array<String> =>
  options
    .filter((elm: Options) => client === elm.name)[0]
    ["system"].map((elm: Options) => elm.name);

export const transaction_info = (
  client: String,
  system: String
): Array<String> =>
  options
    .filter((elm: Options) => client === elm.name)[0]
    ["system"].filter((elm: any) => system === elm.name)[0]["transaction_info"];

interface Options {
  name: String;
  system: Array<{ name: String; transaction_info: Array<String> }>;
}
