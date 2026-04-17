import { MdDateRange } from "react-icons/md";

type Event = {
    date: string;
    name: string;
    description: string;
};

function EventCard({ event }: { event: Event }) {
    return (
        <div className="border border-5w-blue-dark rounded-lg p-4 mb-4">
            <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-bold text-5w-blue-dark">
                    {event.name}
                </h2>
                <p className="text-lg font-semibold flex items-center">
                    <MdDateRange className="mr-1" /> {event.date}
                </p>
            </div>
            <hr className="border-5w-blue-light my-2" />
            <p className="text-lg">{event.description}</p>
        </div>
    );
}

const eventList: Array<Event> = [
    {
        date: "Every Tuesday",
        name: "KekeChez",
        description:
            "Every Tuesday, someone from KekeChezComm goes around knocking on hall residents' doors with cheese, crackers, and occasionally other things. Food tends to be dependent on the person on KekeChezComm.",
    },
    {
        date: "Every Thursday",
        name: "Hallfeed",
        description:
            "Every Thursday, we hold a hall gathering in the kitchen where food is provided (usually by the chairs) and information (usually announcements) is disseminated.",
    },
    {
        date: "12/07/2025",
        name: "Hallsgiving",
        description: "Hallsgiving is held in the fall semester, and the exact date varies. It is exactly what it sounds like: Hall + Thanksgiving."
    },
    {
        date: "12/14/2025",
        name: "Secret Santa",
        description: "It's secret santa. What else can we say about it?"
    },
    {
        date: "04/04/2026 - 04/05/2026",
        name: "Retreat",
        description: "In the spring semester, we hold a weekend-long retreat to various locations not too far from 5W. This year, we went to Provincetown, MA. Feel free to ask us about it if you're curious!"
    },
    {
        date: "05/09/2026",
        name: "5W Picnic",
        description: "We have a picnic every year in the spring semester. Why? Why not!"
    },
    {
        date: "Whenever we feel like it",
        name: "Random Events",
        description: "In addition to the events listed above, we also have random events that pop up whenever we feel like it. Our favorite includes hair dye, movie, craft, game nights, and everything in between. Spontaneity is key!"
    }
];

function Events() {
    return (
        <div className="flex pt-[8vh] px-[2vh] text-5w-blue-dark w-full flex-col font-[Trebuchet_MS] text-xl">
            <h1 className="text-5xl font-bold w-full text-left mb-10">
                Events:
            </h1>
            {eventList.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
}

export default Events;
