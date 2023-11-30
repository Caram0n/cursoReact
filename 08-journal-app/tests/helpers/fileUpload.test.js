import { v2 as cloudinary} from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"

cloudinary.config({
    cloud_name: 'dcm6zmx7t',
    api_key: '753197343819515',
    api_secret: 'XdhrSqQFlOaZLyPDW7i9Ht84dTs',
    secure: true

})

describe('Pruebas en fileUpload', () => { 
    
    test('debe subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'

        const resp = await fetch(imageUrl)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)

        expect(typeof url).toBe('string')


        const segments = url.split('/')
        const imageId = segments[segments.length -1].replace('.png','')
        
        const cloudResp = await cloudinary.api.delete_resources(['journal-app/' + imageId],{
            resource_type: 'image'
        })
        
     })

     test('debe retornar null', async() => { 
        const file = new File([], 'foto.jpg')

        const url = await fileUpload(file)

        expect(url).toBe(null)

      })
 })