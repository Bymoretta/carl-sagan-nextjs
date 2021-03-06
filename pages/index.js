import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import { MuiImageList } from '../components/cards';
import { ThemeProvider } from '@mui/private-theming';
import theme from '../components/themeconfig';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <>
    <Head><title>Carl Sagan</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <main className={styles.main}>
          <Image src="/cosmos.gif" alt='comos' height={200} width={3000} />
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <h1>
            Carl Sagan
          </h1>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Image src="/Sagan.jpg" alt='Sagan' height={1000} width={2500} /><br>
          </br>
          <h2>
            ¿Quién fue Carl Sagan?
            <br>
            </br>
          </h2>
          <p>

            Era casi como una llamada de otro planeta en el cosmos: la invitación al joven astrónomo a dejar Brooklyn y visitar los lagos y desfiladeros del estado de Nueva York.
            <br>
            </br>
            "Cuando apareció una carta de Carl Sagan en mi buzón," dijo Neil deGrasse Tyson, recordando la invitación que recibió en 1975 en una reciente charla en la Biblioteca del Congreso de Estados Unidos.
            "Yo no me lo podía creer. La gente famosa no escribe algo a un extraño sin motivo alguno".
            <br>
            </br>
            <br>
            </br>
            Pero la invitación era real. Era la respuesta a su solicitud para entrar en la Universidad de Cornell, y Tyson se reunió con el famoso profesor en una visita poco después. Sagan le ofreció, a los 17 años de edad, la oportunidad de poder ir al campamento de astronomía, pero Tyson finalmente terminó en Harvard en lugar de en Cornell.

            De todos modos, tanto la visita como las formas o la invitación eran algo típico de Carl Sagan.
            <br>
            </br>
            <br>
            </br>
            La vida en el cosmos
            "Trabajó muy duro por sus estudiantes, para que ellos consiguieran trabajo, se preocupó por su educación, y muchos de ellos están muy bien situados ahora", dice William Poundstone, autor de Carl Sagan: Una vida en el cosmos.
            <br>
            </br>
            <br>
            </br>
            "Si hablas con la gente a la cual él inspiró, con los que lo conocieron, su respuesta será uniforme y efusiva".
            <br>
            </br>
            <br>
            </br>
            "Sagan fue sin duda el científico estadounidense más famoso de la década de 1980 y principios de 1990", dice el experto en periodismo científico Declan Fahy de la American University en Washington, DC.
            <br>
            </br><br>
            </br>
            "Después de que Cosmos llegase a medio mundo, y su fama llegó a otro nivel, y el libro de la serie pasó más de 70 semanas en la lista de los más vendidos".
            <br>
            </br>
            (Relacionado: La intrahistora de la fórmula que podría probar que existen los extraterrestres)
            <br>
            </br>
            <br>
            </br>
            Pero ¿quién era Carl Sagan? Científico, celebridad, escritor, profesor, escéptico, y librepensador, él era mucho más que el narrador de una serie de televisión.

            "Parte de lo que lo hizo grande fue el número de objetivos que perseguía", dice David Morrison, director del Centro Carl Sagan para el Estudio de la Vida en el Universo, en el Instituto SETI en Mountain View, California. Morrison estaba alucinado con la dimensión de los logros de Sagan y su falta de ego.
          </p>
          <h3>Libros</h3>
          <MuiImageList></MuiImageList>
          <br></br>
          <Button href="https://listado.mercadolibre.com.ar/carl-sagan"> Tienda </Button>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://folcademy.folclass.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered For Folcademy


          </a>
        </footer>
      </ThemeProvider>
    </>
  )
}