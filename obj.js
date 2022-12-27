spriteAnimation = [
   "idle" = {
      loc : [
         { x: 0, y: 0 },
         { x: 575, y: 0 },
         { x: 1150, y: 0 },
         { x: 1725, y: 0 },
         { x: 2300, y: 0 },
         { x: 3450, y: 0 }
      ]
   },
   "jump" = {
      loc : []

   }
];

console.log(spriteAnimation["idle"].loc[2].x); // 1150
console.log(spriteAnimation["idle"].loc.length); //7