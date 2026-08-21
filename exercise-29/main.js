async function fatchexercise() {
    console.log("jawaabta sug")
    const response = await fetch('data.json')
    const data = await response.json()
    console.log(data)
}

fatchexercise()