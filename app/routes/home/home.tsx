import { baseMeta } from '../../utils/meta';
import { Page } from '../../stories/page/Page';
import config from '../../config.json';


export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {  
  

  return (
    <div data-bs-theme="dark">                  
       <Page />   
    </div>
  );
};
