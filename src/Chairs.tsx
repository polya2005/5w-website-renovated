import ContentSplit from "./ContentSplit";

function ChairsTableRow(props: { semester: string; chairs: Array<string> }) {
    return (
        <tbody>
            <tr>
                <td className="border border-5w-blue-dark p-2 text-center">
                    {props.semester}
                </td>
                <td className="border border-5w-blue-dark p-2 text-center">{`${props.chairs.slice(0, -1).join(", ")}, and ${props.chairs.at(-1)}`}</td>
            </tr>
        </tbody>
    );
}

const chairsList = [
    { semester: "Spring 2026", chairs: ["Aadya", "Gabrielle", "River"] },
    { semester: "Fall 2025", chairs: ["Aadya", "Ann", "Jess"] },
    { semester: "Spring 2025", chairs: ["Ann", "Jason", "Jess"] },
    { semester: "Fall 2024", chairs: ["Alonso", "Ann", "Jason"] },
    { semester: "Spring 2024", chairs: ["Alonso", "Ann", "Jason"] },
    { semester: "Fall 2023", chairs: ["Alonso", "Angelina", "Jason"] },
    { semester: "Spring 2023", chairs: ["Alonso", "Angelina", "Jason"] },
    { semester: "Fall 2022", chairs: ["Alonso", "Angelina", "Awen"] },
    { semester: "Spring 2022", chairs: ["Angelina", "Callie", "Sam"] },
    { semester: "Fall 2021", chairs: ["Callie", "Fabian", "Sam"] },
    { semester: "Spring 2021", chairs: ["Eryn", "Fabian", "Sophia"] },
    { semester: "Fall 2020", chairs: ["Eryn", "Rondel", "Sophia"] },
    { semester: "Spring 2020", chairs: ["Eryn", "Rondel", "Sophia"] },
    { semester: "Fall 2019", chairs: ["Irene", "Rondel", "Sophia"] },
    { semester: "Spring 2019", chairs: ["Irene", "Serena", "Sophia"] },
    { semester: "Fall 2018", chairs: ["Mauri", "Miana", "Serena"] },
    {
        semester: "Spring 2018",
        chairs: ["Adriana", "Mauri", "Miana", "Serena"],
    },
    { semester: "Fall 2017", chairs: ["Adriana", "Mauri", "Serena"] },
    { semester: "Spring 2017", chairs: ["Adriana", "Joanna", "Rebca"] },
    { semester: "2007?", chairs: ["Brian", "Jason", "Michael"] },
    { semester: "1999??", chairs: ["Andrew", "Erin", "Jon"] },
];

function Chairs() {
    return (
        <div className="flex pt-[8vh] px-[2vh] text-5w-blue-dark w-full flex-col font-[Trebuchet_MS] text-xl">
            <h1 className="text-5xl font-bold w-full text-left mb-10">
                Chairs:
            </h1>
            We have them. For sitting at the kitchen table, in a lounge, or at a
            desk in your room.
            <ContentSplit />
            Just kidding. While we do have other kinds of chairs as well, these
            particular chairs are the people responsible for a number of things,
            including rooming people, running hallfeeds, and attending
            HouseComm. If you're a prospective resident with questions about 5W,
            these are (probably) also the people you should contact. Reachable
            at 5west-chairs@mit.edu.
            <ContentSplit />
            <h2 className="text-2xl my-5">Hall Chairs: A History</h2>
            <table className="table-auto border-collapse border border-5w-blue-dark w-full">
                <thead>
                    <tr>
                        <th className="border border-5w-blue-dark bg-5w-blue-light p-2">
                            Year
                        </th>
                        <th className="border border-5w-blue-dark bg-5w-blue-light p-2">
                            Hall Chairs
                        </th>
                    </tr>
                </thead>
                {chairsList.map((row, index) => (
                    <ChairsTableRow
                        key={index}
                        semester={row.semester}
                        chairs={row.chairs}
                    />
                ))}
            </table>
            <div className="text-sm mt-2 mb-5 italic">
                Note: Jumps between years are due to lack of information, not
                lack of chairs.
            </div>
        </div>
    );
}

export default Chairs;
