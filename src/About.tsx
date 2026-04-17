import "./index.css";
import ContentSplit from "./ContentSplit";

function About() {
    return (
        <div className="flex pt-[8vh] px-[2vh] text-5w-blue-dark w-full flex-col font-[Trebuchet_MS] items-center">
            <div className="block mx-5 text-xl w-5/6 text-left">
                <h1 className="text-5xl font-bold w-full text-left mb-10">
                    About:
                </h1>

                tldr for prospective residents: if you prefer a more lowkey
                environment, come and get to know us! Alternatively, if you
                prefer things to be more "hardcore," still come and get to know
                us! Hall culture isn't immutable. (However, we can't fix cat
                allergies, so if you're someone who's allergic to cats, we
                appreciate your interest in our hall, but unfortunately, 5W
                probably isn't the hall for you.)

                <ContentSplit />

                If you were to ask residents of 5W (typically read "fifth west"
                but also written "5west" or "Fifth West") what they associate
                with this hall, chances are that you'll hear them say cats. Or
                something along those lines. (Among actual responses: "CAT CAT
                CAT," "cats cats cats," and "Cats!!!") As their responses
                suggest, we're a cat hall, and historically, we've had a lot of
                resident felines (around 9 in past years; currently 5).

                <ContentSplit />

                Beyond the cats, in a standard year, we are a no-smoking and
                clothing-not-optional hall. We eat cheese and/or
                cookies/crackers/chocolate on Tuesday nights, and we have
                hallfeeds on Thursday nights. Most of the time, we're chill, but
                occasionally, we like to let loose. Our interests are varied.
                Some of us like to hang out in the lounges and play games while
                others prefer to mostly keep to their rooms; some like to cook
                up fancy meals, and others live off chicken nuggets, mac and
                cheese, and ramen. Some enjoy sports and exercise, some enjoy
                the arts and making things. And et cetera. You get the point.

                <ContentSplit />

                Some details about 5W, the physical place: as the name suggests,
                we're located on the fifth (i.e. highest) floor of the west
                parallel of EAsT camPUS. Like most EC halls, we have a kitchen, two lounges (kitchen lounge and TV lounge, more
                commonly known as KL and TVL), and six bathrooms, two in each
                section (Munroe, Hayden, and Wood) of the hall.

                <ContentSplit />

                If there's been anything on this page that
                seems like it'd appeal to you, come check us out during EC's
                hall rush! (Alternatively, reach out to the hall chairs at
                5west-chairs@mit.edu.)
                <ContentSplit />
            </div>
        </div>
    );
}

export default About;
