const getTypeColor = (type: any) => {
    switch (type) {
        case "normal":
            return "bg-gradient-to-b from-normal to-slate-100";
        case "water":
            return "bg-gradient-to-b from-water to-slate-100";
        case "fire":
            return "bg-gradient-to-b from-fire to-slate-100";
        case "grass":
            return "bg-gradient-to-b from-grass to-slate-100";
        case "ground":
            return "bg-gradient-to-b from-ground to-slate-100";
        case "flying":
            return "bg-gradient-to-b from-flying to-slate-100";
        case "bug":
            return "bg-gradient-to-b from-bug to-slate-100";
        case "electric":
            return "bg-gradient-to-b from-electric to-slate-100";
        case "poison":    
            return "bg-gradient-to-b from-poison to-slate-100";
        case "dragon":    
            return "bg-gradient-to-b from-dragon to-slate-100";
        case "rock":    
            return "bg-gradient-to-b from-rock to-slate-100";
        case "dark":    
            return "bg-gradient-to-b from-dark to-slate-100";
        case "ice":    
            return "bg-gradient-to-b from-ice to-slate-100";
        case "fairy":    
            return "bg-gradient-to-b from-fairy to-slate-100";
        case "psychic":    
            return "bg-gradient-to-b from-psychic to-slate-100";
        case "ghost":    
            return "bg-gradient-to-b from-ghost to-slate-100";
        case "fighting":    
            return "bg-gradient-to-b from-fighting to-slate-100";
        case "steel":    
            return "bg-gradient-to-b from-steel to-slate-100";
        
    
        default:
            return "bg-slate-300";
    }
};

export default getTypeColor;