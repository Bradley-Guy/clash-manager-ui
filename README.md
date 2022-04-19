# This is the UI for ClashManager.
## Running Locally:
### Steps:
1. Install node.js version 14
2. Clone this repository
3. Open the repository in a terminal and run `npm install` and `npm start`. The site should open in a browser.
4. Run [ClashManager](https://github.com/Nuri-G/ClashManager) locally (see link for instructions)

## Features:
### Ranking Clan Members
- Rank clan members by their:
    - Trophies
    - Last online timestamp
    - Cards donated
    - Cards received
    - War score
- Use sliders to adjust how much each category affects player's rankings.For example, if your clan doesn't care about donations, you can set those categories to 0.

### Visualize clan stats over time
- Clan history starts gettign tracked as soon as you search the clan
    - History is updated every 15 minutes
        - To make this faster, you can change the chron schedule in ClashManager's [ClanHistoryTimer](https://github.com/Nuri-G/ClashManager/blob/master/ClanHistoryTimer/function.json).