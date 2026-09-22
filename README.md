# Node.js File Processor

A practical **Node.js file processing application** built using Node.js built-in modules.

The project focuses on working with files, directories, streams, buffers, cryptographic operations, and operating system functionality without relying heavily on external packages.

## 🎯 Project Goals

The main goals of this project are to:

* Practice Node.js core modules
* Work with synchronous and asynchronous file operations
* Process files efficiently using streams
* Work with buffers and binary data
* Perform cryptographic operations
* Manipulate file and directory paths
* Access operating system information
* Understand how Node.js handles file processing internally

## 🛠️ Technologies

* **Node.js**
* **JavaScript**
* **Node.js Core Modules**
* **npm**
* **Git & GitHub**

### Core Modules

The project uses modules such as:

* `fs`
* `fs/promises`
* `path`
* `crypto`
* `os`
* `http`
* `stream`

## 📂 Project Structure

```text
nodejs-file-processor/
│
├── assets/
│   └── ...
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/MIhajloS07/nodejs-file-processor.git
```

Navigate to the project directory:

```bash
cd nodejs-file-processor
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node server.js
```

## 🔍 What the Project Demonstrates

### File System Operations

Using Node.js `fs` and `fs/promises` to:

* Read files
* Write files
* Create and manage files
* Work with asynchronous file operations

### Path Handling

Using the `path` module to work with:

* File extensions
* File names
* Directory paths
* Absolute and relative paths

### Streams

Using streams to process data in **chunks** instead of loading an entire file into memory at once.

This makes streams useful when working with large files.

### Buffers

Using `Buffer` to work with binary data and understand how Node.js handles data at a lower level.

### Cryptography

Using Node.js `crypto` functionality for operations such as:

* Hashing
* HMAC
* Encryption
* Decryption

### Operating System Information

Using the `os` module to retrieve information about the environment in which the application is running.

## 📚 Learning Focus

This project is part of my practical exploration of the Node.js runtime and its built-in APIs.

Instead of relying entirely on external npm packages, the project intentionally uses **Node.js core modules** to understand the functionality provided directly by the runtime.

## 🔄 Project Status

🚧 **In development**

The project is continuously being expanded with additional file-processing functionality and deeper exploration of Node.js APIs.

## 👨‍💻 Author

**Mihajlo Stoiljković**

## License
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
<br>
This project is licensed under the MIT License.
