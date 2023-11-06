import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const InputView = Object.freeze({
  async readLine(query) {
    const inputValue = await Console.readLineAsync(query);
    return inputValue;
  },

  async readPurchaseMoney() {
    const answer = await InputView.readLine(MESSAGES.readPurchaseMoney);
    return answer;
  },

  async readWinningNumbers() {
    const answer = await InputView.readLine(MESSAGES.readWinningNumbers);
    return answer;
  },

  async readBonusNumber() {
    const answer = await InputView.readLine(MESSAGES.readBonusNumber);
    return answer;
  },
});

export default InputView;
