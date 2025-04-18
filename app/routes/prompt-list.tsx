import data from '../test-data/writing-prompts.json';

export default function Promptlist() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px' }}>
            {data.writing_prompts.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#333', borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>
                {item.category}
                </h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {item.prompts.map((prompt, promptIndex) => (
                    <li key={promptIndex} style={{ marginBottom: '10px', color: '#555' }}>
                    {prompt}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
    );
}

