import {Stack,ImageList,ImageListItem} from '@mui/material'
import Image from 'next/image';
export const MuiImageList = () =>{
    return (
        <Stack spacing={4}>
            <ImageList sx={{ width: 900, height: 750}} 
            cols={3} 
            rowHeight={344}
            >
            {
                Itemdata.map(item =>(
                    <ImageListItem key= {item.img}>
                        <Image src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
                        alt={item.title} 
                        loading= 'lazy' 
                        />
                    </ImageListItem>
                ))
            }

            </ImageList>
        </Stack>
    )
}

const Itemdata =[
    {
        img: 'https://www.akal.com/media/akal/images/thumbs/cover-35086-236x336.jpg',
        title: 'Una vida en el cosmos',
        
    },
{
    img: 'https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0JAMQ.jpg',
    title: 'Contacto',
},
{
    img: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG01IWS.jpg',
    title: 'Un punto azul palido',
},
{
    img: 'https://http2.mlstatic.com/D_NQ_NP_991110-MLM45486463695_042021-O.jpg',
    title: 'El mundo y sus demonios',
},
{
    img: 'https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0JED4.jpg',
    title: 'La diversidad de la ciencia',
},
{
    img: 'https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0CR9C.jpg',
    title: 'El cerebro de broca',
},
{
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/e0/f2/e0f299b5184dddfb41d39724f75349b8.jpg',
    title: 'Cosmos',
},
{
    img: 'https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0COY4.jpg',
    title: 'La diversidad de la ciencia',
},
{
    img: 'https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0CU9H.jpg',
    title: 'Los dragones del eden',
},
]