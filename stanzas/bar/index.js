export default async function bar(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: params["say-to"],
    },
  });
}

export function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: event.detail.value,
      category: event.detail.category,
      count: event.detail.count
    },
  });
}