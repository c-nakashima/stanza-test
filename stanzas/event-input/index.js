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

  const input = stanza.root.querySelector('#input');
  const changeInputValue = function(){
    input.setAttribute('value', 'hoge');
  }
}

export function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      clickedData: event.detail.value,
    },
  });
}
