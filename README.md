<p align="center">
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img width="300" src="https://github.com/user-attachments/assets/55a713dc-47bc-48e0-940d-86fbba42673a"></a>
</p>
<p align="center">
    <a href="https://github.com/1nv3n7or/bober.js/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license"></a>
</p>

# Bober CLI

Bober CLI is a command-line tool for generating files based on templates and source files. It leverages the `bober` library to process individual files or entire directories, with options to override existing files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Options](#options)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use Bober CLI, you need Node.js installed on your system. Follow these steps:

1. **Install globally** (recommended for CLI usage):

   ```bash
   npm install -g bober
   ```

2. **Install locally** (for project-specific usage):

   ```bash
   npm install bober
   ```

   If installed locally, you can run the CLI using `npx bober`.

## Usage

The Bober CLI is invoked using the `bober` command. It currently supports a single command, `generate`, which generates files based on a specified template and source file(s).

Run the following to see available commands and options:

```bash
bober --help
```

## Commands

### `generate <template>`

Generates files based on a specified template and source file(s).

- **Argument**: `<template>` (required) - The name of the template to use for code generation.
- **Description**: Processes a single file or all files in a directory to generate new files based on the provided template.

## Options

The `generate` command supports the following options:

- `-f, --file <string>`: Specifies the name of a single file to use for code generation.
- `-d, --directory <string>`: Specifies a directory to recursively process all files for code generation.
- `-o, --override`: Overrides existing files with newly generated ones. If not provided, existing files are preserved.
- `-h, --help`: Displays help information for the `generate` command.

**Note**: You must provide either `--file` or `--directory`. If neither is specified, the CLI will output an error message: "bober do not know what to do :(".

## Examples

1. **Generate a file from a single source file**:

   ```bash
   bober generate my-template --file src/input.js
   ```

   This uses `my-template` to generate output based on `src/input.js`.

2. **Generate files from a directory**:

   ```bash
   bober generate my-template --directory src
   ```

   This recursively processes all files in the `src` directory using `my-template`.

3. **Override existing files**:

   ```bash
   bober generate my-template --file src/input.js --override
   ```

   This generates output from `src/input.js` and overwrites any existing output files.

4. **View help**:
   ```bash
   bober generate --help
   ```
   Displays detailed help for the `generate` command.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
