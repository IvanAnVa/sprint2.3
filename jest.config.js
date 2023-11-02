module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
      '^.+\\.(ts)$': 'ts-jest',
    },
    testPathIgnorePatterns: [
        "/node_modules",
        "/dist/"
    ]
  };
  
  