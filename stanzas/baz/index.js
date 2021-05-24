export default async function baz(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: params["say-to"],
    },
  });
}