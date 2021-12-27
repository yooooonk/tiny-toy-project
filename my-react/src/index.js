function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function render(element, container) {
  const dom =
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);
  const isProperty = (key) => key !== 'children';
  console.log(element.props);
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}

const Hiact = {
  createElement,
  render
};

/** jsx Didact.createElement */
// const element = (
//   <div style="background: salmon">
//     <h1>Hello World</h1>
//     <h2 style="text-align:right">from Didact</h2>
//   </div>
// );

const element = Hiact.createElement(
  'div',
  { style: 'background:salmon' },
  Hiact.createElement('h1', null, 'Hello World'),
  Hiact.createElement('h2', { style: 'text-align:right' }, 'from gisele')
);

const container = document.getElementById('root');
Hiact.render(element, container);
