const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  validationLength(length) {
    const lengthNum = Number(length);
    if (Number.isNaN(lengthNum)) {
      throw new Error("[ERROR]다리 길이는 숫자로 입력해주세요.");
    }
    if (lengthNum < 3 || lengthNum > 20) {
      throw new Error("[ERROR]다리 길이는 3~20 사이 숫자여야 합니다.");
    }
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (length) => {
      try {
        this.validationLength(length);
        return length;
      } catch (e) {
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (direction) => direction
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
