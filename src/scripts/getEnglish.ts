function getEnglish(languages: any[]):string {
    let flavorText = ""
    let counter = 0
    while (!flavorText && counter < languages.length) {
        if (languages[counter].language.name === "en") {
            flavorText = languages[counter].flavor_text
        } else {
            counter += 1
        }
    }
    return flavorText
}

export default getEnglish;