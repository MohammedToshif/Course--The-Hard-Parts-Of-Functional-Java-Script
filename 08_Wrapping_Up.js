
                    //----- (01) - (Wrapping Up)

// Readable, debuggable and easy to add features

pipe(
    getPlayerName,
    getFirstName,
    properCase,
    addUserLabel,
    createUserTemplate
)([{ name: 'will sentance', score: 3 }]);

/*  But our code is now a set of independent, self contained
steps we can wield to solve any problem and become
true composers of our code. */