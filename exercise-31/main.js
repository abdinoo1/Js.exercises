async function fetchdata() {
    console.log("fadlan sug xogta")
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)

         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

         const users = await response.json();
        console.log("List of users:", users);

    } catch(error){
        console.error("xogtaada way khaldan tahay", error)
    }
}
fetchdata()