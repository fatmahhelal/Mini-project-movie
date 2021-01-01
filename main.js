/*<div class="card">
  <p id="name1">1</p>
  <img id="image_1" src="" alt="">
</div>*/

var list = document.getElementsByClassName("container")
const getShows = () => {
    var i = 1
    for (i; i < 20; i++) {
        axios
            .get(`http://api.tvmaze.com/shows/${i}`)
            .then((response) => {
                console.log(response);
                const name_1 = response.data.name;
                const image1 = response.data.image.medium;
                const link_1 = response.data.url

                var show = document.createElement("div");
                show.classList.add("card");

                var title = document.createElement("p");
                var imgs = document.createElement("img");
                var brLine = document.createElement("br");
                var result = name_1.link(link_1);

                title.innerHTML = result;
                imgs.src = image1

                show.appendChild(title)
                show.appendChild(brLine)
                show.appendChild(imgs)


                // $(`imgs`).append($("<a>", {
                //     href: link_1,
                //     html: $("<img>", { src: image1 })
                // }));
                // $(`.card`).append(("<br />"))
                // $(`.card`).append(name_1)

                // console.log(name_1);
                // console.log(image1);
                document.body.appendChild(show);

            })
            .catch((err) => {
                console.log("ERR: ", err);
            });


    }
}

getShows();
// const SerchShows = () => {
//     var Serchsh = document.getElementById("Searchtext")

//     var showname = Serchsh.value;
//     console.log(showname)
//     axios

//         .get(`http://api.tvmaze.com/singlesearch/shows?q=${showname}`)
//         .then((response) => {
//             console.log(response);
//             const name_1 = response.data.name;
//             const image1 = response.data.image.medium;
//             const link_1 = response.data.url


//             $(`.card`).append($("<a>", {
//                 href: link_1,
//                 html: $("<img>", { src: image1 })
//             }));
//             $(`.card`).append(("<br />"))
//             $(`.card`).append(name_1)

//             console.log(name_1);
//             console.log(image1);

//         })
//         .catch((err) => {
//             console.log("ERR: ", err);
//         });
// }

// const btn_step_1 = $('#search1');

// btn_step_1.on('click', SerchShows);