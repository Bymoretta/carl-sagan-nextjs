import {Stack,ImageList,ImageListItem} from '@mui/material';
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
                        <Image src={item.img} 
                        alt={item.title} layout='fill'
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
        img: '/millones.jpg',
        title: 'miles de millones',
        
    },
{
    img: '/Contacto.jpg',
    title: 'Contacto',
},
{
    img: '/azul.jpg',
    title: 'Un punto azul palido',
},
{
    img: '/mundo.jpg',
    title: 'El mundo y sus demonios',
},
{
    img: '/cosmos.gif',
    title: 'La diversidad de la ciencia',
},
{
    img: '/millones.jpg',
    title: 'El cerebro de broca',
},
{
    img: '/cosmos.jpg',
    title: 'Cosmos',
},
{
    img: '/diversidad.jpg',
    title: 'La diversidad de la ciencia',
},
{
    img: '/Dragones.jpg',
    title: 'Los dragones del eden',
},
]