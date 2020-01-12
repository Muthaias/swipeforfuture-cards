import { CardData, EventCard, EventCards, WorldEvent, WorldQuery, CardActionData } from "./Types";

type ContentDescriptor = {
    id: string;
    tags: string[];
}

type ImageSelector = {
    path: string;
    tags: string[];
};


const systemImages: ImageSelector[] = [
    ...[
        "https://images.unsplash.com/photo-1548324431-c389aaf2beb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1552931773-ab388478c964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1513894697031-3e3aa4c54326?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        "https://images.unsplash.com/photo-1551964508-20b2b2e81667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1485504750689-aa2121ffe6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1383&q=80",
        "https://images.unsplash.com/photo-1520085401243-fa89fc9ff1b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80",
        "https://images.unsplash.com/photo-1522521590041-c528df486dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ].map((path) => ({
        path: path,
        tags: ["security", "money", "people", "riot"]
    })),
    ...[
        "https://images.unsplash.com/photo-1575322299943-6d1da86714cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
        "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80",
        "https://images.unsplash.com/photo-1567427361940-521d3e67e193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80",
        "https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1567427362138-e33c5022aafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80",
        "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1560249953-598cedd0e273?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
        "https://images.unsplash.com/photo-1575654402689-8f45b1ee6179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80",
    ].map((path) => ({
        path: path,
        tags: ["environment", "money", "people", "medicine", "epidemic"]
    })),
    ...[
        "https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1376&q=80",
        "https://images.unsplash.com/photo-1556903896-9621381094fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1517925035435-7976539b920d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
        "https://images.unsplash.com/photo-1534019578419-467eea43e6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1510495760542-cbdff3ea7707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80",
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1531326537431-6197cac3795b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1554511491-0f21bacd5ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552783160-27bfdb2625d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1560&q=80",
        "https://images.unsplash.com/photo-1525331336235-d3153d7e58cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1559842911-b901e423a777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1537084642907-629340c7e59c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        "https://images.unsplash.com/photo-1571148433633-f62d3cdb5eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ].map((path) => ({
        path: path,
        tags: ["environment", "people", "pollution"]
    })),
    ...[
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    ].map((path) => ({
        path: path,
        tags: ["environment", "nature"]
    })),
    ...[
        "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        "https://images.unsplash.com/photo-1548613053-22087dd8edb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1508014323148-9b074569d0b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80",
        "https://images.unsplash.com/photo-1556834234-f876cf788b3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1283&q=80",
        "https://images.unsplash.com/photo-1561623002-b3520705eccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        "https://images.unsplash.com/photo-1553502141-c1eabd05ecc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1534794369989-3f4f160567e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80",
        "https://images.unsplash.com/photo-1576053437895-4253b2d33985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80",
        "https://images.unsplash.com/photo-1562753041-cb2efeb58ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ].map((path) => ({
        path: path,
        tags: ["money", "people", "power"]
    })),
    ...[
        "https://images.unsplash.com/photo-1485745492261-a3819c494d11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1494250820633-bd56384512d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1214&q=80",
        "https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1522033582568-8128a7fb6031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1522176223820-4326b4417597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ].map((path) => ({
        path: path,
        tags: ["money", "people", "security"]
    })),
    ...[
        "https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1569225060633-100d2b8e2bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1569225022281-f652746229fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1569060368746-4b99609d49d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1569326513296-6112506c096d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ].map((path) => ({
        path: path,
        tags: ["money", "people", "environment"]
    })),
].map(image => ({
    path: image.path.replace(/w=\d+/, "w=400&h=600"),
    tags: image.tags,
}));

const contentDescriptors: ContentDescriptor[] = [
    {id: "land-pollution", tags: ["environment", "security", "pollution"]},
    {id: "air-pollution", tags: ["environment", "security", "pollution"]},
    {id: "water-pollution", tags: ["environment", "security", "pollution"]},
    {id: "drought", tags: ["environment", "drought"]},
    {id: "civil-unrest", tags: ["security", "people", "riot"]},
    {id: "forest-fire", tags: ["environment", "drought"]},
    {id: "riot", tags: ["security", "people", "riot"]},
    {id: "smog", tags: ["environment", "pollution"]},
    {id: "infrastructure", tags: ["money", "security"]},
    {id: "medicine", tags: ["money", "people", "medicine"]},
    {id: "war", tags: ["security", "people"]},
    {id: "international-conflict", tags: ["security", "people"]},
    {id: "economic-blockade", tags: ["security", "money"]},
    {id: "education", tags: ["money", "people"]},
    {id: "import", tags: ["money"]},
    {id: "export", tags: ["money"]},
    {id: "immigration", tags: ["security", "people", "money"]},
];

const mainParameters = [
    "money",
    "environment",
    "security",
    "people",
];
const systemParameters: string[] = [
    "medicine",
    "nature",
    "power",
    "pollution",
    "epidemic",
    "riot",
];

