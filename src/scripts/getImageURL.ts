function getImageURL(id: string): string {
    let returnID;
    if (Number(id) < 10) {
        returnID = "00" + id;
    } else if (Number(id) < 100) {
        returnID = "0" + id;
    } else {
        returnID = id;
    }
    return returnID;
};

export default getImageURL;