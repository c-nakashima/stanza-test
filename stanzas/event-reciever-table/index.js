export default async function eventRecieverTable(stanza, params) {
  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      greeting: `Hello, ${params['say-to']}!`
    }
  });
}
