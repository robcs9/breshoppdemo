module.exports = async (image) => {
    try {
        const r = await fetch(image);
        return r;
    }
    catch(err) {
        console.log(err)
    }
};