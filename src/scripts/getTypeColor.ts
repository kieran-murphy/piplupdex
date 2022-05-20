const getTypeColor = (type: any) => {
    switch (type) {
        case "normal":
            return "bg-normal";
        case "water":
            return "bg-water";
        case "fire":
            return "bg-fire";
        case "grass":
            return "bg-grass";
        case "ground":
            return "bg-ground";
        case "flying":
            return "bg-flying";
        case "bug":
            return "bg-bug";
        case "electric":
            return "bg-electric";
        case "poison":    
            return "bg-poison";
        case "dragon":    
            return "bg-dragon";
        case "rock":    
            return "bg-rock";
        case "dark":    
            return "bg-dark";
        case "ice":    
            return "bg-ice";
        case "fairy":    
            return "bg-fairy";
        case "psychic":    
            return "bg-psychic";
        case "ghost":    
            return "bg-ghost";
        case "fighting":    
            return "bg-fighting";
        case "steel":    
            return "bg-steel";
        
    
        default:
            return "bg-slate-300";
    }
  };
  
  export default getTypeColor;