interface VideoPlayerProps {
  url: string | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="container py-4 px-2 bg-slate-100 border-r-[3px] border-b-[3px] border-black border-opacity-15">
      <div className="flex justify-start items-center rounded-lg px-6 py-2">
        {url ? (
          <iframe
            src={url}
            width={800}
            height={400}
            className="rounded-lg"
          ></iframe>
        ) : (
          <p>Video no disponible</p>
        )}
      </div>
      <div>
        <div className="mt-4 flex gap-4 px-6">
          <button className="py-1 px-2 flex gap-1 rounded-lg justify-center items-center text-2xl hover:bg-slate-200 transition-all">
            <i className="bx bx-heart text-red-700 text-2xl"></i>
            <p className="text-lg font-medium">Favorite</p>
          </button>
          <button className="py-1 px-2 flex gap-1 rounded-lg justify-center items-center text-2xl hover:bg-slate-200 transition-all">
            <i className="bx bxs-share text-2xl"></i>
            <p className="text-lg font-medium">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
