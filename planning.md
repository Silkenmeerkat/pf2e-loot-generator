# Pf2e loot generator. 

# MVP
1. Take a level of the party, + number of party members output suggestions to equal to total level of loot. 
## Technical steps to do mvp. 
1. Pull the entire "db" from github pf2e foundry  link (every few weeks refresh?) https://github.com/foundryvtt/pf2e/tree/master/packs/equipment
2. Choose a cheap/free db solution. 
3. Store the data. (learn how :))
4. Build an interface that asks for number of party members + level of party.
5. Calculate the request: 
    a. Get the value total for party. (this table: https://2e.aonprd.com/Rules.aspx?ID=581)
    b. Get recomended options + currency from table. 
    c. Choose the number of items, add their values together and spit out currency amount. 
6. Build an interface that outputs the values. 

## Architectural Notes

1. DBs: 



## Nice to haves after core is done. 
1. reroll individual items maintain total party spend. 
2. allow picking of individual items from list. (searchable)
3. store the level planner (somehow?)
4. Dynamically generate all wands/scrolls and their values/weights/stats. 
5. No guns button. 
6. No Magic button.
7. Party makeup hints? (aka, try and choose best items by party members class and spread them around)
8. formulas (dynamic)