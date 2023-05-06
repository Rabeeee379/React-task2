import React from "react";
import "./App.css";

function App (){
    async function getAdvice(){
        const x = await fetch("https://api.adviceslip.com/advice")
        const y = await x.json();
        const advice = y.slip.advice;
        document.getElementById("advice").innerHTML = advice ;
    }
    
    return(
        <div className="main">
            <div className="card">
                <div id="advice">
                    
                </div>
                <div>
                    <button className="advice-btn" onClick={getAdvice}>click for advice</button>
                </div>
                
            </div>
        </div>
    )
    
    
}


export default App;
/*
echo "# React-task2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Rabeeee379/React-task2.git
git push -u origin main
*/