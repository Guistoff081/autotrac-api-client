# Autotrac API client

This is a Node.js client for the Autotrac ASI API. It provides a simple and user-friendly interface to make HTTP requests to the API.

## Installation

To install the package, use npm:

```bash
npm install autotrac-api-client
```

## Usage

First, require the package in your project:

```javascript
const AutotracClient = require('autotrac-api-client');
```

Then, create an instance of the client and use it to interact with the API:

```javascript
const client = new AutotracClient({
    apiKey: 'your-api-key',
    clientKey: 'your-client-key',
});
```

Here is an example of how to use the client to get all vehicles:

```javascript

client.Vehicles.getAll()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
```

## Configuration

The client can be configured with the following options:

- `apiKey`: Your API key for authentication.
- `clientKey`: Your Autotrac clientKey.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
