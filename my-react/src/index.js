/*
const element = (
    <div id="foo">
      <a>bar</a>
      <b />
    </div>
  )
  const container = document.getElementById("root")
  ReactDOM.render(element, container)

  */

const container = document.getElementById('root');

// 1. createElement
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}

// 2. render

// React.render(element,container)
