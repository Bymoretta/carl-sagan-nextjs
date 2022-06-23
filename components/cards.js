import {Stack,ImageList,ImageListItem,Box,ImageListItemBar} from '@mui/material'

export const MuiImageList = () =>{
    return (
        <Stack spacing={4}>
            <ImageList sx={{ width: 1200, height: 850}} 
            columns={5} 
            rowHeight={164}
            >
            {
                Itemdata.map(item =>(
                    <ImageListItem key= {item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
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
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/e0/f2/e0f299b5184dddfb41d39724f75349b8.jpg',
    title: 'libro 1',
},
{
    img: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG01IWS.jpg',
    title: 'Libro 2',
},
{
    img: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG01IWS.jpg',
    title: 'Libro 2',
},
{
    img: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG01IWS.jpg',
    title: 'Libro 2',
},
{
    img: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG01IWS.jpg',
    title: 'Libro 2',
},
    
]