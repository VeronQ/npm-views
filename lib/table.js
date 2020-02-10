const {
  createStream,
  getBorderCharacters,
} = require('table')

module.exports.default = () => {
  const config = {
    columnDefault: {
      width: 40,
    },
    columnCount: 3,
    columns: {
      0: {
        width: 20,
      },
      1: {
        width: 10,
      },
      2: {
        wrapWord: true,
      },
    },
    border: getBorderCharacters('norc'),
  }

  return createStream(config)
}
