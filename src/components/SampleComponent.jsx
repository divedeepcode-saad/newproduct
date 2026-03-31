import React from 'react';

export default function SampleComponent({name}) {
    return (
        <div>
            <h1>Welcome Mr. {name} to My Component</h1>
            <p>This is a simple React component.</p>
        </div>
    );
}