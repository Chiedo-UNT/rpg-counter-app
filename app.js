const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('rpgCharacters');
    return saved ? JSON.parse(saved) : [];
};

const saveToLocalStorage = (characters) => {
    localStorage.setItem('rpgCharacters', JSON.stringify(characters));
};

const CharacterCounterApp = () => {
    const [characters, setCharacters] = React.useState(loadFromLocalStorage());
    const [currentCharacter, setCurrentCharacter] = React.useState(null);
    const [newCharacterName, setNewCharacterName] = React.useState('');
    const [deleteMode, setDeleteMode] = React.useState(false);
    const [colorMode, setColorMode] = React.useState(false);
    const [selectedColor, setSelectedColor] = React.useState(null);

    React.useEffect(() => {
        saveToLocalStorage(characters);
    }, [characters]);

    // ... (le reste du code de votre composant React)

    return (
        // ... (le JSX de votre composant)
    );
};

ReactDOM.render(React.createElement(CharacterCounterApp), document.getElementById('root'));
