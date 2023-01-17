import * as BABYLON from '@babylonjs/core'
import { Scene } from '@babylonjs/core/scene'
import SceneComponent from './lib/SceneComponent'
import '@babylonjs/loaders' // これがないと読み込めない
import { Engine } from '@babylonjs/core/Engines/engine'

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
  const assetsManager = new BABYLON.AssetsManager(scene)
  const iPhone = assetsManager.addMeshTask('task', '', '/assets/', 'iPhone.glb')
  // assetsManager.addMeshTask("task", "SoccerBall", iPhoneAsset);

  assetsManager.load()
  // BABYLON.SceneLoader.ImportMeshAsync("", "/assets/","scene.babylon");

  // //Begin animation - object to animate, first frame, last frame and loop if true
  // // アニメーションを開始する
}

export default function App() {
  return <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
}
