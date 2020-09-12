module.exports = {
  "page_objects_path": "page-objects",
  "output_folder" : "reports",
  "webdriver": {
    "start_process": true,
    "server_path": require('chromedriver').path,
    "port": 9515
  },

  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    }
  }
}