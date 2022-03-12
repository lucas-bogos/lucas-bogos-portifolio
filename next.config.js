const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn.pixabay.com"
    ]
  }
}
