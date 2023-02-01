import { inline } from "./inline.js";
// import { inline as i } from "./inline.js";
// i()
// podemos renomealo dessa forma

import defaultInline from "./inline.js";
// dessa forma podemos mudar o nome diretamente na linha.

import { group } from "./non-inline.js";

import exportDefaut from "./non-inline.js";

// import exportDefaut, {group} from "./non-inline.js";
// Podemos usalos na mesma linha

inline();
defaultInline();

group();
exportDefaut();
