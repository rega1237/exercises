const inorderTraversal = (root) => {
  const order = []
  traversalOrder(root, order)
  return order
}

const traversalOrder = (node, order) => {
  if(node === null) {
    return
  }

  traversalOrder(node.left, order)

  order.push(node.val)

  traversalOrder(node.right, order)
}

console.log(inorderTraversal([1, null, 2, 3]))