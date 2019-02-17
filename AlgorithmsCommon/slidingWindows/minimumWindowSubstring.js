function minimumWindowSubstring(S, T) {
    let shortest = [0, Infinity];
    let counts = {};
    let missingCharacters = T.length;

    // Create the counts hash table
    for (let i = 0; i < T.length; i++) {
        counts[T[i]] = 0;
    }

    let slow = 0;

    for (let fast = 0; fast < S.length; fast++) {
        // Check if character at fast index is in counts hash
        if (S[fast] in counts) {
            // if you haven't seen that character before
            if (counts[S[fast]] === 0) {
                // decrement number of missing characters
                missingCharacters -= 1;
            }

            // And add one to its counts value
            counts[S[fast]] += 1;
        }

        // Shrink window until you have an incomplete set
        while (missingCharacters === 0) {
            // Updates result range if smaller than previous range
            if ((fast - slow) < (shortest[1] - shortest[0])) {
                shortest[0] = slow;
                shortest[1] = fast;
            }

            if (S[slow] in counts) {
                counts[S[slow]] -= 1;

                if (counts[S[slow]] === 0) {
                    missingCharacters += 1;
                }
            }

            slow += 1;
        }
    }

    return shortest[1] === Infinity ? '' : S.slice(shortest[0], shortest[1] + 1);
}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"))