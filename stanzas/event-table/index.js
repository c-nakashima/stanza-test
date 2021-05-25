export default async function eventTable(stanza, params) {

  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      fields: [
        {
          label: 'Name',
          value: 'Tanaka',
          required: true
        },
        {
          label: 'Country',
          value: 'Japane',
          required: false
        },
        {
          label: 'Age',
          value: '19',
          required: true
        }
      ]
    }
  });

  //get clicked column values
  const values = stanza.root.querySelectorAll('.value');
  for (let i = 0; i < values.length; i++) {
    values[i].addEventListener('click', (e) => {
      const clickedValue = e.path[0].innerText;
      stanza.host.dispatchEvent(
        new CustomEvent("valueClicked", { detail: { clickedValue } })
      );
    })
  };
}

export function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: event.detail.value,
    },
  });
}

// export default async function dispatchValue(stanza, params) {
//   stanza.host.dispatchEvent(
//       new CustomEvent("valueChanged", { detail: { value: 42 } })
//   );
// }