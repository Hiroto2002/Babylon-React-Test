import * as BABYLON from '@babylonjs/core'
import { Scene } from '@babylonjs/core/scene'
import SceneComponent from './components/SceneComponent'
import '@babylonjs/loaders'

const onSceneReady = (scene: Scene) => {
  // カメラの作成, 回転
  const camera = new BABYLON.ArcRotateCamera(
    'camera',
    -2.5,
    2,
    1.5,
    new BABYLON.Vector3(0, 0, 0),
    scene,
  )
  if (camera.autoRotationBehavior) {
    camera.useAutoRotationBehavior = true
    camera.autoRotationBehavior.idleRotationSpeed *= 5
    camera.attachControl(SceneComponent, true)
  }

  // ライトの作成
  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(0, 1, 0),
    scene,
  )
  light.intensity = 1.0

  // SoccerBall.babylonからノードの読み込み
  const assetsManager = new BABYLON.AssetsManager(scene)
  assetsManager.addMeshTask('task', '', '/assets/', 'iPhone.glb')
  // assetsManager.addMeshTask("task", "SoccerBall", iPhoneAsset);

  assetsManager.load()
  // BABYLON.SceneLoader.ImportMeshAsync("", "/assets/","scene.babylon");
}

export default function App() {
  return <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
}
