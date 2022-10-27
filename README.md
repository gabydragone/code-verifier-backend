# code-verifier-backend
Node Express project Backend


Dependencias instaladas:
    "@types/express": "^4.17.14",
    "@types/jest": "^29.2.0",
    "@types/node": "^18.11.6",
    "@typescript-eslint/eslint-plugin": "^5.41.0",
    "concurrently": "^7.5.0",
    "eslint": "^8.26.0",
    "eslint-config-standard-with-typescript": "^23.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.3.0",
    "eslint-plugin-promise": "^6.1.1",
    "jest": "^29.2.2",
    "nodemon": "^2.0.20",
    "serve": "^14.0.1",
    "supertest": "^6.3.1",
    "ts-jest": "^29.0.3",
    "ts-node": "^10.9.1",
    "typescript": "^4.8.4",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-node-externals": "^3.0.0",
    "webpack-shell-plugin": "^0.5.0"

Los Scripts realizados son:
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
    "start:local": "npx nodemon index.js",
    "test": "jest",
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"


Variables en el .env:
    const PORT = 8000

