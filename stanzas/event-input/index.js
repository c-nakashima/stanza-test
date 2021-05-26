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
  //get clicked column values
  const submitBtn = stanza.root.querySelector('#submitBtn');
  submitBtn.addEventListener('click', (e) => {

    const valueInput = input.value;
    stanza.host.dispatchEvent(
      new CustomEvent("valueInput", { detail: { valueInput } })
    );
  })


}

export function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      clickedData: event.detail.valueClicked,
    },
  });
}
