import React from "react";
import mentor1 from '../Images/mentor1.svg';
import mentor2 from '../Images/mentor2.svg';
import mentor3 from '../Images/mentor3.svg';
import mentor4 from '../Images/mentor4.svg';
import mentor5 from '../Images/mentor5.svg';
import mentor6 from '../Images/mentor6.svg';


function Mentors() {
    const mentors = [
        { id: 1, name: "Ahmad Westervelt", work: "Instructor (Python and AI/ML)", image: mentor1 },
        { id: 2, name: "Hanna Passaquindici Arcand", work: "Instructor (Python and AI/ML)", image: mentor2 },
        { id: 3, name: "Phillip Levin", work: "Instructor (Python and AI/ML)", image: mentor3 },
        { id: 4, name: "Ruben Korsgaard", work: "Instructor (Python and AI/ML)", image: mentor4 },
        { id: 5, name: "Dulce Lipshutz", work: "Instructor (Python and AI/ML)", image: mentor5 },
        { id: 6, name: "Kianna Workman", work: "Instructor (Python and AI/ML)", image: mentor6 },
    ];

    return (
        <div>
            <div className="container mx-auto md:p-8">
                <div className="text-center my-8">
                    <p className="font-clash lg:text-5xl text-4xl font-semibold text-custom-gray">
                        Our Mentors
                    </p>
                </div>
                <div className="flex flex-wrap justify-center pt-6 px-4">
                    {mentors.map((mentor) => (
                        <div key={mentor.id} className="w-full sm:w-1/2 md:w-1/3 p-2 text-center">
                            <img src={mentor.image} alt={mentor.name} className="w-full h-400px rounded-40px" />
                            <p className=" font-clash font-semibold mt-2 text-start text-2xl leading-8 pt-6">{mentor.name}</p>
                            <p className=" font-outfit font-light text-base text-start leading-6 pt-5 pb-5">{mentor.work}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Mentors;




