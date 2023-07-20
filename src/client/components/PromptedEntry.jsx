import React, { useState } from 'react'; 

const PromptedEntry = () => {
    const [enteredEmotion, setEnteredEmotion] = useState('');
    const [generatedPrompts, setGeneratedPrompts] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const emotion = e.target[0].value;

        try {
            const response = await fetch('/generate_prompts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({emotion: emotion}), 
            })

            const prompts = await response.json();
            console.log(prompts);
            setGeneratedPrompts(prompts); 
        }
        catch (error) { 
            console.error(error); 
        }
    }

    const emotionChangeHandler = (e) => {
        setEnteredEmotion(e.target.value)
    }

    const entrySubmitHandler = async (e) => {
        e.preventDefault(); 
        const entry =  e.target[0].value; 
        console.log(entry)
    
        try {
            const response = await fetch('/entries', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    entry: entry,
                    prompts: generatedPrompts,
                    date: Date.now()
                }), 
            })

            const submitted = await response.json();
            console.log(submitted);
            setGeneratedPrompts(''); 
            setEnteredEmotion('');
        }
        catch (error) { 
            console.error(error); 
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} value={enteredEmotion}>
                <input type="text" placeholder="i'm feeling..." id="emotion" onChange={emotionChangeHandler} value={enteredEmotion}></input>
                <button>generate prompts</button>
            </form>
            {generatedPrompts ? 
            <div>
                <p>{`custom generated prompts for feeling ${enteredEmotion}:`}</p>
                <p>{generatedPrompts}</p>
                <form onSubmit={entrySubmitHandler}>
                    <input type='text'></input> 
                    <button>submit entry</button>
                </form>
            </div>
            : ''}
        </div>
    )    
}

export default PromptedEntry;