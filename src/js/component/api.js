export async function getAllPeople() {
    const response = await fetch(
        "https://www.swapi.tech/api/people"
    );
    const payload = await response.json();
    return payload.results 

}
export async function getAllPlanets() {
    const response = await fetch(
        "https://www.swapi.tech/api/planets"
    );
    const payload = await response.json();
    return payload.results 

}
export async function getAllVehicles() {
    const response = await fetch(
        "https://www.swapi.tech/api/starships"
    );
    const payload = await response.json();
    return payload.results 

}
