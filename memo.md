# babylon.js導入
npm install @babylonjs/core
npm install react-babylonjs
npm install  @babylonjs/gui

npm install   @babylonjs/loaders

## SceneComponent
Babylon.js の再利用可能な React コンポーネント。
ウィンドウのサイズが変更されると、エンジンのサイズが変更されます。
アンマウント時にリソースを自動的にクリーンアップします。
このコンポーネントに追加した追加の小道具は、キャンバスに流れます (つまり、スタイル/クラス名)。
このコンポーネントをページに追加し、シーンの準備ができたときに実行するメソッドを指定するだけです。要素が作成され、 Babylon.js<canvas />エンジンとシーンが作成されて開始されます。
runRenderLoop をさらに制御したい場合は、ここから削除してonSceneReadyプロップに追加してください。

# Props

## Engine
 ### adaptToDeviceRatio
 このフラグは、次のようにハードウェア スケーリング レベルを調整するエンジン フラグです。

this._hardwareScalingLevel = adaptToDeviceRatio ? 1.0 / Math.min(limitDeviceRatio, devicePixelRatio) : 1.0;
ただし、XR ではハードウェア スケーリングが機能しないため (XR はキャンバスを直接使用しないため)、XR では気付かないでしょう。

# モデル読み込み
    モデルをシーンに追加すると、ブラウザからモデルが読み込まれます。
    ご存知の通り、web サイトから何かをロードするときは非同期関数を使用します。
    したがって、モデルで何かをする前にそのモデルがちゃんとロード完了されていなければなりません。    
## Assets  Manager
### MeshAssetTask
メッシュ アセット タスクは、モデルを外部からロードするために使用されます (.babylon、.obj、.gltf など)。

コンストラクターの署名:
constructor(name: string, meshesNames: any, rootUrl: string, sceneFilename: string | File)