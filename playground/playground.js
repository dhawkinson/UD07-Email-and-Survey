'use strict';
//  write a function to retrieve a blob of json
//  make an ajax request! 'fetch'
//  

//  function fetchAlbums() {
//      fetch('https://rallycoding.herokuapp.com/api/music_albums') //..returns a promise
//          .then(res => res.json())    //  returns another promise
//          .then(json => console.log(json));   //  now we have the data
//  }

//  async / await
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}

fetchAlbums();