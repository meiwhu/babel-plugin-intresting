"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intresting;

function intresting() {
  const visitor = {
    // 反转字符字面量
    StringLiteral(path) {
      const value = path.node.value;
      path.node.value = value.split('').reverse().join('');
    }

  };
  return {
    visitor
  };
}