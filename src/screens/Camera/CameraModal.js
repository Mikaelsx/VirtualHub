// IMPORTS

// 1 - quando clicar na lixeira remover da galeria // ESTÁ REMOVENDO DO MODAL FALTA DA GALERIA
// 2 - permitir foto com flash // FLASH FUNCIONA AO TIRAR A FOTO
// 3 - botão para recaregar o auto focus // FALTA O BOTÃO
// 4 - carregar e salvar vídeo // FALTA ALGUNS AJUSTES

// FOTOS E VIDEOS SÃO SALVOS AUTOMATICAMENE LOGO APÓS A CAPTURA
// FOTOS E VIDEOS NÃO SÃO APAGADOS DA GALERIA

import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // REACT NATIVE

import { Camera, CameraType, FlashMode} from 'expo-camera'; // EXPO CAMERA

import * as MediaLibrary from 'expo-media-library' // MEDIA LIBRARY

import * as isAccessMediaLocationEnabled from 'expo-media-library' // MEDIA LIBRARY

import { useEffect, useState, useRef } from 'react';  // REACT

import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons' // ICON CAMERA


export const CameraModal = ({navigation, visible, setUriCameraCapture, setShowModalCancel, ...rest }) => {
   // CONSTANTE DE CAPTURA 
   const cameraRef = useRef( null )

   // CONSTANTE DE FOTO
   const [photo, setPhoto] = useState( null )
 
   const [video, setVideo] = useState( null )
 
   // CONSTANTE EXIBIÇÃO DE FOTO
   const [openModal, setOpenModal] = useState( false )
 
   // CONSTANTE EXIBIÇÃO DE VIDEO
   const [openVideoModal, setOpenVideoModal] = useState( false )
 
   // CAMERA FRONTAL
   const [tipoCamera, setTipoCamera] = useState( CameraType.front )
 
   const [cameraKey, setCameraKey] = useState(0);
 
   // RECARREGAR AUTO FOCUS
   function reloadAutoFocus() {
     setCameraKey(prevKey => prevKey + 1);
   }
 
   // FLASH DA CAMERA
   // FUNCIONA AO CAPTURAR A FOTO
   const [ flash, setFlash ] = useState( FlashMode.off )
 
   function FlashCamera() {
     if ( flash === FlashMode.off ) {
       setFlash( FlashMode.on );
       alert("Flash On");
     } else {
       setFlash( FlashMode.off );
       alert("Flash Off");
     }
   }
 
   useEffect(() => {
     (async () => {
       // PERMIÇÃO USO DE CAMERA
       const { status : cameraStatus } = await Camera.requestCameraPermissionsAsync()
 
       // PERMISSÃO DE ARMAZENAR FOTO
       const { status : mediaStatus } = await MediaLibrary.requestPermissionsAsync()
 
       // PERMISSÃO DE GRAVAR ÁUDIO
       const { status : microphoneStatus } = await Camera.requestMicrophonePermissionsAsync()
 
     })();
   },[])
 
   // FUNÇÃO DE CAPTURAR FOTO
   async function CapturePhoto () {
     if ( cameraRef.current ) {
       const photo = await cameraRef.current.takePictureAsync()
       setPhoto( photo.uri )
       setOpenModal( true )
       console.log(photo);
       await MediaLibrary.createAssetAsync( photo.uri )
     }
   }
 
   // FUNCÃO DE CAPTURAR VÍDEO
   async function captureVideo() {
     if (cameraRef.current) {
       const video = await cameraRef.current.recordAsync({
         quality: Camera.Constants.VideoQuality['1080p'],
         maxDuration: 15,
         
       });
       setVideo( video.uri )
       setOpenVideoModal( true )
       console.log(video);
       await MediaLibrary.createAssetAsync(video.uri);
     }
   }
 
   // FUNÇÃO DE RETOMAR PARA A CÂMERA
   function ClearPhoto() {
     setPhoto( null )
 
     setOpenModal( false )
   }
 
   // FUNÇÃO DE RETOMAR PARA A CÂMERA
   function ClearVideo() {
     setVideo( null )
 
     setOpenVideoModal( false )
   }
 
   async function deleteAsset(assetId) {
  // Create a temporary album
  const { id: tempAlbumId } = await MediaLibrary.createAlbumAsync('TempAlbum', assetId, false);
 
  // Move the asset to the temporary album
  await MediaLibrary.addAssetsToAlbumAsync([assetId], tempAlbumId, false);
 
  // Delete the temporary album (and all assets within it)
  await MediaLibrary.deleteAlbumsAsync([tempAlbumId], true);
 }
 
   // FUNÇÃO DE EXCLUIR FOTO E RETOMAR PARA A CÂMERA
   async function DeletePhoto() {
     try {
        const asset = await MediaLibrary.getAssetInfoAsync(photo.uri);
        await MediaLibrary.deleteAssetsAsync([asset.id]);
        setPhoto(null);
        setOpenModal(false);
        alert("Foto Deletada com sucesso!");
     } catch (error) {
        alert("Não foi possivel excluir a imagem.");
     }
    }
 
   // FUNÇÃO DE EXCLUIR VIDEO E RETOMAR PARA A CÂMERA
   async function DeleteVideo() {
     try {
        const asset = await MediaLibrary.getAssetInfoAsync(video.uri);
        await MediaLibrary.deleteAssetsAsync([asset.id]);
        setVideo(null);
        setOpenVideoModal(false);
        alert("Video Deletada com sucesso!");
     } catch (error) {
        alert("Não foi possivel excluir o Video.");
     }
    }
  return(
    <Modal {...rest} visible={visible} transparent={true} animationType="fade" animationOutTiming={0}>
        <View style={styles.container}>

{/* CAMERA */}
<Camera
  key={cameraKey}
  ref={cameraRef}
  style={ styles.camera}
  ratio='16:9'
  type={tipoCamera}
  flashMode={flash}
>
  <View style={ styles.viewFlip}/>
  <TouchableOpacity style={ styles.btnFlip} 
  // TROCA A DIREÇÃO DA CAMERA DE FRONTAL PRA TRASEIRA
  onPress={ () => setTipoCamera( tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}> 
    <Text style={ styles.txtFlip }>Trocar</Text>
  </TouchableOpacity>
</Camera>

{/* BOTÃO DE AUTO FOCUS */}
<TouchableOpacity style={ styles.reloadIcon} onPress={ () => reloadAutoFocus() }>
  <Ionicons name='reload-circle-outline' size={30} color='#000000' />
</TouchableOpacity>

<View style={ styles.rowView}>

{/* BOTÃO DE CAPTURAR IMAGEM */}
<TouchableOpacity onPress={ () => CapturePhoto() } style={ styles.btnCapture }>
  <FontAwesome name='camera' size={15} color='#FFFFFF' />
</TouchableOpacity>

{/* BOTÃO DE CAPTURAR VÍDEO */}
<TouchableOpacity onPress={ () => captureVideo() } style={ styles.btnCapture }>
  <FontAwesome name='video-camera' size={15} color='#FFFFFF' />
</TouchableOpacity>

{/* BOTÃO DE LIGAR O FLASH */}
<TouchableOpacity onPress={ () => FlashCamera() } style={ styles.btnCapture }>
  <FontAwesome name='flash' size={15} color='#FFFFFF' />
</TouchableOpacity>

</View>

{/* MODAL DE EXIBIÇÃO DA FOTO */}
<Modal animationType='slide' transparent={false} visible={openModal}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>

    {/* IMAGEM */}
    <Image 
    style={{ width: '100%', height: 600, borderRadius: 15}}
    source={{ uri:photo }}
    />

    <View style={{ marginTop: 30, margin: 10,  flexDirection: 'row', gap: 60}}>

    {/* BOTÃO DE FECHAR MODAL */}
    <TouchableOpacity onPress={ () => ClearPhoto() } style={ styles.btnClear }>
    <MaterialIcons name='cancel-presentation' size={20} color='#FFFFFF' />
    </TouchableOpacity>

    {/* BOTÃO DE APAGAR FOTO */}
    <TouchableOpacity onPress={ () => DeletePhoto() } style={ styles.btnDelete }>
    <FontAwesome name='trash' size={20} color='#FFFFFF' />
    </TouchableOpacity>

    </View>
  </View>
</Modal>


{/* MODAL DE EXIBIÇÃO DE VÍDEO */}
<Modal animationType='slide' transparent={false} visible={openVideoModal}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>

    {/* VIDEO */}
    <Image 
    style={{ width: '100%', height: 600, borderRadius: 15}}
    source={{ uri:video }}
    />

    <View style={{ marginTop: 30, margin: 10,  flexDirection: 'row', gap: 60}}>

    {/* BOTÃO DE FECHAR MODAL */}
    <TouchableOpacity onPress={ () => ClearVideo() } style={ styles.btnClear }>
    <MaterialIcons name='cancel-presentation' size={20} color='#FFFFFF' />
    </TouchableOpacity>

    {/* BOTÃO DE APAGAR VIDEO */}
    <TouchableOpacity onPress={ () => DeleteVideo() } style={ styles.btnDelete }>
    <FontAwesome name='trash' size={20} color='#FFFFFF' />
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
  btnCapture: {
    width: 60,
    height: 60,
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#121212',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnClear: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#121212',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDelete: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#121212',

    justifyContent: 'center',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    gap: 20,
  },
  reloadIcon: {
    position:'absolute',
    alignSelf: 'flex-start',
    marginLeft: 15
  },

});
