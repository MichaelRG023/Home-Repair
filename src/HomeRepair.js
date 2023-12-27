
function HomeRepair(){

    fetch("http://localhost:3000/Repairs")
    .then(response=>response.json())
    .then(data => console.log(data))

    



    return(
        <div>

        </div>
    )
}

export default HomeRepair;