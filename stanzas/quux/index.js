export default async function quux(stanza, params) {
  const dataUrl = params["data-url"];
  if (!dataUrl) {
    return;
  }
  const receivedData = await fetch(dataUrl).then((res) => res.json());
  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      dataUrl,
      receivedData
    }
  });
}