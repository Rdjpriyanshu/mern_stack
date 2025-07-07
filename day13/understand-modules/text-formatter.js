const getCapitaliseText=(text)=>{
    console.log("input  text: ",text);
    // const res=text.toUpperCase();
    const word=text.trim().split(" ");
    const resArr=word.map((elem)=>{
        const firstChar=elem[0]?.toUpperCase();
        const remainingWord = elem?.slice(1)?.toLowerCase();
        return `${firstChar}${remainingWord}`;
    })
    return resArr.join(" ");
}

// const getCapitaliseText = (txt) => {
//   const words = txt.trim().split(" "); // splits input into words
//   const resArr = words.map((elem) => {
//     const firstChar = elem[0]?.toUpperCase(); // first character uppercase
//     const remainingWord = elem?.slice(1)?.toLowerCase(); // rest of word lowercase
//     return `${firstChar}${remainingWord}`; // joins both
//   });
//   return resArr.join(" "); // combines all words
// };
const res=getCapitaliseText("i am a good boy");
console.log(res);
