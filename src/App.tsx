import * as BABYLON from '@babylonjs/core'
import { Scene } from '@babylonjs/core/scene'
import SceneComponent from './lib/SceneComponent'
import '@babylonjs/loaders' // これがないと読み込めない
import { Engine } from '@babylonjs/core/Engines/engine'
import { Vector3 } from '@babylonjs/core/Maths/math'

const onSceneReady = (scene: Scene) => {
  // カメラの作成, 回転
  const camera = new BABYLON.ArcRotateCamera(
    'camera',
    -1.5,
    1.5,
    0.8,
    new BABYLON.Vector3(0, 0, 0),
    scene,
  )
  camera.attachControl(SceneComponent, true)
  camera.minZ = 0.001

  // ライトの作成
  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(0, 1, 0),
    scene,
  )
  light.intensity = 1.0

  // SoccerBall.babylonからノードの読み込み
  BABYLON.SceneLoader.ImportMeshAsync('', '/assets/', 's7.obj').then(
    (result) => {
      // 読み込みが完了したら
      const back = scene.getMeshByName('iphone_6s_low_poly:polySurface14')
      // house1.position.y = 2; // y 軸方向(↑)に +2
      console.log(back)
      const roofMat = new BABYLON.StandardMaterial('roofMat')
      roofMat.diffuseTexture = new BABYLON.Texture(
        '/assets/tpl_avocado.png',
        scene,
      )
      if (back) {
        back.material = roofMat
      }
    },
  )
  // const assetsManager = new BABYLON.AssetsManager(scene)
  // assetsManager.addMeshTask('task', '', '/assets/', 's7.obj')
  // assetsManager.addMeshTask("task", "SoccerBall", iPhoneAsset);
}

export default function App() {
  return <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
}
