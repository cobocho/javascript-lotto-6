import Controller from './controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();
    await controller.start();
  }
}

export default App;
