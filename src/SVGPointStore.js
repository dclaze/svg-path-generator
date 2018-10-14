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

class SVGPointStore {
  loadDefaults() {
    return defaultPoints;
  }

  load() {
    try {
      const points = JSON.parse(localStorage.getItem('points')).points;

      if (points) {
        return points;
      }
      return defaultPoints;
    } catch (e) {
      return defaultPoints;
    }
  }

  store(points) {
    localStorage.setItem('points', JSON.stringify({
      points,
    }));
  }
}

window.SVGPointStore = SVGPointStore;
