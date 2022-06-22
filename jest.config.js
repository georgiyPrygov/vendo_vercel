module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/components"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
    '\\.(css|scss)$': '<rootDir>/.jest/identity-obj-proxy-esm.js',
  },
};
