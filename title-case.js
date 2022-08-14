function titleCase(title, minorWords) {
    let finalTitle = title !== '' ? title.split(' ') : title;
    let mustLowerCase = minorWords !== '' && minorWords !== undefined ? minorWords.toLowerCase().split(' ') : [];

    if (finalTitle !== '') {
        finalTitle = finalTitle.map((a, ind) => {
            //  if returns lowered case if a includes in minorwords
            if (ind !== 0 && mustLowerCase.includes(a.toLowerCase()) && mustLowerCase !== '') {
                return a.toLowerCase();
            }

            //first word character
            const firstWordCha = a.split('')[0].toUpperCase();
            const nextCha = a
                .split('')
                .filter((x, z) => z !== 0)
                .join('')
                .toLowerCase();

            return firstWordCha.concat(nextCha);
        });

        return finalTitle.join(' ');
    }

    return finalTitle;
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
