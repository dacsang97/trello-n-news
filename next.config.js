const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')

const copyFile = promisify(fs.copyFile)
const mkdir = promisify(fs.mkdir)

module.exports = {
  async exportPathMap(defaultPathMap, { dev, dir, outDir }) {
    if (dev) {
      return defaultPathMap
    }
    // This will copy manifest.json from your project root into the out directory
    await copyFile(join(dir, 'template_crx/manifest.json'), join(outDir, 'manifest.json'))

    // Copy icon
    const icons = ['16', '32', '48', '128']
    const iconsPath = 'icons'
    await mkdir(join(outDir, `${iconsPath}`))
    await Promise.all(
      icons.map(icon => `icon-${icon}.png`).map(async icon => {
        await copyFile(
          join(dir, `template_crx/${iconsPath}/${icon}`),
          join(outDir, `${iconsPath}/${icon}`),
        )
        return icon
      }),
    )
    return defaultPathMap
  },
}
