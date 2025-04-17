import React, { useState } from "react";
import data from '../test-data/writing-prompts.json';

export default function PromptRand() {
    const [prompts, setPrompts] = useState<string[]>([]);

    const addPrompt = () => {
        let prompt = data.writing_prompts[0].prompts[Math.floor(Math.random()*data.writing_prompts[0].prompts.length)];
        setPrompts([...prompts, `${prompt}`]);
    }

    return (
        <>
            <p>
                {prompts[prompts.length-1]}



            </p>
            <button onClick={addPrompt}>New Prompt</button>
            <div>
                <button>&larr;</button>
                <button>&rarr;</button>
            </div>
        </>
    );

}

