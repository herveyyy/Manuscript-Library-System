import React from 'react';
import manuscript from '../data/manuscriptData';
import ManuscriptItem from './ManuscriptItem';
function Manuscript(){
return(
    
    <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
   {manuscript.map(project => ( 
   <ManuscriptItem
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
        link={project.link}
    />
    ))}
    </div>
    </div>



)
}
export default Manuscript;