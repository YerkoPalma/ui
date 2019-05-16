const observer = new window.MutationObserver(onchange)

const isConnected = 'isConnected' in window.Node.prototype
  ? node => node.isConnected
  : node => document.documentElement.contains(node)

let nodesGroup = []
let fn = () => {}
let loaded = false

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
})

export default function onload (nodes, onload) {
  if (isIterable(nodes)) {
    if (typeof onload === 'function') {
      fn = onload
    }
    nodesGroup = Array.from(nodes)
  }
}

function isIterable (obj) {
  if (!obj) return false
  return typeof obj[Symbol.iterator] === 'function'
}

function onchange (mutations) {
  if (nodesGroup.length === 0) return
  if (!loaded && nodesGroup.every(node => isConnected(node))) {
    loaded = true
    fn()
  } else if (loaded && nodesGroup.some(node => !isConnected(node))) {
    loaded = false
  }
}
