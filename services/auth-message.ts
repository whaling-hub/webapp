import dayjs from 'dayjs';

type MessageContent = {
  message: string;
  createdTime: number;
}

class AuthMessage {
  private _store: Record<string, MessageContent | undefined> = {};
  private _expiresTime: number = 5 * 60; // 过期时间，单位 s

  constructor(maxExpireTime?: number) {
    if (maxExpireTime) {
      this._expiresTime = maxExpireTime;
    }
  }

  private storeMessage(addr: string, message: string) {
    this._store[addr] = {
      message,
      createdTime: dayjs().unix(),
    };
  }

  private compareTime(unixTime: number = 0) {
    const now = dayjs().unix();
    return now - unixTime >= this._expiresTime;
  }

  private checkExpiredMessage() {
    Object.keys(this._store).forEach(key => {
      if (this._store[key] && this.compareTime(this._store[key]?.createdTime)) {
        this._store[key] = undefined;
      }
    });
  }

  public generate(addr: string) {
    // 在生成新的 Message 前，检查是否有过期未被清掉的数据；
    this.checkExpiredMessage();

    const message = `Address: ${addr}\n` + 'Message: Welcome To WhalingHub\n'
      + `nonce: ${Math.floor((1 + Math.random()) * 10000)}`;

    this.storeMessage(addr, message);

    return message;
  }

  public getMessageByAddr(addr: string) {
    return this._store[addr]?.message ?? '';
  }

  public deleteMessageByAddr(addr: string) {
    this._store[addr] = undefined;
  }
}

const authMessage = new AuthMessage();
export default authMessage;