const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      devIndicators: {
        autoPrerender: false,
      }
    }
  }

  return {
    /* config options for all phases except development here */
    devIndicators: {
      autoPrerender: true,
    }
  }
}