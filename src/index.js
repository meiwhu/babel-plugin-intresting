export default function intresting() {
  const visitor = {
    // 反转字符字面量
    StringLiteral(path) {
      const { value } = path.node
      path.node.value = value.split('').reverse().join('')
    }
  }

  return { visitor }
}