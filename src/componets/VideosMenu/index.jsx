import VideoMenu from "../VideoMenu";

import video1 from "../../videos/Capitão América_ Admirável Mundo Novo _ Trailer Oficial Dublado.mp4";
import video2 from "../../videos/Sonic 3_ O Filme _ Trailer Oficial _ DUB _ Paramount Pictures Brasil.mp4";
import video3 from "../../videos/Top Gun_ Maverick - Official Trailer (2022) - Paramount Pictures.mp4";

export default function VideosMenu() {
    return (
        <>
            <VideoMenu telas={video1} />
            <VideoMenu telas={video2} />
            <VideoMenu telas={video3} />
        </>

    )
}