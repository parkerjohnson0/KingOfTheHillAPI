interface CharacterService{
    getCharacter:(characterID: number, show:Show, searchTerm: string) => Promise<Character>
}