import { generateCards, generateEventCards, generateEvents, generateDefaultState } from './CardBuilder'
const fs = require('fs');

const basePath = './data/default/';
const writeData = (id: string, data: any) => {
    fs.writeFileSync(basePath + id  + '.json', JSON.stringify(data, undefined, "    "));
}

const cards = generateCards(100);
const eventCards = generateEventCards(10);
const events = generateEvents(eventCards);
const defaultState = generateDefaultState();

writeData('cards', cards);
writeData('event-cards', eventCards);
writeData('events', events);
writeData('default-state', defaultState);