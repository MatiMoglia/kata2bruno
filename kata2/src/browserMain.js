import { handleSilverCardActions } from './actions/SilverCardActions.js';
import { handleGoldCardActions } from './actions/GoldCardActions.js';

const output = document.getElementById("output");

handleSilverCardActions(output);
handleGoldCardActions(output);
