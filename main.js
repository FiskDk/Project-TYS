const url="https://api.furry.bot/v2/furry/nsfw/yiff/gay"
$.getJSON(url, function(result){
    console.log(result)
    console.log(result.images[0].url)
    var div = document.createElement("img")
    div.id="img"
    div.src=result.images[0].url
    document.body.appendChild(div)
})

//Save to my stash button

//Next button

//Fullscreen

//My Stash button