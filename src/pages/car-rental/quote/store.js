const store = {
  state: {
    carType: null,
    prefecture: null,
    period: {
      start: null,
      end: null
    }
  },

  carTypes: {
    neo: {
      label: 'ネオ号タイプ (軽自動車)',
      pricePerDay: 50000
    },
    dogCar: {
      label: 'クイックデリバリー (普通自動車)',
      pricePerDay: 70000
    }
  },

  prefectures: {
    tokyoInner: {
      label: '東京23区内'
    },
    tokyoOuter: {
      label: '東京23区外'
    },
    chiba: {
      label: '千葉県'
    },
    saitama: {
      label: '埼玉県'
    },
    kanagawa: {
      label: '神奈川県'
    },
    other: {
      label: 'その他地域'
    }
  },

  setCarType(type) {
    if (this.carTypes[type] !== undefined) {
      this.state.carType = type;
    }
  },
  getCarType() {
    if (this.state.carType) {
      return this.carTypes[this.state.carType];
    }
    return null;
  },

  setPrefecture(pref) {
    if (this.prefectures[pref] !== undefined) {
      this.state.prefecture = pref;
    }
  },
  getPrefecture() {
    if (this.state.prefecture) {
      return this.prefectures[this.state.prefecture];
    }
    return null;
  }
};

export default store;
