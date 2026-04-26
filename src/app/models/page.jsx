import ModelCard from '@/components/ModelCard';
import React from 'react';

const ModelsPage = async () => {
    const res = await fetch('http://localhost:8000/models', {cache: 'no-store'});
    const models = await res.json();
    console.log(models);

    return (
        <div>
            <h2 className="text-center font-bold text-3xl">Models</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    models.map(model => <ModelCard key={model.id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default ModelsPage;