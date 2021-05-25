export default async function eventInput(stanza, params) {

  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      fields: [
        {
          label: 'First name',
          required: true
        },
        {
          label: 'Middle name',
          required: false
        },
        {
          label: 'Last name',
          required: true
        }
      ]
    }
  });
}

export function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: event.detail.value,
    },
  });
}
