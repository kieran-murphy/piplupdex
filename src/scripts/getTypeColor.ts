const getTypeColor = (type: any) => {
    switch (type) {
        case "normal":
            return "bg-slate-300";
        case "water":
            return "bg-blue-300";
        case "fire":
            return "bg-red-400";
        case "grass":
            return "bg-green-300";
        case "ground":
            return "bg-stone-500";
        case "flying":
            return "bg-blue-400";
        case "bug":
            return "bg-orange-300";
        case "electric":
            return "bg-yellow-300";
        case "poison":    
            return "bg-purple-600";
        case "dragon":    
            return "bg-blue-500";
        case "rock":    
            return "bg-stone-300";
        case "dark":    
            return "bg-slate-600";
        case "ice":    
            return "bg-blue-100";
        case "fairy":    
            return "bg-red-100";
        case "psychic":    
            return "bg-rose-300";
        case "ghost":    
            return "bg-indigo-600";
        case "fighting":    
            return "bg-red-400";
        case "steel":    
            return "bg-slate-400";
        
    
        default:
            return "bg-slate-300";
    }
};

export default getTypeColor;