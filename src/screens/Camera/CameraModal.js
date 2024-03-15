// IMPORTS

// 1 - quando clicar na lixeira remover da galeria
// 2 - permitir foto com flash
// 3 - botão para recaregar o auto focus
// 4 - carregar e salvar vídeo

import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // REACT NATIVE

import { Camera, CameraType} from 'expo-camera'; // EXPO CAMERA
import * as MediaLibrary from 'expo-media-library' // MEDIA LIBRARY
import { useEffect, useState, useRef } from 'react';  // REACT

import { FontAwesome } from '@expo/vector-icons' // ICON CAMERA
import { LinkRed } from '../../components/Link/style';
import { CaptureButtom, EndCamera, Flip } from './styles';


export const CameraModal = ({navigation, visible, setUriCameraCapture, setShowModalCancel, ...rest }) => {
   // CONSTANTE DE CAPTURA 
   const cameraRef = useRef( null )

   // CONSTANTE DE FOTO
   const [photo, setPhoto] = useState( null )
 
   // CONSTANTE EXIBIÇÃO DE FOTO
   const [openModal, setOpenModal] = useState( false )
 
   // CAMERA FRONTAL
   const [tipoCamera, setTipoCamera] = useState( CameraType.front )

   // CAMERA FRONTAL
   const [capturePhoto, setCapturePhoto] = useState( null )
 
   useEffect(() => {
     (async () => {
       // PERMIÇÃO USO DE CAMERA
       const { status : cameraStatus } = await Camera.requestCameraPermissionsAsync()
 
       // PERMISSÃO DE ARMAZENAR FOTO
       const { status : mediaStatus } = await MediaLibrary.requestPermissionsAsync()
     })();
   },[])
 
   async function SendFormPhoto() {
    await setUriCameraCapture( capturePhoto )

    handleClose()
   }
   // FUNÇÃO DE ARMAZENAR FOTO
   async function UploadPhoto() {
     await MediaLibrary.createAssetAsync( photo )
     .then( () => {
       alert("Foto salva com sucesso!")
     }).catch( error => {
       alert("Não foi possivel salvar a imagem.")
     })
   }
 
   // FUNÇÃO DE CAPTURAR FOTO
   async function CapturePhoto () {
     if ( cameraRef ) {
       const photo = await cameraRef.current.takePictureAsync()
       setPhoto( photo.uri )
       setOpenModal( true )
       console.log(photo)
     }
   }
 
   // FUNÇÃO DE RETOMAR PARA A CÂMERA
   function ClearPhoto() {
     setPhoto( null )
 
     setOpenModal( false )
   }
 
   // FUNÇÃO DE EXCLUIR FOTO E RETOMAR PARA A CÂMERA
   async function DeletePhoto() {
     try{
       await MediaLibrary.deleteAssetsAsync( photo.uri )
       console.log(photo)
       alert("Foto Deletada com sucesso!")
     }catch{
       alert("Não foi possivel excluir a imagem.")
     }
   }
  return(
    <Modal {...rest} visible={visible} transparent={true} animationType="fade" animationOutTiming={0}>
    <View style={styles.container}>

    {/* CAMERA */}
    <Camera
    ref={cameraRef}
      style={ styles.camera}
      ratio='16:9'
      type={tipoCamera}
    >
      <View style={ styles.viewFlip}/>
      <TouchableOpacity style={ styles.btnFlip} 
      // TROCA A DIREÇÃO DA CAMERA DE FRONTAL PRA TRASEIRA
      onPress={ () => setTipoCamera( tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}> 
        <Flip>Trocar</Flip>
      </TouchableOpacity>
    </Camera>

    {/* BOTÃO DE CAPTURAR IMAGEM */}
    <CaptureButtom onPress={ () => CapturePhoto() }>
      <FontAwesome name='camera' size={18} color='#FFFFFF' />
    </CaptureButtom>

    {/* BOTÃO DE CAPTURAR IMAGEM */}
    {/* <CaptureButtom onPress={ () => SendFormPhoto() }>
      <FontAwesome name='camera' size={18} color='red' />
    </CaptureButtom> */}

    <EndCamera onPress={() => setShowModalCancel(false)}>Sair</EndCamera>


    <Modal animationType='slide' transparent={false} visible={openModal}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>

        {/* IMAGEM */}
        <Image 
        style={{ width: '100%', height: 600, borderRadius: 15}}
        source={{ uri:photo }}
        />

        <View style={{ marginTop: 30, margin: 10,  flexDirection: 'row', gap: 80}}>
        {/* BOTÃO DE APAGAR FOTO */}
        <TouchableOpacity onPress={ () => ClearPhoto() } style={ styles.btnClear }>
          <FontAwesome name='trash' size={25} color='red' />
        </TouchableOpacity>

        {/* BOTÃO DE SALVAR FOTO */}
        <TouchableOpacity onPress={ () => DeletePhoto() } style={ styles.btnDelete }>
          <FontAwesome name='upload' size={25} color='blue' />
        </TouchableOpacity>

        {/* BOTÃO DE FECHAR MODAL */}
        <TouchableOpacity onPress={ () => UploadPhoto() } style={ styles.btnUpload }>
          <FontAwesome name='upload' size={25} color='green' />
        </TouchableOpacity>

        </View>
      </View>
    </Modal>
  </View>
  </Modal>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: '80%',
    width: '100%',
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btnFlip: {
    padding: 20,
  },
  txtFlip: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  btnClear: {
    padding: 20,
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpload: {
    padding: 20,
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDelete: {
    padding: 20,
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center',
  },

});
