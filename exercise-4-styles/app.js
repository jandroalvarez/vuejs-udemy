new Vue({
  el: '#exercise',
  data: {
    activeEffect:'',
    userClass: '',
    userClass2: '',
    isBlack:false,
    userColor: 'blue',
    myWidth:0
  },
  methods: {
    startEffect: function() {
      var vm = this;
    setInterval(() => {
      if(vm.activeEffect == '')
        vm.activeEffect = 'shrink';
      else if(vm.activeEffect == 'shrink')
        vm.activeEffect = 'highlight';
      else
        vm.activeEffect = 'shrink';        
    }, 1000);
    },

    startProgress: function() {
      var vm = this;
      setInterval(() => {
        if(vm.myWidth < 50)
          vm.myWidth = vm.myWidth + 5;
      }, 1000);
    }
  }
});
