import useFetchPersonData from "../hooks/useFetchPerson";

export default function Person() {
    const personData = useFetchPersonData();

    if (!personData) {
        return null;
    }

    return (
        <>
            {personData.name}
        </>
    );
}