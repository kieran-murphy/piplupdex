function getGen(id: number): string {
    if (id < 152) {
        return "I";
    } else if (id < 252) {
        return "II";
    } else if (id < 387) {
        return "III";
    } else if (id < 494) {
        return "IV";
    } else if (id < 650) {
        return "V";
    } else if (id < 722) {
        return "VI";
    } else if (id < 810) {
        return "VII";
    } else if (id < 906) {
        return "VIII";
    } else {
        return "IX";
    }
};

export default getGen;