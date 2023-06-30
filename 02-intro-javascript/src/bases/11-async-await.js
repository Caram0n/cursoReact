
const getImagen = async () => {

    try {
        const apiKey = '6BT4xrig5CWrKzxSlPi0YW3SzZVWO4Gj'
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json()
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    } catch (error) {
        console.log(error)
    }

}

getImagen()


