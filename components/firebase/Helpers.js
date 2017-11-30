import * as firebase from  './Firebase'

class Helpers {
  static setUserName(userID, name){
    let userNamePath = "/user/"+userID+"/Datos/name"
    return firebase.database().ref(userNamePath).set(name)
  }
  static setUserCorreo(userID, correo){
    let userNamePath = "/user/"+userID+"/Datos/correo"
    return firebase.database().ref(userNamePath).set(correo)
  }
  static setUserCarrea(userID, carrea){
    let userNamePath = "/user/"+userID+"/Datos/carrea"
    return firebase.database().ref(userNamePath).set(carrea)
  }
  static setUserNumero(userID, numero){
    let userNamePath = "/user/"+userID+"/Datos/numero"
    return firebase.database().ref(userNamePath).set(numero)
  }
  static setUserSemestre(userID, semestre){
    let userNamePath = "/user/"+userID+"/Datos/semestre"
    return firebase.database().ref(userNamePath).set(semestre)
  }
}

module.export = Helpers
