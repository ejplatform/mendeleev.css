import {page} from "../base";


export let Organization = page(`# How does it work?

## Sizing

1. All sizes are measured in rems
2. We do not set the font-size in body and create responsive queries for setting
   relative font-sizes in the html element. For most users 1rem = 16px. Users
   can set larger (or smaller) font sizes globally (e.g.: font-size: 150%) and
   affect all websites. We honor the users intent and do not hardcode any 
   absolute value in html font-size property.
 

## Box sizing

Mendeleev sets \`box-sizing: border-box\` to all elements in the page. This 
option cannot be overridable. However, you can revert some element and all
of its descendants to the default \`box-sizing: content-box\` behavior by 
adding the \`reset-box-sizing\` class to it.


## Animations

Most transitions are marked with a global duration. We only blacklist font-size,
since it creates sluggish transitions when window size is changed.  

## Resets

An atomic CSS lib.
`);
