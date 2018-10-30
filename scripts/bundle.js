const fs = require('fs-extra')
const path = require('path')

const bundle = async () => {
  const srcDir = path.resolve(process.cwd(), 'out/_next')
  const destDir = path.resolve(process.cwd(), 'out/next')
  const files = ['index.html']
  try {
    const existSrcDir = await fs.exists(srcDir)
    await fs.remove(path.resolve(process.cwd(), 'out/index'))
    if (existSrcDir) {
      await fs.move(srcDir, destDir)
    }
    await Promise.all(
      files.map(async file => {
        const filePath = path.resolve(process.cwd(), 'out', file)
        const buffer = await fs.readFile(filePath)
        const fileContent = buffer.toString()
        const result = fileContent.replace(/\/_next\//g, '/next/')
        await fs.writeFile(filePath, result, { encoding: 'utf-8' })
        return file
      }),
    )
  } catch (err) {
    console.error(err)
  }
}

bundle()
  .then(() => {
    console.log('DONE')
  })
  .catch(e => {
    console.log(e)
  })
