# 💾 ConfigPath

Welcome to **ConfigPath**, your go-to library for managing configuration files in Node.js applications with ease and flexibility! Whether you're working on a development project or gearing up for production, ConfigPath helps you handle environment-specific settings like a boss. 🌟

## Features

- 🕵️‍♂️ **Automatic Environment Detection**: Automatically selects the right configuration based on your environment or the hostname of your machine.
- 🛠️ **Development & Production Support**: Supports separate configuration files for development (`*.dev.js`) and production (`*.js`).
- 📋 **Easy Defaults**: Integrates seamlessly with default settings to ensure your app always has the necessary configurations.

## Getting Started

### Installation

Install ConfigPath with npm:

```bash
npm install config-path
```

### Usage

1. **Set Up Your Configuration Files:**

   Place your configuration files in a designated directory. Name them according to your environment or hostname, for example, `myapp.dev.js` for development and `myapp.js` for production.

2. **Default Configuration:**

   Create a `default.js` file in your configuration directory with common settings that apply to all environments.

3. **Initialize ConfigPath:**

   ```javascript
   const ConfigPath = require('config-path'); // Replace with your actual library name
   const configPath = new ConfigPath('./config');
   const settings = configPath.get();
   ```

   Now, `settings` will contain a merged object of your default settings and the environment-specific settings.

### Example Configuration File (`myapp.dev.js`)

```javascript
module.exports = {
    db: {
        host: 'localhost',
        user: 'myuser',
        password: 'mypassword'
    },
    api: {
        key: 'development-api-key'
    }
};
```

## Documentation

...

## 🤝 Contributing

Love ConfigPath and want to contribute? Awesome! 🎉 Feel free to open an issue or submit a pull request.

## 📄 License
The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.