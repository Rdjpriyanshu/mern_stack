const renderTextSuggestion=(data)=>{
    console.log(data);
    const { results } = data;
    const rootElem = document.getElementById("search-suggestion");
    results.forEach((txt)=>{
        const newPara=document.createElement('p');
        newPara.innerText=txt;
        rootElem.appendChild(newPara);

    });
};



const handleSearchSuggestion=(e)=>{
    const searchText=e.target.value;
    const request = fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${searchText}=en&gl=US`,
        {
    method:"GET",
    headers: {
        'x-rapidapi-key': '27c8d748e7msh549ffd3ea9a8ec2p106c05jsn1ef61628b898',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    },
    
});

request.then((response)=>{
    const pr2=response.json();
    pr2.then((data)=>{
        renderTextSuggestion(data);
    });
}).catch((err)=>{
    alert(`Error in search autocomplete: ${err.method}`)
    console.log(`Error in search autocomplete: ${err.message}`);
})
};

let timeout=null;
const handleSmartsuggestion=(e)=>{
    clearTimeout(timeout);

    timeout=setTimeout(()=>{
        timeout=
        handleSearchSuggestion(e);
    },1000);
};

