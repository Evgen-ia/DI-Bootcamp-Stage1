const { readFile, writeFile } = require('./fileManager.cjs');

async function processFiles() {
  try {
    const content = await readFile('helloWorld.txt');
    await writeFile('byeWorld.txt', content);
    console.log('File writing successful.');
  } catch (error) {
    console.error('Error:', error);
  }
}

processFiles();
