import 'regenerator-runtime/runtime'

const requestAPI = async (mysite = '') => {
    const response = await fetch('http://localhost:808/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mysite: mysite }),
    })
    try {
        const newData = await response.json();
        console.log(newData);
        updateUI(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}
        
export const updateUI = (myData) => {
    document.getElementById('score_tag').innerHTML = "score_tag: " + myData.score_tag;
    document.getElementById('agreement').innerHTML = "agreement: " + myData.agreement;
    document.getElementById('subjectivity').innerHTML = "Subjectivity: " + myData.subjectivity;
    document.getElementById('confidence').innerHTML = "confidence: " + myData.confidence;
    document.getElementById('irony').innerHTML = "irony: " + myData.irony;


}


export { requestAPI }