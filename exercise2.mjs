/**
 * Exercise 2 : Using Objects and Arrow Functions
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise2.mjs
 */

const albumData = {
  name: "Thriller",
  artist: "Michael Jackson",
  releaseYear: 1982,
  tracks: [
    "Wanna Be Startin' Somethin'",
    "Baby Be Mine",
    "The Girl Is Mine",
    "Thriller",
    "Beat It",
  ],
};

function formatAlbum (album, showtracks){
 
 let info = `The album ${album.name} by ${album.artist}, released in ${album.releaseYear} contains ${album.tracks.length} tracks ` ;
   if (showtracks) 
    { info = info + "including the ShowTracks: " + album.tracks.join(",");
      
    }
   return info;
};
let music=formatAlbum(albumData,true);

console.log(music);