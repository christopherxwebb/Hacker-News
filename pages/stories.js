import view from '../utils/view.js';

export default async function Stories(path) {
   const stories = await getStories(path);


    view.innerHTML = `<div>${path}</div>`;
}

async function getStories(path) {
    const isHomeRoute = path === '/';
    if (isHomeRoute) {
        path = '/news';
    }
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}

//https://node-hnapi.herokuapp.com

// /(Top) -> /new
// /(New) -> /newest
// /(Ask) -> /ask
// /(Show) -> /show

// Can add 'jobs' route too at a later date