import andyLuo from '@andyluo/eslint-config/index'

export default andyLuo({
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "max-statements-per-line": "off",
    "@typescript-eslint/brace-style": "off"
  }
})