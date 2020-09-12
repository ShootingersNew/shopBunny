const axios = require('axios');

const instance = axios.create({
    baseURL: ' http://localhost:3004/'
});

const getter = (url) => {
    return instance.get('/' + url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
};

export const api = {
    get(url = 'allProjects') {
        return getter(url)
    },
    filterByTags(baseUrl, tag) {

        return getter(baseUrl)
            .then((res) => {
                return res.filter(item => {
                    const tags = item.filterTags;
                    return tags.includes(tag)
                });
            });
    }
};