function getData(targeturl, callback) {
    console.log('fired from data miner');

    
    fetch(targeturl)
        .then(res => res.json())
        .then(data => { 
            console.log(data);

            
            callback(data);
        })
    .catch(error => console.error(error)); 
}

export { getData }