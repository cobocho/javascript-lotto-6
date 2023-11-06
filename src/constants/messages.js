import { Lotto, LottoReward } from '../domain/index.js';

const MESSAGES = Object.freeze({
  /**
   * @param {number} quantity
   * @returns {string}
   */
  printLottoQuantity(quantity) {
    return `\n${quantity}개를 구매했습니다.`;
  },

  /**
   * @param {Lotto[]} lottos
   * @returns {string}
   */
  printLottos(lottos) {
    return `${lottos.map((lotto) => `[${lotto.getNumbers().join(', ')}]`).join('\n')}\n`;
  },

  printWinningStatistics: '\n당첨 통계\n---',

  /**
   * @param {LottoReward} reward
   * @returns {string}
   */
  printReward(reward) {
    const quantity = reward.getQuantity();
    const { match, hasBonus } = reward.getRequirement();
    const prize = reward.getPrize().toLocaleString();
    return `${match}개 일치${hasBonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${quantity}개`;
  },

  /**
   * @param {number} earningRate
   * @returns {string}
   */
  printEarningRate(earningRate) {
    return `총 수익률은 ${earningRate.toLocaleString()}%입니다.`;
  },

  readPurchaseMoney: '구입금액을 입력해 주세요.\n',
  readWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  readBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

export default MESSAGES;
