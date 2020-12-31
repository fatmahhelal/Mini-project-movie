const getShows = ()=>{
    axios
    .get("http://api.tvmaze.com/shows")
    .then((response) => {
      console.log(response)
      const name_1 = response.data.results[0].name

      const image1 = response.data.results[0].image

      const name1 = $("#name1").text(name_1)
      const image_1 = $("#image_1").attr("src",image1)


    })
    .catch((err) => {
      console.log('ERR: ', err);
    });

}