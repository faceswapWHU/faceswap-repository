import{u,af as f}from"./hp5d10Ce.js";function m(e,a){const{title:r,titleTemplate:n,...o}=e;return u({title:r,titleTemplate:n,_flatMeta:o},{...a,transform(t){const s=f({...t._flatMeta});return delete t._flatMeta,{...t,meta:s}}})}export{m as u};