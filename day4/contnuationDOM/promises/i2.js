// const re=fetch();
// re.then().catch();

fetch().then((resp)=>{
    resp.json().then((data)=>{
        console.log(data);
    }).catch(0)
}).catch();

fetch().then((resp)=>{
    return  resp.json();
}).catch().then((data)=>{
    console.log(data);
}).catch();
