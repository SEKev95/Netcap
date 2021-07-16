document.querySelector('.btn').addEventListener('click' , findBeer)

function findBeer(){
    // const name = document.querySelector('input').value
    
    const url = `https://api.punkapi.com/v2/beers`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        for(let i = 1; i < 9; i++){
            let name = data[i].name
            let photos = data[i].image_url
            let abv = data[i].abv
            let ibu = data[i].ibu
            let desc = data[i].description
            let pair = data[i].food_pairing
            let tips = data[i].brewers_tips
            document.querySelectorAll('.name'+i).forEach(el => el.innerText = name)
            document.querySelector('.img'+i).style.backgroundImage = `url(${photos})`
            document.querySelector('.abv'+i).innerText = abv
            document.querySelector('.ibu'+i).innerText = ibu
            document.querySelector('.desc'+i).innerText = desc
            document.querySelector('.pair'+i).innerText = pair
            document.querySelector('.tips'+i).innerText = tips
       
        }
       
        
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}