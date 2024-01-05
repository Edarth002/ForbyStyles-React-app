module.exports = {
    // ... other configurations
    resolve: {
      fallback: {
        "querystring": require.resolve("querystring-es3")
      }
    }
  };
  