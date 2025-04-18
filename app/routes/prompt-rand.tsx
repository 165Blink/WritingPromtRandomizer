import React, { useState } from "react";
import data from '../test-data/writing-prompts.json';

export default function PromptRand() {
    const [prompts, setPrompts] = useState<string[]>([]);
    const [promptToView, setPromptToView] = useState<string>("");
    const [promptIndex, setPromptIndex] = useState<number>(0);

    const addPrompt = () => {
        let prompt = data.writing_prompts[0].prompts[Math.floor(Math.random() * data.writing_prompts[0].prompts.length)];
        setPrompts([...prompts, `${prompt}`]);
        setPromptToView(prompt);
        setPromptIndex(prompts.length);
    }

    const moveToPreviousPrompt = () => {
        if (promptIndex > 0) {
            let prompt = prompts[promptIndex - 1];
            setPromptToView(prompt);
            setPromptIndex(promptIndex - 1);
        }
    }
    const moveToNextPrompt = () => {
        if (promptIndex < prompts.length - 1) {
            let prompt = prompts[promptIndex + 1];
            setPromptToView(prompt);
            setPromptIndex(promptIndex + 1);
        }
    }

    return (
        <>
            <p>
                {promptToView}
            </p>
            <button className="bg-blue-700" onClick={addPrompt}>New Prompt</button>
            <div>
                <button className="bg-blue-200" onClick={moveToPreviousPrompt} style={{ marginRight: "10px", padding: "5px 10px", fontSize: "16px", cursor: "pointer" }}>
                    &larr;
                </button>
                <button  className="bg-blue-200" onClick={moveToNextPrompt} style={{ padding: "5px 10px", fontSize: "16px", cursor: "pointer" }}>
                    &rarr;
                </button>
            </div>
        </>
    );

}

