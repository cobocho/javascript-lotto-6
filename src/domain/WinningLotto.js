import Lotto from '../Lotto.js';
import ApplicationError from '../exceptions/ApplicationError.js';
import LottoNumber from './LottoNumber.js';

class WinningLotto {
  static ERROR_MESSAGES = Object.freeze({
    invalidLottoArg: 'lotto에 Lotto를 입력해주세요!',
    invalidBonusArg: 'bonus에 LottoNumber를 입력해주세요!',
    existBonus: '당첨 번호에 보너스 번호가 존재합니다!',
    invalidGradeArg: 'grade의 인자로 Lotto를 입력해주세요!',
  });

  /**
   * 결과를 결정할 우승 로또입니다.
   * @type {Lotto}
   */
  #lotto;

  /**
   * 결과를 결정할 보너스 번호입니다.
   * @type {LottoNumber}
   */
  #bonus;

  /**
   * 결과를 결정할 우승 로또와 보너스 번호입니다.
   * @param {Lotto} lotto
   * @param {LottoNumber} bonus
   */
  constructor(lotto, bonus) {
    this.#validate(lotto, bonus);
    this.#lotto = lotto;
    this.#bonus = bonus;
  }

  /**
   * @param {Lotto} lotto
   * @param {LottoNumber} bonus
   * @returns {WinningLotto}
   */
  static of(lotto, bonus) {
    return new WinningLotto(lotto, bonus);
  }

  #validate(lotto, bonus) {
    if (!(lotto instanceof Lotto)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidLottoArg);
    }
    if (!(bonus instanceof LottoNumber)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidBonusArg);
    }

    if (lotto.match(bonus)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.existBonus);
    }
  }

  /**
   * `lotto`와 우승 로또가 몇 개의 숫자가 같은지와 보너스 소유 여부를 확인한다.
   * @param {Lotto} lotto
   * @returns {import('./LottoReward.js').RewardRequirement}
   */
  grade(lotto) {
    this.#validateGrade(lotto);

    const match = lotto.prepare(this.#lotto);
    const hasBonus = lotto.match(this.#bonus);

    return { match, hasBonus };
  }

  #validateGrade(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new ApplicationError(WinningLotto.ERROR_MESSAGES.invalidGradeArg);
    }
  }
}

export default WinningLotto;
