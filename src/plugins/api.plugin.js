import router from '@/router/'
import client from '@/helpers/api.helper'
import config from '@/helpers/config.helper'
export default (store) => {
    try {
        store.$api = async (url1, data) => {
            const url = config.URL + url1;
            console.log(url, data)
            const [err, res] = await client.resolver(client.post(url, data))
            if (err) {
                if (err.response.status && err.response.status === 401) {
                    store.commit('setUser', null);
                    router.push('/login');
                    return;
                }
                console.log('api error: \n');
                console.log(err);
            }
            return res;
        };
    } catch (error) {
        console.warn('client plugin err:', error);
    }
}