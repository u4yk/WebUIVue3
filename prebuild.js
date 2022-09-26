const { readdir, writeFile } = require('fs').promises;

const getFileList = async (dirName) => {
    let files = [];
    const items = await readdir(dirName, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            files = [
                ...files,
                ...(await getFileList(`${dirName}/${item.name}`)),
            ];
        } else if (item.name.match(/\.vue$/ig)) {
            // console.log(item);
            files.push(`${dirName.replace('src/', '../')}/${item.name}`);
        }
    }

    return files;
};

getFileList('src/components').then((files) => {
    writeFile('./src/plugins/componentList.json', JSON.stringify(files, null, '\t'));
});