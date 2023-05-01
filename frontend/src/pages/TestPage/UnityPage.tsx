import Unity, { UnityContent } from "react-unity-webgl";
export default function App() {
    let unityContent = new UnityContent(
        "unity/Build/edittset.json",
        "unity/Build/UnityLoader.js"
    );
    return (
        <div><Unity unityContent={unityContent} /></div>
    );
}