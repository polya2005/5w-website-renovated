import fs from "fs";
import path from "path";

const photosDirectory = path.join(process.cwd(), "public/assets/photos");
const photos = fs
  .readdirSync(photosDirectory)
  .filter(
    (file) =>
      file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg"),
  )
  .map((file) => `/assets/photos/${file}`);

function Photos() {
  return (
    <div className="flex pt-[8vh] px-[2vh] text-5w-blue-dark w-full flex-col font-[Trebuchet_MS] text-xl items-center">
      <h1 className="text-5xl font-bold w-full text-left mb-10">Photos:</h1>
      {photos.map((filename, index) => (
        <img
          key={index}
          src={filename}
          alt={`Photo ${index + 1}`}
          className="mb-4 rounded-lg shadow-md"
        />
      ))}
    </div>
  );
}

export default Photos;
