import Component from './components/Component';

class Main extends Component{
  
  debugHelloWorld = () => {
    // console.log('Olá mundo');
  };
  
  debugSimpleText = () => {
    // console.log(asdk);
  };
  
  sumEqualFive = (num1, num2) => {
    return num1 + num2;
  };
}

var m = new Main();

console.log('aa');
console.log(m.sumEqualFive(10,10));
m.draw();

export default Main;