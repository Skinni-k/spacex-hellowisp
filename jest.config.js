module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      diagnostics: true,
    },
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/serviceWorker.ts",
    "!src/setupTests.ts",
    "!src/index.tsx",
  ],
  coveragePathIgnorePatterns: ["dummyData.ts"],
  resetMocks: false,
  // setupFiles: ["./config/__mocks__/domMock.js", "jest-localstorage-mock"],
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
  automock: false,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/config/__mocks__/styleMock.js",
    "\\.(png|jpg|jpeg|gif|ttf|eot|svg)$":
      "<rootDir>/config/__mocks__/fileMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["./config/jest/setupTests.ts"],
};
