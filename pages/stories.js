import view from '../utils/view.js';

export default function Stories(path) {
    view.innerHTML = `<div>${path}</div>`;
}

//https://node-hnapi.herokuapp.com

// /(Top) -> /new
// /(New) -> /newest
// /(Ask) -> /ask
// /(Show) -> /show

// Can add 'jobs' route too at a later date