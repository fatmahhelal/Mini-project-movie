/*<div class="card">
  <p id="name1">1</p>
  <img id="image_1" src="" alt="">
</div>*/

//const getShows = () => {
    var i=1
    

      axios

    .get('http://api.tvmaze.com/shows/1')
    .then((response) => {
        console.log(response);
        const name_1 = response.data.name;
        const image1 = response.data.image.medium;
        const link_1=response.data.url
        
        $(`#name${i}`).text(name_1);
        $(`#image_${i}`).attr("src", image1);
        $(`#link${i}`).attr("href",link_1)
        console.log(name_1);
        console.log(image1);
      
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });

    axios
    .get('http://api.tvmaze.com/shows/2')
    .then((response) => {
        console.log(response);
        const name_2 = response.data.name;
        const image2 = response.data.image.medium;
        $(`#name2`).text(name_2);
        $(`#image_2`).attr("src", image2);
       
      
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
    
//};


//////