import React, { useState } from 'react';
import { 
  View, 
  StatusBar, 
  ScrollView, 
  SafeAreaView, 
  ImageBackground, 
} from 'react-native';


import ListRender from '../../components/ListRender';
import Search from '../../components/Search';
import Info from '../../components/Info';
import styles from './styles';


export default function Home() {

  const [lista, setLista] = useState([
    {
        title:"O Justiceiro",
        text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
        release: 2018,
        img: require("../../uploads/img0.jpg")
    },
    {
        title:"Bad Boys for life",
        text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
        release: 2020,
        img: require("../../uploads/img1.jpg")

    },
    {
        title:"Viúva Negra",
        text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
        release: 2020,
        img: require("../../uploads/img2.jpg")
    },
    {
        title:"Top Gun: MAVERICK",
        text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
        release: 2020,
        img: require("../../uploads/img3.jpeg")

    },
    {
        title:"BloodShot",
        text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
        release: 2020,
        img: require("../../uploads/img4.jpg")

    },
    {
        title:"Free Guy",
        text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
        release: 2020,
        img: require("../../uploads/img5.jpg")

    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);


 return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <ImageBackground
          source={background}
          style={styles.imgBg}
          blurRadius={8}
      >
        <SafeAreaView style={styles.safearea}>
          <ScrollView contentContainerStyle={styles.scrollview}>
              <Search/>
              <ListRender 
                setBackground={setBackground} 
                setActiveIndex={setActiveIndex} 
                lista={lista}
              />
              <Info lista={lista} activeIndex={activeIndex}/>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
    
  );
}

