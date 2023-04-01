
const ImageVideo = ({ imgSrc, videoSrc }) => {
    return (
      <div>
        {imgSrc ? <img src={imgSrc} alt="Image" />:null}
        {videoSrc ? <Video src={videoSrc} />: null}
      </div>
    );
  };

export default ImageVideo;
