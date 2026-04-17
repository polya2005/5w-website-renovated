function Photos() {
    const allPhotos = import.meta.glob("./assets/photos/*.{jpg,png}", { eager: true });
    return (
        <div className="flex pt-[8vh] px-[2vh] text-5w-blue-dark w-full flex-col font-[Trebuchet_MS] text-xl">
            <h1 className="text-5xl font-bold w-full text-left mb-10">
                Photos:
            </h1>
            {Object.keys(allPhotos).map((key, index) => (
                <img key={index} src={allPhotos[key].default} alt={`Photo ${index + 1}`} className="mb-4 rounded-lg shadow-md" />
            ))}
        </div>
    )
}

export default Photos;
