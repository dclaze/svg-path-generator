class StateStore {
  loadDefaults() {
    const defaultPoints = [
      { x: 100, y: 300 },
      { x: 200, y: 300, q: { x: 150, y: 50 } },
      { x: 300, y: 300, q: { x: 250, y: 550 } },
      { x: 400, y: 300, q: { x: 350, y: 50 } },
      { x: 500, y: 300, c: [{ x: 450, y: 550 }, { x: 450, y: 50 }] },
      { x: 600, y: 300, c: [{ x: 550, y: 50 }, { x: 550, y: 550 }] },
      {
        x: 700,
        y: 300,
        a: {
          rx: 50, ry: 50, rot: 0, laf: 1, sf: 1,
        },
      },
    ];

    return {
      w: 800,
      h: 600,
      grid: {
        show: true,
        snap: true,
        size: 50,
      },
      shiftKey: false,
      points: defaultPoints,
      activePoint: defaultPoints.length - 1,
      draggedPoint: false,
      draggedQuadratic: false,
      draggedCubic: false,
      closePath: false,
    };
  }

  load() {
    try {
      const state = JSON.parse(localStorage.getItem('state')).state;

      if (state) {
        return state;
      }
      return this.loadDefaults();
    } catch (e) {
      return this.loadDefaults();
    }
  }

  store(state) {
    localStorage.setItem('state', JSON.stringify({
      state,
    }));
  }
}

window.StateStore = StateStore;
