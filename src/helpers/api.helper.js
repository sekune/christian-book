import axios from 'axios';
import config from '@/helpers/config.helper'

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(
                config.URL + url,
                data,
            )
            .then((httpResponse) => {
                resolve(httpResponse.data);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

const get = (url) => {
    return new Promise((resolve, reject) => {
        axios
            .get(
                config.URL + url,
            )
            .then((httpResponse) => {
                resolve(httpResponse.data);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

const resolver = (promise) => {
    return promise.then(resolve => {
        return [null, resolve]
    }).catch(reject => {
        return [reject, null]
    })
}


export default { get, post, resolver }

