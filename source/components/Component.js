import Debugger from './Debugger';

class Component {
  draw = () => {
    Debugger.active = true;
    Debugger.log('drawed');
  };
}

export default Component;