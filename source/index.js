import Debugger from './components/Debugger';
import Component from './components/Component';


class Main extends Component{

  constructor () {
    super();
    Debugger.active = false;
  };
  
  debugHelloWorld = () => {
    Debugger.log('Olá mundo');
  };
  
  debugSimpleText = () => { 
    Debugger.log(asdk);
  };
  
  sumEqualFive = (num1, num2) => {
    return num1 + num2;
  };
}

var m = new Main();

Debugger.log('aa');
m.draw();
Debugger.log(m.sumEqualFive(10,10));

export default Main;