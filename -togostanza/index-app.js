import { d as defineComponent, s as script$1, o as openBlock, c as createBlock, r as resolveComponent, w as withCtx, F as Fragment, a as renderList, b as createVNode, t as toDisplayString, e as createCommentVNode, f as createApp } from './Layout-264fbfca.js';

var script = defineComponent({
  components: {
    Layout: script$1
  },

  props: ['allMetadata'],

  setup(props) {
    return props;
  }
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", { class: "display-4" }, "List of Stanzas", -1 /* HOISTED */);
const _hoisted_2 = {
  key: 0,
  class: "list-group mt-3"
};
const _hoisted_3 = {
  key: 0,
  class: "small text-muted text-truncate mt-1 mb-0"
};
const _hoisted_4 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");

  return (openBlock(), createBlock(_component_Layout, null, {
    default: withCtx(() => [
      _hoisted_1,
      (_ctx.allMetadata.length > 0)
        ? (openBlock(), createBlock("div", _hoisted_2, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.allMetadata, (metadata) => {
              return (openBlock(), createBlock("a", {
                key: metadata['@id'],
                href: `./${metadata['@id']}.html`,
                class: "list-group-item list-group-item-action py-3"
              }, [
                createVNode("div", null, toDisplayString(metadata['stanza:label']), 1 /* TEXT */),
                (metadata['stanza:definition'])
                  ? (openBlock(), createBlock("p", _hoisted_3, toDisplayString(metadata['stanza:definition']), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ], 8 /* PROPS */, ["href"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (openBlock(), createBlock("p", _hoisted_4, "No stanzas defined."))
    ]),
    _: 1 /* STABLE */
  }))
}

script.render = render;
script.__file = "node_modules/togostanza/src/components/Index.vue";

var allMetadata = [{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"bar","stanza:label":"Bar","stanza:definition":"Receive events via handler","stanza:type":"Stanza","stanza:display":"Text","stanza:provider":"","stanza:license":"MIT","stanza:author":"Yoji Shidara","stanza:address":"dara@shidara.net","stanza:contributor":[],"stanza:created":"2021-03-08","stanza:updated":"2021-03-08","stanza:parameter":[{"stanza:key":"say-to","stanza:type":"string","stanza:example":"world","stanza:description":"who to say hello to","stanza:required":false}],"stanza:about-link-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[{"stanza:key":"valueChanged","stanza:description":"value changed event"}],"stanza:outgoingEvent":[]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"baz","stanza:label":"Baz","stanza:definition":"Receive events via attribute","stanza:type":"Stanza","stanza:display":"Text","stanza:provider":"","stanza:license":"MIT","stanza:author":"","stanza:address":"","stanza:contributor":[],"stanza:created":"2021-05-24","stanza:updated":"2021-05-24","stanza:parameter":[{"stanza:key":"say-to","stanza:type":"string","stanza:example":"world","stanza:description":"who to say hello to","stanza:required":false}],"stanza:about-link-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"event-table","stanza:label":"Event table","stanza:definition":"Event table stanza","stanza:type":"Stanza","stanza:display":"Table","stanza:provider":"TogoStanza","stanza:license":"MIT","stanza:author":"","stanza:address":"","stanza:contributor":[],"stanza:created":"2021-05-24","stanza:updated":"2021-05-24","stanza:parameter":[{"stanza:key":"say-to","stanza:type":"string","stanza:example":"world","stanza:description":"who to say hello to","stanza:required":false}],"stanza:menu-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"event-tree","stanza:label":"Event tree","stanza:definition":"Event tree stanza","stanza:type":"Stanza","stanza:display":"Tree","stanza:provider":"TogoStanza","stanza:license":"MIT","stanza:author":"","stanza:address":"","stanza:contributor":[],"stanza:created":"2021-05-24","stanza:updated":"2021-05-24","stanza:parameter":[{"stanza:key":"say-to","stanza:type":"string","stanza:example":"world","stanza:description":"who to say hello to","stanza:required":false}],"stanza:menu-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[{"stanza:key":"valueChanged","stanza:description":"event used to notify a change of the value. payload is something like {value: 42}"}]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"foo","stanza:label":"Foo","stanza:definition":"Input form to emit events","stanza:type":"Stanza","stanza:display":"Text","stanza:provider":"","stanza:license":"MIT","stanza:author":"","stanza:address":"","stanza:contributor":[],"stanza:created":"2021-05-24","stanza:updated":"2021-05-24","stanza:parameter":[],"stanza:about-link-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[{"stanza:key":"valueChanged","stanza:description":"value changed"}]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"quux","stanza:label":"Quux","stanza:definition":"","stanza:type":"Stanza","stanza:display":"Text","stanza:provider":"","stanza:license":"MIT","stanza:author":"","stanza:address":"","stanza:contributor":[],"stanza:created":"2021-05-24","stanza:updated":"2021-05-24","stanza:parameter":[{"stanza:key":"data-url","stanza:type":"string","stanza:example":"https://api.github.com/orgs/togostanza/repos","stanza:description":"URL to fetch from","stanza:required":true}],"stanza:about-link-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"qux","stanza:label":"Qux","stanza:definition":"","stanza:type":"Stanza","stanza:display":"Text","stanza:provider":"","stanza:license":"MIT","stanza:author":"","stanza:address":"","stanza:contributor":[],"stanza:created":"2021-05-24","stanza:updated":"2021-05-24","stanza:parameter":[{"stanza:key":"data-url","stanza:type":"string","stanza:example":"https://api.github.com/orgs/togostanza/repos","stanza:description":"URL to fetch from","stanza:required":true}],"stanza:about-link-placement":"bottom-right","stanza:style":[{"stanza:key":"--greeting-color","stanza:type":"color","stanza:default":"#eb7900","stanza:description":"text color of greeting"},{"stanza:key":"--greeting-align","stanza:type":"single-choice","stanza:choice":["left","center","right"],"stanza:default":"center","stanza:description":"text align of greeting"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[]}];

createApp(script, {allMetadata}).mount('body');
//# sourceMappingURL=index-app.js.map
