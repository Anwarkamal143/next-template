module.exports = {
  "stories": [
    "../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs":['../public'],
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}