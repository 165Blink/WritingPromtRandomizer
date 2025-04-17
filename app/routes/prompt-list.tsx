import data from '../test-data/writing-prompts.json';

export default function Promptlist() {
    return (
        <div>
            {data.writing_prompts.map((item) => (
                <div>
                    <h2>{item.category}</h2>
                    <ul>
                        {item.prompts.map((prompt) => (
                            <li>{prompt}</li>
                        ))}
                    </ul>
                    <br />
                </div>
            ))}
        </div>
    );
}

