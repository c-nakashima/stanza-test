export default async function foo(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {},
  });
  const input = stanza.root.querySelector("input");
  input.addEventListener("input", (ev) => {
    const value = ev.target.value;
    console.log("input", value);
    stanza.host.dispatchEvent(
      new CustomEvent("valueChanged", { detail: { value } })
    );
  });
}