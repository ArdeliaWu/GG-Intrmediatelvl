function myFunction() {
    alert("Please fill the title");
}

axios.get("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
    .then(response => {
        console.log("Track title: " + response.data.name);
        console.log("Artist : " + response.data.artists[0].name);
        console.log("Album : " + response.data.album.name);

        document.getElementById("trackTitle").innerHTML = "Track Title: " + response.data.name;
        document.getElementById("artistName").innerHTML = "Artist: " + response.data.artists[0].name;
        document.getElementById("albumName").innerHTML = "Album : " + response.data.album.name;


    })

    .catch(error => console.log("error"));