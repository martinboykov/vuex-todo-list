module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuex-todo-list/'
    : '/',
    outputDir: 'docs',
}
