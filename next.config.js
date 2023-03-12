const useSubDirectory = process.env.USE_SUB_DIRECTORY === 'true'

// To host on ucsd.moe and animefest.ucsd.edu:
// assetPrefix: useSubDirectory ? '/club-next-site/' : '',
// basePath: useSubDirectory ? '/club-next-site' : '',

// To host on animeclub.ucsd.edu:
// assetPrefix: useSubDirectory ? '/~animeclub/' : '',
// basePath: useSubDirectory ? '/~animeclub' : '',

module.exports = {
  reactStrictMode: true,
  assetPrefix: useSubDirectory ? '/club-next-site/' : '',
  basePath: useSubDirectory ? '/club-next-site' : '',
}
