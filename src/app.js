const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon", "lockercom", "nikuk", "okreai"];
const domains = ["com", "uk", "org", "ai"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < domains.length; l++) {
        const extension = domains[l];
        let domain = pronouns[i] + adjectives[j];
        let noun = nouns[k];
        let domainNameWithExtension = "";
        // Add the characters of the domain and noun
        for (let b = 0; b < domain.length; b++) {
          domainNameWithExtension += domain[b];
        }
        for (let p = 0; p < noun.length; p++) {
          domainNameWithExtension += noun[p];
        }
        let endMatch = true;
        // Compare the characters of the noun and extension
        for (let q = 1; q <= extension.length; q++) {
          if (noun[noun.length - q] !== extension[extension.length - q]) {
            endMatch = false;
          }
        }
        // Check if the noun end is same with the extension
        if (noun.length >= extension.length && endMatch) {
          // If the noun has the same end with the extension, remove it from the domain name
          for (
            let o = domain.length;
            o < domainNameWithExtension.length - extension.length;
            o++
          ) {
            domain += domainNameWithExtension[o];
          }
          domainNameWithExtension = domain + "." + extension;
        } else {
          domainNameWithExtension = domainNameWithExtension + "." + extension;
        }
        console.log(domainNameWithExtension);
      }
    }
  }
}
