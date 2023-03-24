const pronouns = ["the", "our"];
const adjectives = ["great", "bc"];
const nouns = ["om", "racoon", "lockercom", "nikuk", "okreai"];
const domains = ["com", "uk", "org", "ai"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < domains.length; l++) {
        const extension = domains[l];
        let domain = pronouns[i] + adjectives[j];
        let noun = nouns[k];
        let domainNameWithExtension = domain + noun;
        let endMatch = true;
        let check = pronouns[i] + adjectives[j] + nouns[k];
        let q = 1;
        while (q <= extension.length) {
          if (check[check.length - q] !== extension[extension.length - q]) {
            endMatch = false;
            break;
          }
          q++;
        }
        if (endMatch) {
          let hackDomain = "";
          let x = 0;
          while (x < check.length - extension.length) {
            hackDomain += check[x];
            x++;
          }
          domainNameWithExtension = hackDomain + "." + extension;
        } else {
          domainNameWithExtension = domainNameWithExtension + "." + extension;
        }
        console.log(domainNameWithExtension);
      }
    }
  }
}