const arrayOfLength = (count: number): unknown[] => Array.apply(null, Array(count));
const randomCount = (min: number, max: number) => Math.floor(Math.random() * (max - min)) % Math.floor(max - min) + min;
const randomRange = (min: number, max: number) => {
    const start = randomCount(min, max);
    const stop = randomCount(start, max);
    return [start, stop];
}
const randomParameters = (parameters: string[], max?: number, min: number = 1): string[] => {
    max = max === undefined ? parameters.length : Math.min(max, parameters.length);
    const count: number = randomCount(min, max);
    let selectedParameters = [...parameters];
    while (count < selectedParameters.length) {
        selectedParameters.splice(Math.floor(Math.random() * parameters.length) % parameters.length, 1);
    }
    return selectedParameters;
}
const randomAction = (parameters: string[]): CardActionData => {
    return {
        modifier: {
            type: 'add',
            state: randomParameters(parameters).reduce((acc, pid) => (
                Object.assign(acc, {[pid]: Math.sign(0.5 - Math.random()) * randomCount(10, 30)})
            ), {}),
            flags: {}
        }
    };
}
const randomWorldQuery = (parameters: string[]): WorldQuery => {
    return {
        state: randomParameters(parameters).reduce((acc, pid) => (
            Object.assign(acc, {[pid]: randomRange(0, 100)})
        ), {}),
    };
}
const tagComparision = (tags: string[], parameters: string[]) => tags.filter(tag => parameters.includes(tag)).length / tags.length;
function selectItem<T extends {tags: string[]}>(items: T[], parameters: string[]): T {
    const selectedItem = items.reduce((currentItem, item) => {
        const value = tagComparision(item.tags, parameters);

        if (value > currentItem.value || (value === currentItem.value && Math.random() > 0.5)) {
            return {
                value: value,
                item: item,
            };
        } else {
            return currentItem;
        }
    }, {
        value: tagComparision(items[0].tags, parameters),
        item: items[0],
    });
    return selectedItem.item;
}
const randomImage = (parameters: string[], images: ImageSelector[], actionParameters: string[]): string => {
    return selectItem(images, [...parameters, ...actionParameters]).path;
}
const randomTitle = (parameters: string[], actionParameters: string[], contents: ContentDescriptor[]): string => {
    return selectItem(contents, [...parameters, ...actionParameters]).id + " (" + parameters.join(", ") + ")";
}
const randomText = (parameters: string[], actionParameters: string[], left: CardActionData, right: CardActionData): string => {
    return [
        "left: " + JSON.stringify(left.modifier),
        "right: " + JSON.stringify(right.modifier),
    ].join("\n\n");
}

export const generateCards = (numberOfCards: number): CardData[] => {
    return arrayOfLength(numberOfCards).map<CardData>((_, index) => {
        const selectionParameters = [
            ...randomParameters(systemParameters, 2, 0),
            ...randomParameters(mainParameters, 3, 1)
        ];
        const actionParameters = [
            ...randomParameters(systemParameters, 2, 0),
            ...randomParameters(mainParameters, 3, 2)
        ];
        const isAvailableWhen = arrayOfLength(randomCount(1, 3)).map((_) => randomWorldQuery(selectionParameters));
        const left = randomAction(actionParameters);
        const right = randomAction(actionParameters);
        const card: CardData = {
            type: "card",
            image: randomImage(selectionParameters, systemImages, actionParameters),
            title: randomTitle(selectionParameters, actionParameters, contentDescriptors),
            text: randomText(selectionParameters, actionParameters, left, right),
            weight: 1,
            distance: [selectionParameters, actionParameters].join(", "),
            isAvailableWhen: isAvailableWhen,
            actions: {
                left: left,
                right: right,
            }
        };
        return card;
    });
}

export const generateEventCards = (numberOfCards: number): EventCards  => {
    const cards = arrayOfLength(numberOfCards).map<EventCard>((_, index) => {
        const selectionParameters = [
            ...randomParameters(systemParameters, 2, 0),
            ...randomParameters(mainParameters, 3, 1)
        ];
        const actionParameters = [
            ...randomParameters(systemParameters, 2, 0),
            ...randomParameters(mainParameters, 3, 2)
        ];
        const left = Object.assign(randomAction(actionParameters), {});
        const right = randomAction(actionParameters);
        const card: EventCard = {
            type: "event",
            image: randomImage(selectionParameters, systemImages, actionParameters),
            title: randomTitle(selectionParameters, actionParameters, contentDescriptors),
            text: randomText(selectionParameters, actionParameters, left, right),
            weight: 1,
            distance: [selectionParameters, actionParameters].join(", "),
            actions: {
                left: left,
                right: right,
            }
        }
        return card;
    });
    return cards.reduce<EventCards>((acc, c, index) => {
        const id = "event_card_" + index;
        acc[id] = c;
        return acc;
    }, {});
}

export const generateEvents = (eventCards: EventCards): WorldEvent[] => {
    return Object.keys(eventCards).map(id => {
        const selectionParameters = randomParameters(systemParameters, 3, 1);
        const shouldTriggerWhen = arrayOfLength(randomCount(1, 3)).map((_) => randomWorldQuery(selectionParameters));
        return {
            probability: Math.min(1, 0.1 + Math.random()),
            shouldTriggerWhen: shouldTriggerWhen,
            initialEventCardId: id
        };
    });
}

export const generateDefaultState = () => {
    return {
        state: [...mainParameters, ...systemParameters].reduce((acc, id) => {
            acc[id] = 20 + Math.floor(Math.random() * 50);
            return acc;
        }, {}),
        flags: {},
    }
}