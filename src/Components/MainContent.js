import { useEffect, useState } from "react";
import ExportButton from "../Buttons/Exports";

function MainContent(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("this is the props coming from the useEffect");
        console.log(props);
    }, []);

    function handleGetPlaylist() {
        console.log(props.playist);
        // console.log("this is the props" + props);
        setData(props.playlists);
    }

    return (
        <>
            <div class="text-center" >
                <br />
                This is the main content area.
                <div onClick={handleGetPlaylist}>Click me to get playlist data in the console</div>
                <br />
                <div class="flex flex-col justify-center p-2 ">
                    {
                        data && data.map((obj, index) => (
                            <div key={index} class="flex flex-row items-center justify-center">
                                <div>
                                    {obj.name}
                                </div>
                                <ExportButton id={obj.id} name={obj.name} totalTracks={obj.tracks.total} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MainContent;