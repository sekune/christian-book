const get = (key) => {
    const item = localStorage.getItem(key);
    try {
        return JSON.parse(item);
    } catch (error) {
        return item;
    }
}

const set = (key, item) => {
    if (item instanceof Object) {
        localStorage.setItem(key, JSON.stringify(item));
        return;
    }

    localStorage.setItem(key, item);
}

const clear = () => {
    const theme = get('theme');
    localStorage.clear();
    set('theme', theme);
}

export default {
    get,
    set,
    clear,
}