/*<div class="card">
  <p id="name1">1</p>
  <img id="image_1" src="" alt="">
</div>*/

let aar1=[];
let name_1
let image1
let link_1

const getShows = () => {
    var i=1
    
    
for(i;i<20;i++){
      axios

    .get(`http://api.tvmaze.com/shows/${i}`)
    .then((response) => {
        console.log(response);
         name_1 = response.data.name;
         image1 = response.data.image.medium;
         link_1=response.data.url
        var obj={name:name_1
            ,image:image1,
            link:link_1}
            aar1.push(obj);
        //$(`#name${i}`).text(name_1);
        //$(`#image_${i}`).attr("src", image1);
        //$(`#link${i}`).attr("href",link_1)
        console.log(name_1);
        console.log(image1);
      
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
}}
var obj={name:name_1
    ,image:image1,
    link:link_1}
    aar1.push(obj);
getShows();
console.log("the array"+aar1)
for(i=0;i<aar1.length;i++){
$(`.card`).append($("<a>", {
    href: arr1[i].link,
    html: $("<img>", { src: image1 })
}));$(`.card`).append(("<br />"))
$(`.card`).append(name_1)}

  
    const SerchShows = () => {
        var Serchsh=document.getElementById("#Searchtext")
        
    var showname=Serchsh.Value;
          axios
    
        .get(`http://api.tvmaze.com/serch/shows?q=${showname}`)
        .then((response) => {
            console.log(response);
            const name_1 = response.data.name;
            const image1 = response.data.image.medium;
            const link_1=response.data.url
            $(`.card`).append($("<a>", {
                href: link_1,
                html: $("<img>", { src: image1 })
            }));$(`.card`).append(("<br />"))
            $(`.card`).append(name_1)
            //$(`#name${i}`).text(name_1);
            //$(`#image_${i}`).attr("src", image1);
            //$(`#link${i}`).attr("href",link_1)
            console.log(name_1);
            console.log(image1);
          
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    }
    $(search1).on("click",SerchShows)