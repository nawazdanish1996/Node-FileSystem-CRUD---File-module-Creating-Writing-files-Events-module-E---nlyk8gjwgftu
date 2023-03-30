const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent);
}
myFileWriter('file.txt', 'I am Nawaz Danish');

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName);
	return data.toString();
}
myFileReader('file.txt').then(data => console.log(data));


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return await fs.appendFile(fileName, fileContent);
};
myFileUpdater('file.txt', 'file updated');

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
