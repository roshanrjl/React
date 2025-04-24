import React from "react";
import {useEffect} from "react";

function GitHub(){
    const [data, setData] = React.useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/roshanrjl")
            .then((response) => response.json())
            .then((data) =>{

                console.log(data)
                setData(data);
            } )
                
             }, []);

    return (
        <>
            <p> The displayed data has been fetched from github using api</p>
            <div> Github-follwers:{data.followers}</div>
            <img src={data.avatar_url} alt="Github-profile" width={300} />

        </>
    );
    
}

export default GitHub;