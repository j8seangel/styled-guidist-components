module.exports = {
  showCode: true,
  defaultExample: true,
  sections: [
    {
      name: 'Introduction',
      content: './docs/introduction.md'
    },
    {
      name: 'Components',
      content: './docs/components.md',
      components: './src/app/components/**/*.jsx',
    }
  ]
}
