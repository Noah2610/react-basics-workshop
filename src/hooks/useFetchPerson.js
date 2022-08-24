import { useState, useEffect } from "react";

const URL = "https://swapi.dev/api/people/1";

export default function useFetchPersonData() {
    const [personData, setPersonData] = useState(null);

    useEffect(() => {
        async function fetchPerson() {
            const response = await fetch(URL, { method: "GET" });
            const data = await response.json();
            setPersonData(data);
        }
        fetchPerson();
    }, []);

    return personData;
}