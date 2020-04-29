const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('File could not found!😢');
      resolve(data);
    });
  });
};


const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not find file!😢');
      resolve('success');
    });
  });
};

//Simple Code with async function 👌

const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Bread : ${data}`);
    const res1 =  superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
   const all = await Promise.all([res1,res2,res3]);
   const imgs = all.map(el=>el.body.message)
    console.log(imgs);
    await writeFilePromise('dog-img .txt', imgs.join('\n'));
    console.log('Random Dog image save to the file.🙂');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2. Ready.👍';
};

(async () => {
  try {
    console.log('1.Will get dog picture.');
    const x = await getDogPic();
    console.log(x);
    console.log('3.Done getting dog pictures.');
  } catch (err) {
    console.log('ERROR 🙄');
  }
})();

/*
TODO: less easier code 😢
console.log('1.Will get dog picture.');
getDogPic()
  .then((x) => {
    console.log(x);
    console.log('3.Done getting dog pictures.');
  })
  .catch((err) => {
    console.log('ERROR 🙄');
  });
*/

/*
TODO: Without async function

// readFilePromise(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Bread : ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePromise('dog-img.txt', res.body.message);

//     /*TODO:  Code are too log  in this process.🙂
    
//     // fs.writeFile('dog-img.txt', res.body.message, (err) => {
//     //   if (err) return console.log(err.message);
//     //   console.log('Random Dog image save to the file');
//     // });
    
//     */
//   })
//   .then(() => {
//     console.log('Random Dog image save to the file');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   }); */

/*
TODO: Without Promise  and less error handle.🙂

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
// console.log(`Bread : ${data}`);

// superagent
//   .get(`https://dog.ceo/api/breed/${data}/images/random`)
//   .then((res) => {
//     console.log(res.body.message);
//     fs.writeFile('dog-img.txt', res.body.message, (err) => {
//       if (err) return console.log(err.message);
//       console.log('Random Dog image save to the file');
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
// });
//});

*/