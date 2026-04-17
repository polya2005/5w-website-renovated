function Misc() {
    return (
        <div className="flex pt-[8vh] px-[2vh] text-5w-blue-dark w-full flex-col font-[Trebuchet_MS] text-xl">
            <h1 className="text-5xl font-bold w-full text-left mb-10">
                Miscellaneous:
            </h1>
            <p className="text-lg mb-6">
                Well, there's nothing much here. Enjoy the music, I guess.
            </p>
            <iframe
                width="956"
                height="537"
                src="https://www.youtube.com/embed/hvL1339luv0?autoplay=1&loop=1"
                title="Never gonna Meow you up"
                allow="autoplay; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Misc;