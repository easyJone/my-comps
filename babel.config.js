module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: false
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: '@solazzo/basic',
        style: true
      },
      '@solazzo/basic'
    ]
    // [
    //   'component',
    //   {
    //     libraryName: '@solazzo/scroll',
    //     style: true
    //   },
    //   '@solazzo/scroll'
    // ]
  ]
}
