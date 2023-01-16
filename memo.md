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
