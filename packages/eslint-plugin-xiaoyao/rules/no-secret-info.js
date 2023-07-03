const RULE_NAME = 'no-secret-info'

const DEFAULT_DANGEROUS_KEYS = ['secret', 'token', 'password']

module.exports = {
  meta: {
    type: 'problem',
    fixable: null,
    messages: {
      noSecretInfo:
        'Detect that the "{{secret}}" might be a secret token, Please check!',
    },
  },

  create(context) {
    const ruleOptions = context.options[0] || {}
    let { dangerousKeys = [], autoMerge = true } = ruleOptions
    if (dangerousKeys.length === 0) {
      dangerousKeys = DEFAULT_DANGEROUS_KEYS
    } else if (autoMerge) {
      dangerousKeys = [...new Set(...DEFAULT_DANGEROUS_KEYS, ...dangerousKeys)]
    }
    const reg = new RegExp(dangerousKeys.join('|'))

    return {
      Literal: function handleRequires(node) {
        // console.log('%c Line:26 🍌 node', 'color:#2eafb0', node)
        console.log('%c Line:28 🥖 node.parent', 'color:#7f2b82', node.parent)
        if (
          node.value &&
          node.parent &&
          ((node.parent.type === 'VariableDeclarator' &&
            node.parent.id &&
            node.parent.id.name &&
            reg.test(node.parent.id.name.toLocaleLowerCase())) ||
            (node.parent.type === 'Property' &&
              node.parent.key &&
              node.parent.key.name &&
              reg.test(node.parent.key.name.toLocaleLowerCase())))
        ) {
          context.report({
            node,
            messageId: 'noSecretInfo',
            data: {
              secret: node.value,
            },
          })
        }
      },
    }
  },
}
