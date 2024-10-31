import { IVideo } from "@/interfaces/Course";

interface VideoPlaylistProps {
  title: string;
  videos: IVideo[];
  onVideoSelect: (video: IVideo) => void;
  currentVideoId: string | undefined;
}

const Playlist = ({ title, videos, onVideoSelect, currentVideoId }: VideoPlaylistProps) => {
  return (
    <div className="h-full container py-6 px-2 bg-slate-100">
      <h1 className="text-2xl font-medium text-center md:text-left">{title}</h1>
      <ul className="mt-4 rounded-lg border-2 border-black border-opacity-15">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`flex items-center gap-4 p-2 cursor-pointer ${
              currentVideoId === video.id ? "bg-slate-200 shadow-md" : "bg-slate-100"
            } hover:bg-slate-200 transition-colors`}
            onClick={() => onVideoSelect(video)}
          >
            <i
              className={`bx ${
                currentVideoId === video.id ? "bx-pause text-[var(--accent-color)]" : "bx-play"
              } text-3xl items-center justify-center`}
            ></i>
            <li className="text-lg font-medium truncate md:whitespace-nowrap">
              {`${index + 1} - ${video.title}`}
            </li>
            <span className="text-sm ml-2 flex items-center justify-center text-[var(--secondary-text)]">
              {video.duration}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
