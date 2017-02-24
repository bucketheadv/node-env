let DEFAULT_ENV = 'development'
let methodMissing = function(obj, callback) {
  return new Proxy(obj, {
    get: function(target, key, receiver) {
      let prop = target[key]
      if (!prop) {
        if (key.toLowerCase().startsWith('is')) {
          return function() {
            return callback.call(target, key, arguments)
          }
        }
      }
      return Reflect.get(target, key, receiver)
    }
  })
}

let obj = methodMissing({}, function(key, args) {
  let name = key.trim().slice(2)
  let env = this.getNodeEnv()
  return name.toLowerCase() === env
})

obj.setDefaultEnv = function(env) {
  DEFAULT_ENV = env
}

obj.getNodeEnv = function() {
  return process.env.NODE_ENV || DEFAULT_ENV
}

module.exports = obj