const getTypeColor = (type: any) => {
    switch (type) {
        case "normal":
            return "bg-slate-300";
        case "water":
            return "bg-blue-300";
        case "fire":
            return "bg-red-300";
        case "grass":
            return "bg-green-300";
        case "bug":
            return "bg-orange-300";
    
        default:
            return "bg-slate-300";
    }
};

export default getTypeColor;