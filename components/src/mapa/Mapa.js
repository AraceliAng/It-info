import React, {Component} from 'react';
import {StyleSheet, View, Image,Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Content, Header,Icon, Input,Item,Button,Body, Left,Right, Title} from 'native-base'
import MapView from 'react-native-maps';


const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0922;

export default class Mapa extends Component{
  constructor(){
    super()
    this.state={
      region:{
        latitude:null,
        longitude:null,
        latitudeDelta: null,
        longitudeDelta:null,
      },
      EDI :[
        {
        id:1,
        nombre:'Edificio A',
        lat:20.083366,
        lon:-98.773836,
      },
        {
        id:2,
        nombre:'Edificio B',
        lat:20.085050,
        lon:-98.774663,
        },
        {
        id:3,
        nombre:'Edificio C',
        lat:20.083721,
        lon:-98.775172
        },
      {
        id:4,
        nombre:'Edificio D',
        lat:20.083449,
        lon:-98.775536,
          },
          {
          id:5,
          nombre:'Edificio F',
          lat:20.083999,
          lon:-98.775466,
        },
          {
          id:6,
          nombre:'Edificio G',
          lat:20.083434,
          lon:-98.774726,
          },
          {
          id:7,
          nombre:'Edificio H',
          lat:20.082673,
          lon:-98.775322,
          },
          {
          id:8,
          nombre:'Edificio I',
          lat:20.082911,
          lon:-98.775773,
          },
          {
          id:9,
          nombre:'Edificio J',
          lat:20.083122,
          lon:-98.774694,
          },
          {
          id:10,
          nombre:'Edificio L',
          lat:20.082870,
          lon:-98.774538,
          },
          {
          id:11,
          nombre:'Edificio O',
          lat:20.082589,
          lon:-98.775971,
          },
          {
          id:12,
          nombre:'Edificio U',
          lat:20.084020,
          lon:-98.775137,
          },
          {
          id:13,
          nombre:'Edificio V',
          lat:20.082447,
          lon:-98.775391,
          },
          {
          id:14,
          nombre:'Edificio V-1',
          lat:20.082462,
          lon:-98.775617,
          },
          {
          id:15,
          nombre:'Edificio X',
          lat:20.082376,
          lon:-98.775778,
          },

      ],
      DEP:[

        {
        id:1,
        nombre:'Depto. E',
        lat:20.083181,
        lon:-98.775615,
        descri:'Departamento Ing. Industrial'
      },
        {
        id:2,
        nombre:'Depto. K',
        lat:20.083271,
        lon:-98.774310,
        descri:'Departamento Ciencias Básicas'
        },
        {
        id:3,
        nombre:'Depto. M',
        lat:20.082703,
        lon:-98.774968,
        descri:'Departamento Metal Mecánica'
        },
        {
        id:4,
        nombre:'Depto. N',
        lat:20.082939,
        lon:-98.775309,
        descri:'Departamento Ing. Química'
        },
        {
        id:5,
        nombre:'Depto. Y',
        lat:20.083795,
        lon:-98.775705,
        descri:'Departamento Sistemas y Computación'
          },
          {
          id:6,
          nombre:'Depto. Z',
          lat:20.083716,
          lon:-98.774226,
          descri:'Departamento Económico Administrativo'
        },
          {
          id:7,
          nombre:'Depto. 01',
          lat:20.081919,
          lon:-98.774735,
          descri:'Departamento Ing. Eléctrica y Electrónica'
          },
          {
          id:8,
          nombre:'Depto. 02',
          lat:20.083184,
          lon:-98.776000,
          descri:'Departamento Ciencias de la Tierra'
          },
          {
          id:9,
          nombre:'Depto. 03',
          lat:20.083436,
          lon:-98.775962,
          descri:'Departamento Mantenimiento'
          },
          {
          id:10,
          nombre:'Depto. 04',
          lat:20.084187,
          lon:-98.775435,
          descri:'Departamento Extraescolares'
          },
          {
          id:11,
          nombre:'Depto. 05',
          lat:20.082237,
          lon:-98.775607,
          descri:'Sala de Maquinas'
          },
          {
          id:12,
          nombre:'Depto. 06',
          lat:20.082906,
          lon:-98.776182,
          descri:'Taller de Construcción'
          },
          {
          id:13,
          nombre:'Depto. 07',
          lat:20.082591,
          lon:-98.774610,
          descri:'Aula Institutos'
          },
          {
          id:14,
          nombre:'Depto. 08',
          lat:20.083142,
          lon:-98.773903,
          descri:'Servicios Escolares'
          }
      ],
      LAB:[
        {
        id:1,
        nombre:'Laboratorio',
        lat:20.082239,
        lon:-98.775434,
        descri:'Ingeniería Química'
      },
        {
        id:2,
        nombre:'Laboratorio',
        lat: 20.082329,
        lon:-98.775028,
        descri:'Ingeniería Mecánica'
        },
        {
        id:3,
        nombre:'Laboratorio',
        lat:20.082031,
        lon:-98.775195,
        descri:'Ingniería Eléctrica'
        },
        {
        id:4,
        nombre:'Laboratorio',
        lat:20.082368,
        lon:-98.774509,
        descri:'Manofactura Integral'
        },
        {
        id:5,
        nombre:'Laboratorio',
        lat:20.084207,
        lon:-98.774099,
        descri:'Idiomas'
          }
      ],
      ADE:[
        {
        id:1,
        nombre:'Campo No. 1',
        lat:20.085064,
        lon:-98.773437,
      },
        {
        id:2,
        nombre:'Campo No. 2',
        lat:20.085629,
        lon:-98.774313,
        },
        {
        id:3,
        nombre:'Campo No. 3',
        lat:20.085886,
        lon:-98.775127,
        },
        {
        id:4,
        nombre:'Cancha de Bésbol',
        lat:20.084991,
        lon: -98.775346,
        },
        {
        id:5,
        nombre:'Cancha de Futbol Rápido',
        lat:20.084421,
        lon:-98.776323
      },
      {
          id:6,
          nombre:'Canchas al Aire Libre ',
          lat:20.084281,
          lon:-98.776131

            }
      ],
      CED:[
        {
        id:1,
        nombre:'Centro de Cómputo',
        lat:20.085886,
        lon:-98.775127,
      },
        {
        id:2,
        nombre:'Centro de Información',
        lat:20.083950,
        lon:-98.774616,
        },

      ],
      GIM:[
        {
        id:1,
        nombre:'Gimasio Olímpico',
        lat:20.084573,
        lon:-98.774615,
      },
        {
        id:2,
        nombre:'Gimnasio Miguel Hidalgo',
        lat:20.083712,
        lon:-98.776542,
        },

      ],
      ACU:[
        {
        id:1,
        nombre:'F Danza',
        lat:20.084011,
        lon:-98.775471,
      },
        {
        id:2,
        nombre:'Foro Cultural',
        lat:20.083454,
        lon:-98.775124,
        },

      ],
      EST:[
        {
        id:1,
        nombre:'Estacionamiento',
        lat:20.084323,
        lon:-98.776814,
        descri:'Unico Para Autobuses'
      },
        {
        id:2,
        nombre:'Estacionamiento',
        lat:20.083359,
        lon:-98.776999,
        descri:'Uso para Alumnos y Visitantes'
        },
        {
        id:3,
        nombre:'Estacionamiento',
        lat:20.083988,
        lon:-98.773637,
        descri:'Uso para Personal Administrativo'
        },
      ],


      }
    }


  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({
          region:{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            latitudeDelta:LATITUDEDELTA,
            longitudeDelta:LONGITUDEDELTA
          }
        })
      },
      (error)=>alert(error.message),
      {enableHightAcuracy:true, timeout:20000}
    )
    this.watchID = navigator.geolocation.watchPosition((position)=>{
      const newRegion ={
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        latitudeDelta:LATITUDEDELTA,
        longitudeDelta:LONGITUDEDELTA
      }
    })
  }

  marker(){
    return{
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude
    }
  }

  render(){
    return(
      <View style={styles.container}>
      <Header>
      <Left>

       </Left>
       <Body>
         <Title>No te Pierdas</Title>
       </Body>
       <Right>

       </Right>
      </Header>
        {this.state.region.latitude ?   <MapView
            style={styles.mapa}
            region={this.state.region}

            showsUserLocation={true}
            followUserLocation={true}
          >

          {this.state.EDI.map(marker =>
             <MapView.Marker
             key={marker.id}
               coordinate={{longitude: marker.lon, latitude: marker.lat}}
                title={marker.nombre}>
               <View style={styles.radius}><View style={styles.marker}/></View>
             </MapView.Marker>
           )}
           {this.state.DEP.map(marker =>
              <MapView.Marker
              key={marker.id}
                coordinate={{longitude: marker.lon, latitude: marker.lat}}
                 title={marker.nombre}
                 description={marker.descri}>
                <View style={styles.radius}><View style={styles.markerDeP}/></View>
              </MapView.Marker>
            )}
            {this.state.LAB.map(marker =>
               <MapView.Marker
                key={marker.id}
                 coordinate={{longitude: marker.lon, latitude: marker.lat}}
                  title={marker.nombre}
                  description={marker.descri}>
                 <View style={styles.radius}><View style={styles.markerLAB}/></View>
               </MapView.Marker>
             )}
             {this.state.ADE.map(marker =>
                <MapView.Marker
                key={marker.id}
                  coordinate={{longitude: marker.lon, latitude: marker.lat}}
                   title={marker.nombre}>
                  <View style={styles.radius}><View style={styles.markerADE}/></View>
                </MapView.Marker>
              )}
              {this.state.CED.map(marker =>
                 <MapView.Marker
                  key={marker.id}
                   coordinate={{longitude: marker.lon, latitude: marker.lat}}
                    title={marker.nombre}>
                   <View style={styles.radius}><View style={styles.markerCED}/></View>
                 </MapView.Marker>
               )}
               {this.state.GIM.map(marker =>
                  <MapView.Marker
                    key={marker.id}
                    coordinate={{longitude: marker.lon, latitude: marker.lat}}
                     title={marker.nombre}>
                    <View style={styles.radius}><View style={styles.markerGIM}/></View>
                  </MapView.Marker>
                )}
                {this.state.ACU.map(marker =>
                   <MapView.Marker
                    key={marker.id}
                     coordinate={{longitude: marker.lon, latitude: marker.lat}}
                      title={marker.nombre}>
                     <View style={styles.radius}><View style={styles.markerACU}/></View>
                   </MapView.Marker>
                 )}
                 {this.state.EST.map(marker =>
                    <MapView.Marker
                      key={marker.id}
                      coordinate={{longitude: marker.lon, latitude: marker.lat}}
                       title={marker.nombre}
                       description={marker.descri}>
                      <View style={styles.radius}><View style={styles.markerEST}/></View>
                    </MapView.Marker>
                  )}
                  <MapView.Marker
                    coordinate={{longitude:-98.775137,   latitude:20.083208,}}
                     title='Cafeteria'>
                    <View style={styles.radius}><View style={styles.markerCAF}/></View>
                  </MapView.Marker>



          </MapView> : <Text>no hay nada</Text>  }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EEE',
    },
    mapa: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute'
    },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#ff4300'
  },
  markerDeP: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#0C2E7F'
  },
  markerLAB: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#2373D4'
  },
  markerADE: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#0D8101'
  },
  markerCED: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#FF7800'
  },
  markerGIM: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#FFE516'
  },
  markerACU: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#921DD3'
  },
  markerEST: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#716E73'
  },
  markerCAF: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: 'pink'
  },

});
/*
{

*/
